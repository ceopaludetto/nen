import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: [
			"inline-flex items-center justify-center gap-x-2 text-label-large outline-none ripple state-layer",
			"focus:focus-state-layer focus-visible:hover-state-layer ark-not-disabled:hover:hover-state-layer ark-not-disabled:ark-pressed:press-state-layer",
		],
		icon: "inline-flex reset-svg",
	},
	variants: {
		variant: {
			surface: { base: "bg-surface text-primary" },
			secondary: { base: "bg-secondary-container text-on-secondary-container" },
			tertiary: { base: "bg-tertiary-container text-on-tertiary-container" },
		},
		isExtended: {
			true: { base: "min-w-[80px] px-4" },
			false: { base: "aspect-square" },
		},
		size: {
			small: { base: "h-10 rounded-md", icon: "text-icon-medium" },
			medium: { base: "h-14 rounded-lg", icon: "text-icon-medium" },
			large: { base: "h-24 rounded-xl", icon: "text-icon-large" },
		},
	},
});
