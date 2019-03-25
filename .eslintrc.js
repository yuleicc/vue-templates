module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  "extends": [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    "plugin:prettier/recommended",
  ],
  "plugins": ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false,
      }
    ],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};