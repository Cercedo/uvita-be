/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-cycle': 'error',
    eqeqeq: 'error',
    'no-eval': 'error',
    curly: 'error',
    'prefer-const': 'error',
    'no-var': 'error',
  },
};
