import type { ReactNode } from "react";

import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type NavigationBarProps = {
	className?: string;
	children: ReactNode;
};

export const NavigationBar = polymorphicForwardRef<"div", NavigationBarProps>(
	({ as: As = "div", children, className, ...rest }, ref) => (
		<As ref={ref} className={classes({ className })} {...rest}>
			{children}
		</As>
	),
);
