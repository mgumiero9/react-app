module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "shared-node-browser": true,
      "prototypejs": true,
      "jquery": true,
      "amd": true,
  },
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "extends": ["google", "eslint:recommended"],
  "rules": {
      "linebreak-style": [
          "error",
          "unix"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn",
      "no-extra-semi":"error"
  }
};
