// Customized version of the Expo universe ESlint config by personal preference of @rrebase
// Based on https://github.com/expo/expo/tree/main/packages/eslint-config-universe

module.exports = {
  extends: "universe/native",
  plugins: ["unused-imports"],
  rules: {
    // Enable the unused import rule that support auto-fix
    "unused-imports/no-unused-imports-ts": "warn",
    "unused-imports/no-unused-imports": "off",
    // Disable for now as it duplicated warnings of `no-unused-imports-ts`
    "@typescript-eslint/no-unused-vars": "off",
  },
};
