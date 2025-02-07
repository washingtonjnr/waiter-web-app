import path from "path";
import globals from "globals";
// 
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// 
import pluginJs from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {languageOptions: { globals: globals.browser }},
  ...compat.extends("standard-with-typescript"),
  pluginReactConfig,
];