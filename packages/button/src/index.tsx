import type { PressableProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { Pressable } from "@ark-ui/react";
import { useRipples } from "@reactjs-material/ripple";
import { polymorphicForwardRef, combineRefs } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type ButtonProps = Omit<VariantProps<typeof classes>, "hasEndIcon" | "hasStartIcon"> &
	PolymorphicProps<PressableProps> & {
		startIcon?: ReactNode;
		endIcon?: ReactNode;
	};

export const Button = polymorphicForwardRef<"button", ButtonProps>(
	({ as: As = "button", children, className, disabled, startIcon, endIcon, variant = "filled", ...rest }, ref) => {
		const { base, icon } = classes({ hasStartIcon: !!startIcon, hasEndIcon: !!endIcon, variant });
		const [trigger] = useRipples({ disabled });

		return (
			<Pressable
				ref={combineRefs([ref, trigger])}
				asChild
				className={base({ className })}
				disabled={disabled}
				{...rest}
			>
				<As>
					{!!startIcon && <span className={icon()}>{startIcon}</span>}
					{children}
					{!!endIcon && <span className={icon()}>{endIcon}</span>}
				</As>
			</Pressable>
		);
	},
);
