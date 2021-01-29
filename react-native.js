module.exports = {
    "env": {
        "browser": true
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react-native/sort-styles": "error",
        "react-native/no-color-literals": "error",
        "react-native/no-inline-styles": "error",
        "react-native/no-unused-styles": "error",
        "react-native/no-raw-text": "error",
        "react-native/no-single-element-style-arrays": "error",
    }
}
