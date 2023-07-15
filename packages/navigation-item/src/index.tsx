import type { PressableProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { Pressable } from "@ark-ui/react";
import { Badge } from "@reactjs-material/badge";
import { useRipples } from "@reactjs-material/ripple";
import { combineRefs, polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type NavigationItemProps = PolymorphicProps<PressableProps> &
	VariantProps<typeof classes> & {
		badge?: number | true;
		icon: ReactNode;
	};

export const NavigationItem = polymorphicForwardRef<"button", NavigationItemProps>(
	(
		{ as: As = "button", children, className, disabled, icon: iconComponent, active, badge: badgeContent, ...rest },
		ref,
	) => {
		const { base, content, icon, badge } = classes({ active, small: typeof badgeContent === "boolean" });
		const [trigger, positioner] = useRipples<HTMLButtonElement, HTMLDivElement>({ disabled, center: true });

		return (
			<Pressable ref={combineRefs([ref, trigger])} asChild className={base({ className })} {...rest}>
				<As>
					{!!badgeContent && <Badge className={badge()}>{badgeContent}</Badge>}
					<div ref={positioner} className={icon()}>
						{iconComponent}
					</div>
					<div className={content()}>{children}</div>
				</As>
			</Pressable>
		);
	},
);
