module.exports = {
	extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", "plugin:tailwindcss/recommended", "prettier"],
	plugins: ["prettier"],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		"prettier/prettier": "warn",
		// typescript
		"@typescript-eslint/no-throw-literal": "off",
		"@typescript-eslint/consistent-type-imports": "warn",
		// import
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"import/order": [
			"warn",
			{
				alphabetize: { order: "asc", caseInsensitive: true },
				groups: ["type", "builtin", "external", "index", ["internal", "sibling", "parent"], "object"],
				pathGroups: [
					{
						pattern: "~/**",
						group: "internal",
					},
				],
				pathGroupsExcludedImportTypes: ["builtin", "type", "external", "object"],
				"newlines-between": "always",
			},
		],
		// react
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": "off",
		"react/button-has-type": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-sort-props": [
			"warn",
			{
				shorthandFirst: true,
				reservedFirst: true,
				callbacksLast: true,
			},
		],
		// misc
		"no-restricted-syntax": "off",
		"no-continue": "off",
	},
	settings: {
		tailwindcss: {
			callees: ["tv"],
			ignoredKeys: ["compoundVariants", "compoundSlots", "defaultVariants"],
			config: require("node:path").resolve(__dirname, "..", "tailwindcss", "tailwind.config.ts"),
		},
	},
};
