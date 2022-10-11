module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "vue/script-indent": ["error", 4, { "baseIndent": 1 }],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "alignAttributesVertically": true,
        }],
        "vue/max-len": ["error", {
            "code": 120,
            "template": 120,
        }],
    }
}