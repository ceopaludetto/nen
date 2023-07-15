import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "group flex items-center gap-4",
		label: "text-on-surface",
		control: [
			"relative isolate inline-flex aspect-square h-[18px] justify-center rounded-xxs border-on-surface state-layer state-layer-10",
			"ark-disabled:border-on-surface/38 ark-disabled:ark-checked:bg-on-surface/38 ark-not-disabled:ark-checked:bg-primary ark-disabled:ark-indeterminate:bg-on-surface/38 ark-not-disabled:ark-indeterminate:bg-primary ark-not-checked:ark-not-indeterminate:border-2",
			"group-focus:focus-state-layer group-ark-not-disabled:group-hover:hover-state-layer group-ark-not-disabled:group-ark-active:press-state-layer",
		],
		indicator: "inline-flex items-center justify-center text-icon-small text-on-primary reset-svg",
	},
	variants: {
		labelPlacement: {
			left: { base: "flex-row" },
			right: { base: "flex-row-reverse" },
			top: { base: "flex-col" },
			bottom: { base: "flex-col-reverse" },
		},
	},
});
