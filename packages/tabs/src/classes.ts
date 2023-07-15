import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "w-full",
		list: "relative flex w-full items-center border-b border-surface-variant",
		indicator: "absolute bottom-0 flex justify-center transition-all duration-medium4",
		line: "w-full bg-primary",
	},
	variants: {
		variant: {
			primary: {
				list: "h-12",
				line: "h-[3px] max-w-[50px] rounded-t-[3px]",
			},
			secondary: {
				list: "h-12",
				line: "h-0.5",
			},
		},
		hasIcons: {
			true: {},
		},
	},
	compoundVariants: [
		{
			variant: "primary",
			hasIcons: true,
			class: { list: "h-16" },
		},
	],
});
