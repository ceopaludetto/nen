import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "group flex h-14 w-full items-center gap-x-4 rounded-full bg-surface-container-high px-4",
		input:
			"h-full flex-1 border-0 bg-transparent text-body-large text-on-surface outline-none placeholder:text-on-surface-variant",
		adornment: "text-on-surface",
	},
});
