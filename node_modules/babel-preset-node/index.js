module.exports = {
  plugins: [
    // ES2015
    require('babel-plugin-transform-es2015-template-literals'),
    require('babel-plugin-transform-es2015-literals'),
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-block-scoped-functions'),
    require('babel-plugin-transform-es2015-object-super'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-computed-properties'),
    require('babel-plugin-transform-es2015-for-of'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-transform-es2015-constants'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-modules-commonjs'),
    // ES7
    require('babel-plugin-transform-object-rest-spread'),
    [require('babel-plugin-transform-async-to-module-method'), {
      module: 'bluebird',
      method: 'coroutine'
    }],
    // other
    require('babel-plugin-transform-strict-mode')
  ]
};
