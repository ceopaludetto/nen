import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: [
			"flex h-full flex-1 flex-col items-center justify-center gap-1 text-title-small outline-none transition-colors ripple state-layer",
			"ark-selected:text-primary ark-not-selected:text-on-surface-variant",
			"focus-visible:hover-state-layer ark-not-disabled:hover:hover-state-layer ark-not-disabled:active:press-state-layer",
		],
		icon: "text-icon-medium text-inherit reset-svg",
	},
});
