module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'max-len': ['error', {ignorePattern: 'className'}],
    'require-jsdoc': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
