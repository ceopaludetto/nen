import { tv } from "@reactjs-material/tailwindcss/tv";

export const classes = tv({
	slots: {
		backdrop: "fixed inset-0 bg-scrim/30",
		content: [
			"flex min-w-[280px] max-w-[560px] flex-col items-center gap-4 rounded-xl bg-surface-container-high p-6 outline-none",
			"relative overflow-hidden",
		],
		icon: "text-icon-medium text-secondary reset-svg",
		title: "text-headline-small text-on-surface",
		description: "text-body-medium text-on-surface-variant",
		adornment: "flex w-full items-center justify-end gap-x-2 pt-2",
	},
});
