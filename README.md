# ESLint configuration

## Use the rules in your project

1. On your project :
   - Uninstall all the ESLint rules packages
   - `npm uninstall prettier eslint`
   - `npm install @yboyer/eslint-config-backend-node`

2. Replace the .eslintrc file by :

   ```json
   {
      "extends": ["@yboyer/eslint-config-backend-node"],
      "rules": {}
   }
   ```
