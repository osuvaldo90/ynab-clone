
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'semi': ['error', 'never'],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/order': ['error', {
      alphabetize: { order: 'asc' },
      'newlines-between': 'always',
      pathGroups: [
        {
          'pattern': '@app/**',
          'group': 'external',
          'position': 'after'
        }
      ],
      pathGroupsExcludedImportTypes: ['builtin']
    }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@app', './src/@app']
        ],
      }
    }
  }
};
