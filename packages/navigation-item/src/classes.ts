import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "group relative flex select-none flex-col items-center gap-1 px-3 pb-1 outline-none",
		content: ["text-label-medium group-ark-in-route:text-on-surface group-ark-not-in-route:text-on-surface-variant"],
		icon: [
			"inline-flex aspect-[7/4] h-8 items-center justify-center rounded-full text-icon-medium reset-svg ripple state-layer",
			"group-ark-in-route:bg-secondary-container group-ark-in-route:text-on-secondary-container group-ark-not-in-route:text-on-surface-variant",
			"group-focus:focus-state-layer group-ark-not-disabled:group-hover:hover-state-layer group-ark-not-disabled:group-ark-pressed:press-state-layer",
		],
		badge: "absolute",
	},
	variants: {
		active: {
			true: {
				base: "active",
			},
		},
		small: {
			true: {
				badge: "left-12 top-1",
			},
			false: {
				badge: "left-1/2 top-0",
			},
		},
	},
});
