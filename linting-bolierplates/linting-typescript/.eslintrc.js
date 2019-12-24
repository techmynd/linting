module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'react/state-in-constructor': 'off',
    'react/no-did-update-set-state': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-props-no-spreading': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 'warn',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/require-default-props': 'warn',
    'import/no-unresolved': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1,{'extensions':['.ts','.tsx']}],
    'class-methods-use-this': 'warn',
    'import/prefer-default-export': 'off',
    camelcase: 'off', //rails requires snake_case
    'react/no-access-state-in-setstate': 'warn',
    'max-len': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/label-has-for': 'warn',
    'no-param-reassign': 'warn',
    'react/no-unused-state': 'warn',
    'react/sort-comp': 'warn',
    'consistent-return': 'warn',
    'no-console': 0,
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-unused-vars': 'warn',
    'no-shadow': 'warn',
    'prefer-destructuring': 'warn',
    'no-return-assign': 'warn',
    radix: 'warn',
    'guard-for-in': 'warn',
    'no-restricted-syntax': 'warn',
    'no-prototype-builtins': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/no-unescaped-entities': 'warn',
    eqeqeq: 'warn',
    'react/jsx-indent': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'import/no-named-as-default': 'warn',
    'no-lonely-if': 'warn',
    'array-callback-return': 'warn',
    'no-nested-ternary': 'off',
    'react/button-has-type': 'warn',
    'react/no-array-index-key': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'no-useless-constructor': 'warn',
    'no-tabs': 'warn',
    'no-alert': 'error',
    'global-require': 'warn',
    'no-unreachable': 'warn',
    'arrow-body-style': 'warn',
    'radix': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-access-state-in-setstate': 'off', //this is bullshit
    'react/no-unknown-property': ['warn', {
      ignore: ['for']
    }],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always'
      }
    ],
    'no-underscore-dangle': 'off',
    'import/extensions': 0,
  }
}


//////////// default 
// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//   },
//   extends: [
//     'airbnb-base',
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   plugins: [
//     '@typescript-eslint',
//   ],
//   rules: {
//   },
// };
