module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/attributes-order': 'off',
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-template-shadow': 'off',
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
};
