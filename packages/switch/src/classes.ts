import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "group flex items-center gap-4",
		control: [
			"inline-flex aspect-[13/8] h-8 items-center rounded-full border-2 border-outline transition duration-short4 ease-emphasized",
			"ark-checked:border-primary ark-checked:bg-primary ark-not-checked:bg-surface-variant",
			"ark-disabled:ark-checked:bg-on-surface/12 ark-disabled:ark-not-checked:border-on-surface/12 ark-disabled:ark-not-checked:bg-surface-variant/12",
			"ark-disabled:ark-checked:border-0",
		],
		thumb: [
			"aspect-square rounded-full transition-[transform,background-color,height] duration-short4 ease-emphasized state-layer state-layer-10",
			"ark-not-disabled:group-active:h-7 ark-checked:h-6 ark-checked:bg-on-primary ark-not-checked:h-4 ark-not-checked:bg-outline",
			"ark-checked:translate-x-[22px] ark-not-disabled:group-active:ark-checked:translate-x-5 ark-not-checked:translate-x-[6px] ark-not-disabled:group-active:ark-not-checked:translate-x-0",
			"ark-not-disabled:group-hover:ark-checked:bg-primary-container ark-not-disabled:group-hover:ark-not-checked:bg-on-surface-variant",
			"ark-not-disabled:group-focus:ark-checked:bg-primary-container ark-not-disabled:group-focus:ark-not-checked:bg-on-surface-variant",
			"ark-disabled:ark-checked:bg-surface ark-disabled:ark-not-checked:bg-on-surface/38",
			"ark-disabled:ark-checked:translate-x-6",
			"group-focus:focus-state-layer group-ark-not-disabled:group-hover:hover-state-layer group-ark-not-disabled:group-ark-active:press-state-layer",
		],
		label: "text-on-surface",
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
