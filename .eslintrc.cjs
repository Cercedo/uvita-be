/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
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
