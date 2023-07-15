import type { ReactNode } from "react";

import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type NavigationDrawerProps = {
	className?: string;
	children?: ReactNode;
	startAdornment?: ReactNode;
};

export const NavigationDrawer = polymorphicForwardRef<"div", NavigationDrawerProps>(
	({ as: As = "div", children, className, startAdornment, ...rest }, ref) => {
		const { base, adornment } = classes();

		return (
			<As ref={ref} className={base({ className })} {...rest}>
				{!!startAdornment && <div className={adornment()}>{startAdornment}</div>}
				{children}
			</As>
		);
	},
);
