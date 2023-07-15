import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	base: "bg-outline-variant",
	variants: {
		orientation: {
			horizontal: "h-px w-full",
			vertical: "h-full w-px",
		},
		variant: {
			inset: [],
			middle: [],
		},
	},
	compoundVariants: [
		{
			variant: "inset",
			orientation: "horizontal",
			class: "ms-4",
		},
		{
			variant: "middle",
			orientation: "horizontal",
			class: "mx-4",
		},
		{
			variant: "inset",
			orientation: "vertical",
			class: "mt-4",
		},
		{
			variant: "middle",
			orientation: "vertical",
			class: "my-4",
		},
	],
});
