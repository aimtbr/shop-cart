const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2015,
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
