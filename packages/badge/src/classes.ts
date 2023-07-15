import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	base: "z-badge inline-flex items-center justify-center rounded-full bg-error",
	variants: {
		small: {
			true: "aspect-square h-1.5",
			false: "h-4 min-w-[16px] p-1 text-label-small text-on-error",
		},
	},
});
