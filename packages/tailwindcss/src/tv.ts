import type { TV } from "tailwind-variants";

import { tv as defaultTv } from "tailwind-variants";

import { typographyKeys, zIndexKeys } from "./tokens";

export type { DurationVariants, ShapeVariants, TransitionVariants, TypographyVariants, ZIndexVariants } from "./tokens";

export * from "tailwind-variants";

export const tv: TV = (options, config) =>
	defaultTv(options, {
		...config,
		twMergeConfig: {
			...config?.twMergeConfig,
			classGroups: {
				...config?.twMergeConfig?.classGroups,
				"font-size": [{ text: typographyKeys }],
				"z-index": [{ z: zIndexKeys }],
			},
		},
	});
