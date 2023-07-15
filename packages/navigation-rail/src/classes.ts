import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "z-sheet flex max-w-[80px] flex-col items-center gap-3",
		adornment: "mb-3 flex flex-col items-center gap-3",
		content: "flex h-full flex-col",
	},
	variants: {
		placement: {
			start: { content: "justify-start" },
			center: { content: "justify-center" },
			end: { content: "justify-end" },
		},
	},
});
