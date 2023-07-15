import type { CSSRuleObject, DarkModeConfig } from "tailwindcss/types/config";
import type { CSSVariables } from "~/tokens";

import plugin from "tailwindcss/plugin";

function getDarkModeMatcher(darkMode?: Partial<DarkModeConfig>): string {
	if (!darkMode || darkMode === "media") return "@media (prefers-color-scheme: dark)";
	return Array.isArray(darkMode) && !!darkMode[1] ? darkMode[1] : ".dark";
}

export const preflightStyles = (variables: CSSVariables, addBaseStyles: boolean) =>
	plugin(({ addBase, config }) => {
		// match x decoration from input[type="search"]
		const searchDecorations = [
			"::-webkit-search-decoration",
			"::-webkit-search-cancel-button",
			"::-webkit-search-results-button",
			"::-webkit-search-results-decoration",
		]
			.map((item) => `input[type="search"]${item}`)
			.join(",");

		const baseStyles: CSSRuleObject = {
			html: {
				"-webkit-tap-highlight-color": "transparent",
			},
			body: {
				backgroundColor: "rgb(var(--surface) / 1)",
				color: "rgb(var(--on-surface) / 1)",
			},
			"*::selection": {
				backgroundColor: "rgb(var(--tertiary) / 1)",
				color: "rgb(var(--on-tertiary) / 1)",
			},
			[searchDecorations]: {
				display: "none",
			},
		};

		const { darkMode } = config();

		addBase({
			":root": variables.light,
			[getDarkModeMatcher(darkMode)]: {
				":root": variables.dark,
			},
			...(addBaseStyles ? baseStyles : {}),
		});
	});
