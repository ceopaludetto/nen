import type { TabTriggerProps } from "@ark-ui/react";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { TabTrigger } from "@ark-ui/react";
import { useRipples } from "@reactjs-material/ripple";
import { combineRefs, polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type TabItemProps = PolymorphicProps<TabTriggerProps> & {
	icon?: ReactNode;
};

export const TabItem = polymorphicForwardRef<"button", TabItemProps>(
	({ as: As = "button", children, className, icon: iconComponent, ...rest }, ref) => {
		const { base, icon } = classes();
		const [trigger] = useRipples({});

		return (
			<TabTrigger ref={combineRefs([ref, trigger])} asChild className={base({ className })} {...rest}>
				<As>
					{!!iconComponent && <span className={icon()}>{iconComponent}</span>}
					{children}
				</As>
			</TabTrigger>
		);
	},
);
