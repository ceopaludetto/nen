import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	base: [
		"inline-flex aspect-square h-10 items-center justify-center rounded-full text-icon-medium",
		"outline-none reset-svg ripple state-layer",
		"focus:focus-state-layer focus-visible:hover-state-layer ark-not-disabled:hover:hover-state-layer ark-not-disabled:ark-pressed:press-state-layer",
	],
	variants: {
		variant: {
			filled: "bg-primary text-on-primary ark-disabled:bg-on-surface/12 ark-disabled:text-on-surface/38",
			tonal:
				"bg-secondary-container text-on-secondary-container ark-disabled:bg-on-surface/12 ark-disabled:text-on-surface/38",
			outlined:
				"border border-outline bg-surface text-primary focus:border-primary ark-disabled:border-on-surface/12 ark-disabled:text-on-surface/38",
			standard: "bg-transparent text-on-surface-variant ark-disabled:text-on-surface/38",
		},
	},
});
