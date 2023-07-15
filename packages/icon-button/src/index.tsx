import type { PressableProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";

import { Pressable } from "@ark-ui/react";
import { useRipples } from "@reactjs-material/ripple";
import { polymorphicForwardRef, combineRefs } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type IconButtonProps = PolymorphicProps<PressableProps> & VariantProps<typeof classes>;

export const IconButton = polymorphicForwardRef<"button", IconButtonProps>(
	({ as: As = "button", children, className, disabled, variant = "filled", ...rest }, ref) => {
		const [trigger] = useRipples({ center: true, disabled });

		return (
			<Pressable
				ref={combineRefs([ref, trigger])}
				asChild
				className={classes({ variant, className })}
				disabled={disabled}
				{...rest}
			>
				<As>{children}</As>
			</Pressable>
		);
	},
);
