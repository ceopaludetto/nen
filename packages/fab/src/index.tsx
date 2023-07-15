import type { PressableProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { Pressable } from "@ark-ui/react";
import { useRipples } from "@reactjs-material/ripple";
import { combineRefs, polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type FABProps = Omit<VariantProps<typeof classes>, "isExtended"> &
	PolymorphicProps<PressableProps> & {
		icon?: ReactNode;
	};

export const FAB = polymorphicForwardRef<"button", FABProps>(
	(
		{ as: As = "button", children, className, disabled, icon: iconComponent, size = "medium", variant, ...rest },
		ref,
	) => {
		const { base, icon } = classes({ isExtended: !!children, size, variant });
		const [trigger] = useRipples({ disabled });

		return (
			<Pressable ref={combineRefs([ref, trigger])} asChild className={base({ className })} {...rest}>
				<As>
					{!!iconComponent && <span className={icon()}>{iconComponent}</span>}
					{children}
				</As>
			</Pressable>
		);
	},
);
