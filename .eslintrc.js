module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
    "react-native",
    "jsx-a11y"
  ],
  "env": {
    "es6": true,
    "node": true,
    "jest": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/display-name": 0,
    "react/require-default-props": 0,
    "no-unexpected-multiline": "error",
    "no-use-before-define": [0],
    "react/jsx-filename-extension": [0],
    "no-named-export": [0],
    "global-require": [0],
    "react/prefer-stateless-function": [0],
    "react/destructuring-assignment": [0],
    "react/jsx-one-expression-per-line": [0],
    "object-curly-newline": [0],
    "no-return-assign": [0],
    "no-nested-ternary": [0],
    "import/prefer-default-export": [0],
    "no-unused-expressions": [0],
    "max-len": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "comma-dangle": 0,
    "react/forbid-prop-types": 0,
    "class-methods-use-this": 0
  },
};
