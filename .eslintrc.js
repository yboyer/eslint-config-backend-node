module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:n/recommended',
  ],
  ignorePatterns: [
    'dist',
    'jest.config.*',
    '.eslintrc.js',
    'jest-mongodb-config.*',
    '*.generated.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'simple-import-sort',
    'unused-imports',
    'jest',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-relative-parent-imports': 'error',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-empty-function': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'n/no-missing-import': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'n/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=22.16.0',
        ignores: [],
      },
    ],
    'no-await-in-loop': 'off',
    'prettier/prettier': ['error', require('./prettierrc.json')],
    'no-plusplus': 'off',
    'no-continue': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/examples/.eslintrc.js
        // The default grouping, but with type imports first in each group.
        groups: [
          ['^\\u0000'],
          ['^node:.*\\u0000$', '^node:'],
          ['^@?\\w.*\\u0000$', '^@?\\w'],
          ['(?<=\\u0000)$', '^'],
          ['^\\..*\\u0000$', '^\\.'],
        ],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['\\#/index'],
            message: 'Please use full path import instead.',
          },
          {
            group: ['**/dist/**'],
            message:
              'Please do not import from dist./nYou may have missed an export from the main package index.',
          },
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
}
