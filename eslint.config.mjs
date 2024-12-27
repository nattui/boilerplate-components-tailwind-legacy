import { FlatCompat } from "@eslint/eslintrc"
import perfectionist from "eslint-plugin-perfectionist"
import unicorn from "eslint-plugin-unicorn"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
  {
    plugins: {
      perfectionist,
      unicorn,
    },
    rules: {
      ...perfectionist.configs["recommended-natural"].rules,
      ...unicorn.configs["flat/all"].rules,
      "@next/next/no-img-element": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          newlinesBetween: "never",
          sortSideEffects: true,
        },
      ],
      "unicorn/consistent-function-scoping": "off",
      "unicorn/import-style": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
]

export default eslintConfig
