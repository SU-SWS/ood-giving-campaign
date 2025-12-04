import nextPlugin from 'eslint-config-next';

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      '.netlify/**',
      'public/**',
      '*.config.js',
      '*.config.mjs',
    ],
  },
  ...nextPlugin,
  {
    rules: {
      "comma-dangle": ["error", {
        "objects": "always-multiline",
        "arrays": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }],
      "max-len": ["warn", { "code": 120, "ignoreStrings": true }],
      "no-param-reassign": "off",
      "no-redeclare": "off",
      "no-undef": "off",
      "no-underscore-dangle": "off",
      "object-curly-newline": ["error", { "consistent": true, "minProperties": 4 }],
      "jsx-quotes": ["error", "prefer-double"],
      "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "space-before-function-paren": 0,
      "react/jsx-props-no-spreading": 0,
      "react/prop-types": 0,
      "react/jsx-handler-names": 0,
      "react/jsx-fragments": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/no-unused-prop-types": 0,
      "react/require-default-props": 0,
      "react/jsx-no-useless-fragment": [2, { "allowExpressions": true }],
      "react/jsx-indent": [2, 2],
      "react/display-name": 0,
      "no-multi-spaces": "error",
      "func-names": 0,
      "semi": [1, "always"],
      "@next/next/no-img-element": 0
    }
  }
];

export default eslintConfig;
