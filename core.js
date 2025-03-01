module.exports = {
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "promise",
        "modules-newline",
        "unused-imports",
        "sort-keys-fix",
        "sort-destructure-keys",
        "unicorn",
        "indent-class-properties"
    ],
    "rules": {
        "array-bracket-spacing": "error",
        "arrow-parens": "error",
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "brace-style": "error",
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "exports": "always",
                "functions": "only-multiline",
                "imports": "always-multiline",
                "objects": "always-multiline"
            }
        ],
        "comma-spacing": "error",
        "computed-property-spacing": "error",
        "default-param-last": "error",
        "for-direction": "error",
        "func-call-spacing": "error",
        "import/default": "error",
        "import/export": "error",
        "import/named": "error",
        "import/newline-after-import": "error",
        "import/no-deprecated": "warn",
        "import/no-duplicates": "error",
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": [
            "error",
            {
                "noUselessIndex": true
            }
        ],
        "import/order": [
            "error",
            {
                "alphabetize": {
                    "caseInsensitive": true,
                    "order": "asc"
                },
                "groups": [
                    "builtin",
                    "external",
                    "index",
                    "parent",
                    "sibling"
                ],
                "newlines-between": "always"
            }
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "indent-class-properties/indent": ["error", 4],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "modules-newline/import-declaration-newline": "error",
        "multiline-ternary": ["error", "always-multiline"],
        "newline-before-return": "error",
        "newline-per-chained-call": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-case-declarations": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-empty-function": "warn",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-implicit-coercion": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-irregular-whitespace": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxBOF": 0,
                "maxEOF": 0
            }
        ],
        "no-obj-calls": "error",
        "no-param-reassign": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-return-await": "error",
        "no-self-assign": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-use-before-define": "warn",
        "no-useless-catch": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
            "error",
            {
                "ImportDeclaration": {
                    "minProperties": 2,
                    "multiline": true
                }
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-shorthand": ["error", "never"],
        "padded-blocks": [
            "error",
            {
                "classes": "always",
                "blocks": "never",
                "switches": "never"
            }
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "next": "try",
                "prev": "const"
            }
        ],
        "prefer-promise-reject-errors": "error",
        "prefer-template": "error",
        "promise/catch-or-return": "error",
        "promise/no-nesting": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/valid-params": "error",
        "quotes": [
            "error",
            "single"
        ],
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "error",
        "rest-spread-spacing": "error",
        "semi": [
            "error",
            "never"
        ],
        "sort-destructure-keys/sort-destructure-keys": "error",
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false
            }
        ],
        "sort-keys": [
            "error",
            "asc",
            {
                "caseSensitive": true,
                "minKeys": 2,
                "natural": false
            }
        ],
        "sort-keys-fix/sort-keys-fix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "template-curly-spacing": "error",
        "unicorn/better-regex": "error",
        "unicorn/catch-error-name": "error",
        "unicorn/consistent-destructuring": "error",
        "unicorn/error-message": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-array-push-push": "error",
        "unicorn/no-console-spaces": "error",
        "unicorn/no-for-loop": "error",
        "unicorn/no-instanceof-array": "error",
        "unicorn/no-keyword-prefix": [
            "error", {
                "blacklist": [
                    "new",
                    "for"
                ]
            }
        ],
        "unicorn/no-lonely-if": "error",

        "no-nested-ternary": "off",
        "unicorn/no-nested-ternary": "error",

        "unicorn/no-new-array": "error",
        "unicorn/no-object-as-default-parameter": "error",
        "unicorn/no-unreadable-array-destructuring": "error",
        "unicorn/no-unsafe-regex": "error",
        "unicorn/no-zero-fractions": "error",
        "unicorn/prefer-array-find": "error",
        "unicorn/prefer-array-flat-map": "error",
        "unicorn/prefer-array-index-of": "error",
        "unicorn/prefer-array-some": "error",
        "unicorn/prefer-date-now": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-regexp-test": "error",
        "unicorn/prefer-spread": "error",
        "unicorn/prefer-string-replace-all": "off",
        "unicorn/prefer-string-slice": "error",
        "unicorn/prefer-string-trim-start-end": "error",
        "unicorn/prevent-abbreviations": [
            "error",
            {
                "whitelist": {
                    "props": true,
                    "Props": true,
                    "Args": true,
                    "args": true
                }
            }
        ],
        "unicorn/throw-new-error": "error",
        "unused-imports/no-unused-imports-ts": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "wrap-iife": "error",
        "yoda": "error"
    }
}
