# ESLint configuration

## Use the rules in your project

1. On your project :
   - `npm uninstall prettier eslint`
   - `npm install @yboyer/eslint-config-backend-node`
   - Add prettier line on the package.json

      ```json
      "prettier": "@yboyer/eslint-config-backend-node/prettierrc.json"
      ```

2. Replace the .eslintrc file by :

   ```json
   {
      "extends": ["@yboyer/eslint-config-backend-node"],
      "rules": {}
   }
   ```
