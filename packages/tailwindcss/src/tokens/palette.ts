import { argbFromHex, rgbaFromArgb } from "@material/material-color-utilities";
import { getTypedEntries } from "@reactjs-material/utilities";
import { themeFromSourceColor } from "mcu-extra";

type ColorScheme = "dark" | "light";

function toRGBString(value: number) {
	const { r, g, b } = rgbaFromArgb(value);
	return [r, g, b].join(" ");
}

export function createThemeFromBaseColor(baseColor: string) {
	if (!baseColor.startsWith("#")) throw new Error("baseColor must be a hex color string");

	const { schemes } = themeFromSourceColor(argbFromHex(baseColor));

	const variables: Record<ColorScheme, Record<string, string>> = { dark: {}, light: {} };
	const colors: Map<string, string> = new Map();

	for (const [scheme, entries] of getTypedEntries(schemes)) {
		for (const [name, value] of getTypedEntries(entries.toJSON())) {
			const kebabName = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
			const variableName = `--${kebabName}`;

			variables[scheme][variableName] = toRGBString(value);
			colors.set(kebabName, `rgb(var(${variableName}) / <alpha-value>)`);
		}
	}

	return { variables, colors: Object.fromEntries(colors) };
}

export type CSSVariables = Record<ColorScheme, Record<string, string>>;
