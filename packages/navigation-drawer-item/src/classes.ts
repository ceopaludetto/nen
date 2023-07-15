import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: [
			"inline-flex h-14 w-full select-none items-center gap-x-3 rounded-full pe-6 ps-3 text-left outline-none ripple state-layer",
			"focus:focus-state-layer focus-visible:hover-state-layer ark-not-disabled:hover:hover-state-layer ark-not-disabled:ark-pressed:press-state-layer",
			"ark-in-route:bg-secondary-container ark-in-route:text-on-secondary-container ark-not-in-route:text-on-surface-variant",
		],
		content: "flex-1 text-label-large",
		icon: "text-icon-medium reset-svg",
		badge: "text-label-small",
	},
	variants: {
		active: {
			true: {
				base: "active",
			},
		},
	},
});
