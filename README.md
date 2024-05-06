# ESLint configuration

## Use the rules in your project

1. On your project :
   - uninstall `prettier` and `eslint`
   - run `npm install @yboyer/eslint-config-backend-node`
   - Add prettier line

   ```json
   "prettier": "@yboyer/eslint-config-backend-node/prettierrc.json"
   ```

1. Replace the .eslintrc file by :

   ```json
   {
      "extends": ["@yboyer/eslint-config-backend-node"],
      "rules": {},
   }
   ```
