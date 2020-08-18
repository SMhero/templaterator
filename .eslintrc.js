module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
        "curly": [2, "all"],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "if", "next": "*" },
            { "blankLine": "always", "prev": "*", "next": "if" },
        ],
        "max-len": ["warn", { "code": 100, "tabWidth": 2 }],
        "no-plusplus": 0,
        "object-curly-newline": ["error", {
          "multiline": true,
          "consistent": true,
        }],
        "no-restricted-globals": 0,
        "operator-linebreak": ["error", "after"],
    }
};
