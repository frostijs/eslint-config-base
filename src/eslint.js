export default {
  extends: [
    'eslint-config-airbnb-base' // depends on: eslint-plugin-import
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-console': 0,
    'array-callback-return': 0,
    'comma-dangle': 0,
    'padded-blocks': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false
      }
    ]
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
