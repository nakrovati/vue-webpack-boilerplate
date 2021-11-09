// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "max-len": ["error", { code: 80 }],
    "no-undef": "error",
    "no-var": "error",
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
