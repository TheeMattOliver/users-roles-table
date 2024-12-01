const {resolve} = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'prettier', 'plugin:storybook/recommended'],
  globals: {
    React: true,
    JSX: true
  },
  plugins: ['@typescript-eslint', '@next/next'],
  env: {
    node: true,
    browser: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-explicit-any': 'warn',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/'
  ],
  overrides: [{files: ['*.js?(x)', '*.ts?(x)']}]
}
