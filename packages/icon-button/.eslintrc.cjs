/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require("path");

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	extends: [require.resolve("@reactjs-material/configuration/eslint.base.cjs")],
	parserOptions: { project: resolve(__dirname, "tsconfig.json") },
	overrides: [
		{
			files: ["./test/*.{ts,tsx}", "./tsup.config.ts"],
			rules: { "import/no-extraneous-dependencies": "off" },
		},
	],
};
