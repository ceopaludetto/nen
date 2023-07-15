import type { Config } from "tailwindcss";

import { addDefault } from "@reactjs-material/utilities";

import { arkVariants, preflightStyles, stateLayer } from "./plugins";
import {
	createDurationTokens,
	createShapeTokens,
	createThemeFromBaseColor,
	createTransitionTokens,
	createTypographyTokens,
	createZIndexTokens,
} from "./tokens";

export type PresetOptions = {
	baseColor: string;
	addBaseStyles: boolean;
};

export default function preset({ baseColor, addBaseStyles }: PresetOptions): Config {
	const { colors, variables } = createThemeFromBaseColor(baseColor);

	return {
		content: [],
		theme: {
			borderRadius: addDefault(createShapeTokens(), "xs"),
			fontSize: createTypographyTokens(),
			extend: {
				colors,
				transitionTimingFunction: addDefault(createTransitionTokens(), "standard"),
				transitionDuration: addDefault(createDurationTokens(), "short3"),
				opacity: {
					4: ".04",
					8: ".08",
					11: ".11",
					12: ".12",
					14: ".14",
					38: ".38",
				},
				zIndex: createZIndexTokens(),
				scale: {
					200: "2",
				},
			},
		},
		plugins: [preflightStyles(variables, addBaseStyles), arkVariants(), stateLayer()],
	};
}
