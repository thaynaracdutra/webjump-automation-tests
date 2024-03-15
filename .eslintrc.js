module.exports = {
    env: {
        browser: true,
        'cypress/globals': true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:cypress/recommended'
    ],

    plugins: [
        'cypress',
    ],

    parser: "@babel/eslint-parser",
    parserOptions: {
        "requireConfigFile": false,
    },

    rules: {
        "no-unused-vars": "off",
    },
}