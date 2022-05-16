module.exports = {
  "plugins": ["simple-import-sort", "import"],
  "rules": {
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Side effect imports.
          ["^\\u0000"],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^(react|react-dom)(/.*|$)", "^(next)(/.*|$)", "^@?\\w"],
          // Internal packages.
          ["^(src)(/.*|$)"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ["^"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"]
        ]
      }
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "extends": ["@salesforce/eslint-config-lwc/recommended"]
  }
}
