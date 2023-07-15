import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: [
			"inline-flex h-10 items-center justify-center gap-x-2 rounded-full text-label-large outline-none transition ripple state-layer",
			"focus:focus-state-layer focus-visible:hover-state-layer ark-not-disabled:hover:hover-state-layer ark-not-disabled:ark-pressed:press-state-layer",
		],
		icon: "inline-flex text-icon-small reset-svg",
	},
	variants: {
		variant: {
			filled: {
				base: "bg-primary text-on-primary ark-disabled:bg-on-surface/12 ark-disabled:text-on-surface/38",
			},
			tonal: {
				base: "bg-secondary-container text-on-secondary-container ark-disabled:bg-on-surface/12 ark-disabled:text-on-surface/38",
			},
			outlined: {
				base: "border border-outline bg-surface text-primary focus:border-primary ark-disabled:border-on-surface/12 ark-disabled:text-on-surface/38",
			},
			text: {
				base: "bg-transparent text-primary ark-disabled:text-on-surface/38",
			},
		},
		hasStartIcon: {
			true: { base: "ps-4" },
			false: { base: "ps-6" },
		},
		hasEndIcon: {
			true: { base: "pe-4" },
			false: { base: "pe-6" },
		},
	},
});
