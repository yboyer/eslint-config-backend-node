module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    project: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'unused-imports',
    'jest',
    'simple-import-sort',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:eslint-comments/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', 'coverage', 'jest.config.js', '.eslintrc.js'],
  reportUnusedDisableDirectives: true,
  rules: {
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-missing-import': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        // The default grouping, but with type imports first in each group.
        // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/examples/.eslintrc.js#L192
        groups: [
          ['^\\u0000'],
          ['^node:.*\\u0000$', '^node:'],
          ['^@?\\w.*\\u0000$', '^@?\\w'],
          ['(?<=\\u0000)$', '^'],
          ['^\\..*\\u0000$', '^\\.'],
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'eslint-comments/require-description': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
    ],
  },
}
