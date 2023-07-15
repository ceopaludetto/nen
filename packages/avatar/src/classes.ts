import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "aspect-square w-[1em] rounded-full bg-primary",
		fallback: "!col-span-full !row-span-full place-self-center text-on-primary",
	},
	variants: {
		size: {
			small: { base: "text-icon-small", fallback: "text-body-small" },
			medium: { base: "text-icon-medium", fallback: "text-body-medium" },
			large: { base: "text-icon-large", fallback: "text-body-large" },
		},
	},
});
