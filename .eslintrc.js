module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    settings: {
        react:{
            version: "detect"
        }
    },
    "plugins": [
        "prettier",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "warn",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "react/prop-types": "off"
    }
};