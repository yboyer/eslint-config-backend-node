module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'unused-imports', 'jest'],
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
  ],
  ignorePatterns: ['dist', 'node_modules', 'coverage', 'jest.config.js', '.eslintrc.js'],
  reportUnusedDisableDirectives: true,
  rules: {
    'no-console': 'off',
    'no-process-env': 'off',
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
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    // '@typescript-eslint/no-unsafe-member-access': 'off',
    // '@typescript-eslint/no-unsafe-return': ['warn'],
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-dynamic-delete': 'off',
    // '@typescript-eslint/no-unsafe-call': ['warn'],
    // '@typescript-eslint/no-unsafe-assignment': 'off',
    // '@typescript-eslint/no-unsafe-argument': 'off',
    // '@typescript-eslint/semi': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/consistent-type-assertions': 'off',
    // '@typescript-eslint/no-type-alias': 'off',
    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['builtin', 'external', 'internal'],
    //     pathGroups: [
    //       {
    //         pattern: '@/**',
    //         group: 'internal',
    //         position: 'before',
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ['builtin'],
    //     'newlines-between': 'always',
    //     alphabetize: {
    //       order: 'asc',
    //     },
    //   },
    // ],
  },
}
