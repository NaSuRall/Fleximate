import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginTailwindCSS from "eslint-plugin-tailwindcss";
import prettierPlugin from "eslint-plugin-prettier";
import { parse } from "acorn";
import { defineConfig } from "eslint/config";
import pluginNext from "eslint-plugin-next";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
      next: pluginNext, // 👈 ajouté ici
      tailwindcss: pluginTailwindCSS,
      prettier: prettierPlugin,
    },
    extends: [
      pluginReact.configs.recommended,
      pluginNext.configs.recommended, // 👈 ajoute ça
    ],
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Next.js n'en a pas besoin
      "tailwindcss/classnames-order": "warn",
      "prettier/prettier": "warn",
    },
  },
]);
