module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        '@typescript-eslint/camelcase': ['error', { allow: ['^day\\d{1,2}_[1,2]$'] }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              constructors: 'no-public'
            }
          }
        ],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-magic-numbers': [
          'error',
          { ignore: [0, 1], ignoreEnums: true, ignoreReadonlyClassProperties: true }
        ],
        '@typescript-eslint/no-require-imports': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/unified-signatures': 'error'
      },
      overrides: [
        {
          files: ['src/**/*.test.ts', 'src/**/day*/*'],
          rules: {
            '@typescript-eslint/no-magic-numbers': 'off'
          }
        }
      ]
    }
  ]
};
