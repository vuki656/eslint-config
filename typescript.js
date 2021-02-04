module.exports = {
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-types": "warn",

        "brace-style": "off",
        "@typescript-eslint/brace-style": "error",

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "exports": "always",
                "functions": "only-multiline",
                "imports": "always-multiline",
                "objects": "always-multiline"
            }
        ],

        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": "error",

        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                "prefer": "type-imports"
            }
        ],

        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",

        "@typescript-eslint/explicit-function-return-type": "off",

        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": "error",

        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": "error",

        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": false
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/method-signature-style": [
            "error",
            "method"
        ],
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",

        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "error",

        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "warn",

        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                "allowSingleExtends": true
            }
        ],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",

        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",

        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",

        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",

        "@typescript-eslint/no-unused-vars": "off",

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "warn",

        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "error",

        "quotes": "off",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],

        "@typescript-eslint/require-array-sort-compare": "error",

        "require-await": "off",
        "@typescript-eslint/require-await": "error",


        "@typescript-eslint/restrict-plus-operands": [
            "warn",
            {
                "checkCompoundAssignments": true
            }
        ],

        "@typescript-eslint/return-await": "error",
        "no-return-await": "off",

        "semi": "off",
        "@typescript-eslint/semi": [
            "error",
            "never"
        ],

        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],

        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/type-annotation-spacing": "error"
    }
}
