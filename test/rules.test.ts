// eslint-disable-next-line import/no-unresolved -- ok
import { rules as tsRules } from '@typescript-eslint/eslint-plugin'
import { ESLint, Linter } from 'eslint'
// @ts-expect-error - ok
import { rules as importRules } from 'eslint-plugin-import'
import { rules as jestRules } from 'eslint-plugin-jest'
import _ from 'lodash'

describe('ESLint rules', () => {
  it.each(['js', 'ts', 'test.js', 'test.ts', 'e2e.js', 'e2e.ts'])(
    'should match defined rules for %s',
    async ext => {
      const engine = new ESLint({ cwd: `${__dirname}/..` })
      const fileConfig = await engine.calculateConfigForFile(`index.${ext}`)
      expect(fileConfig).toMatchSnapshot(
        {
          parser: expect.stringMatching('node_modules/@typescript-eslint/parser/dist/index.js'),
        },
        'Applied rules',
      )
      const rulesList = [
        Array.from(new Linter().getRules().keys()),
        Object.keys(tsRules).map(r => `@typescript-eslint/${r}`),

        Object.keys(importRules).map(r => `import/${r}`),

        Object.keys(jestRules).map(r => `jest/${r}`),
      ].flat(1)

      expect(_.difference(rulesList, Object.keys(fileConfig.rules))).toMatchSnapshot(
        'Ignored rules',
      )
    },
  )
})
