import type { PressableProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { Pressable } from "@ark-ui/react";
import { useRipples } from "@reactjs-material/ripple";
import { combineRefs, displayMax, polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type NavigationDrawerItemProps = PolymorphicProps<PressableProps> &
	VariantProps<typeof classes> & {
		badge?: number | true;
		icon?: ReactNode;
	};

export const NavigationDrawerItem = polymorphicForwardRef<"button", NavigationDrawerItemProps>(
	(
		{ as: As = "button", children, className, active, icon: iconComponent, disabled, badge: badgeContent, ...rest },
		ref,
	) => {
		const { base, content, icon, badge } = classes({ active });
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
					{!!iconComponent && <span className={icon()}>{iconComponent}</span>}
					<div className={content()}>{children}</div>
					{typeof badgeContent === "number" && <span className={badge()}>{displayMax(badgeContent, 100)}</span>}
				</As>
			</Pressable>
		);
	},
);
