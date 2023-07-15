import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: [
			"group/text-field flex w-full flex-col gap-y-1",
			"ark-invalid:focus-within:!text-error ark-invalid:ark-not-disabled:text-error ark-invalid:ark-not-disabled:hover:text-on-error-container ark-not-invalid:text-on-surface-variant ark-not-invalid:focus-within:text-primary",
		],
		wrapper: "relative inline-flex w-full items-stretch overflow-hidden",
		field: "relative w-full",
		input:
			"h-14 w-full bg-transparent px-4 pb-2 pt-5 text-body-large outline-none group-ark-disabled/text-field:text-on-surface/38 group-ark-not-disabled/text-field:text-on-surface",
		description: "px-4 text-body-small group-ark-invalid/text-field:text-error",
		startAdornment: "ps-3 text-on-surface-variant",
		endAdornment: "pe-3 text-inherit",
		label: [
			"pointer-events-none absolute left-4 select-none text-body-large text-inherit transition-[transform,top,font-size,letter-spacing,line-height,color]",
			"top-1/2 -translate-y-1/2 group-focus-within/text-field:top-0 group-focus-within/text-field:translate-y-1/2 group-focus-within/text-field:text-body-small",
			"group-ark-disabled/text-field:text-on-surface/38",
		],
	},
	variants: {
		variant: {
			filled: {
				wrapper: [
					"rounded-xs bg-surface-variant state-layer",
					"after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-[width,left] group-focus-within/text-field:after:left-0 group-focus-within/text-field:after:w-full",
					"group-focus-within/text-field:!reset-state-layer group-ark-not-disabled/text-field:group-hover/text-field:hover-state-layer",
					"group-ark-disabled/text-field:bg-on-surface/4 group-ark-invalid/text-field:after:bg-error",
				],
			},
		},
		shrink: {
			true: {
				label: "!top-0 !translate-y-1/2 text-body-small",
			},
		},
	},
	compoundSlots: [
		{
			slots: ["startAdornment", "endAdornment"],
			class: "inline-flex items-center",
		},
	],
});
