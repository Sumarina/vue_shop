module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: 'eslint-plugin-vue',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }], //不加默认变成双引号 参考url:https://github.com/prettier/eslint-plugin-prettier#options
  },
};
