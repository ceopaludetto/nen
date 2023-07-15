import type { TabsProps as ArkTabsProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { Tabs as ArkTabs, TabIndicator, TabList, TabContent } from "@ark-ui/react";
import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type TabsProps = PolymorphicProps<ArkTabsProps> &
	VariantProps<typeof classes> & {
		items: ReactNode;
	};

export const Tabs = polymorphicForwardRef<"div", TabsProps>(
	({ as: As = "div", children, className, variant = "primary", items, hasIcons, ...rest }, ref) => {
		const { base, list, indicator, line } = classes({ variant, hasIcons });

		return (
			<ArkTabs ref={ref} asChild className={base({ className })} {...rest}>
				<As>
					<TabList className={list()}>
						{items}
						<TabIndicator className={indicator()}>
							<span className={line()} />
						</TabIndicator>
					</TabList>
					{children}
				</As>
			</ArkTabs>
		);
	},
);

export { TabContent };
