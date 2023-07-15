export const zIndexKeys = ["bar", "sheet", "badge", "dialog", "snackbar", "menu", "popover", "tooltip"] as const;

export function createZIndexTokens() {
	return zIndexKeys.reduce(
		(acc, key, index) => {
			acc[key] = (1000 + index * 10).toString();
			return acc;
		},
		{} as Record<string, string>,
	);
}

export type ZIndexVariants = (typeof zIndexKeys)[number];
