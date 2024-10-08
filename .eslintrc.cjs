module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".html"],
  },
  settings: {
    react: { version: "detect" },
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
  },
  plugins: [
    "react-refresh",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
    "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  ignorePatterns: [
    "postcss.config.js",
    "tailwind.config.ts",
    "*.html",
    ".eslintrc.cjs",
  ],
};
