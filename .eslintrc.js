/** @format */

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    eqeqeq: ["error", "always"],
    properties: "always",
    "arrow-body-style": ["error", "always"],
    "no-unused-vars": "error",
    "no-alert": "error",
    "linebreak-style": 0,
    " global-require ": 0,
    " eslint linebreak-style ": [0, " error ", " windows "],
  },
};
