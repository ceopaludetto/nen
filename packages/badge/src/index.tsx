import { displayMax, polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type BadgeProps = {
	className?: string;
	children: number | true;
};

export const Badge = polymorphicForwardRef<"span", BadgeProps>(
	({ as: As = "span", className, children, ...rest }, ref) => {
		const isNumber = typeof children === "number";

		return (
			<As
				ref={ref}
				aria-atomic="true"
				aria-live="polite"
				className={classes({ className, small: !isNumber })}
				role="status"
				{...rest}
			>
				{isNumber && displayMax(children, 999)}
			</As>
		);
	},
);
