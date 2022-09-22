module.exports = {
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "vue/html-indent": [
            "warn",
            4,  //  tab or int(space 개수)
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        "vue/script-indent": [
            "warn",
            4,
            { "baseIndent": 1 }
        ]
    }
};
