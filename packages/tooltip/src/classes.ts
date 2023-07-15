import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		base: "inline-flex min-h-[24px] items-center rounded-xs bg-inverse-surface px-2 text-body-small text-inverse-on-surface",
		positioner: "z-tooltip",
	},
});
