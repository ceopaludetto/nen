import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { ReactNode } from "react";

import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type NavigationRailProps = VariantProps<typeof classes> & {
	className?: string;
	children?: ReactNode;
	startAdornment?: ReactNode;
};

export const NavigationRail = polymorphicForwardRef<"div", NavigationRailProps>(
	({ as: As = "div", children, className, startAdornment, placement = "start", ...rest }, ref) => {
		const { base, adornment, content } = classes({ placement });

		return (
			<As ref={ref} className={base({ className })} {...rest}>
				{!!startAdornment && <div className={adornment()}>{startAdornment}</div>}
				<div className={content()}>{children}</div>
			</As>
		);
	},
);
