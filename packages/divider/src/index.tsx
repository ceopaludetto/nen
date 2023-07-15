import type { VariantProps } from "@reactjs-material/tailwindcss/tv";

import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type DividerProps = VariantProps<typeof classes> & {
	className?: string;
};

export const Divider = polymorphicForwardRef<"div", DividerProps>(
	({ as: As = "div", className, orientation = "horizontal", variant, ...rest }, ref) => (
		<As ref={ref} aria-orientation={orientation} className={classes({ className, orientation, variant })} {...rest} />
	),
);
