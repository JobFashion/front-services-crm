/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    // suppress errors for missing 'import React' in files new Version 18 is unnecesary
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // to enforce using type for object type definitions, can be type or interface
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // first of all import builtin modules like fs, path, etc..
          'external', // then third party libraries like lodash etc..
          'internal', // then our internal absolute imports
          'index', // then relatively import something from current directory
          'sibling', // then relatively import something inside nested directory of current directory
          'parent', // then relatively import some thing from parent directory
          'object', // lastly object if any,
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
