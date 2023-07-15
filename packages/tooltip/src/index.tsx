import type { TooltipProps as ArkTooltipProps } from "@ark-ui/react";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactElement } from "react";

import { Tooltip as ArkTooltip, Portal, TooltipContent, TooltipPositioner, TooltipTrigger } from "@ark-ui/react";
import { polymorphicForwardRef } from "@reactjs-material/utilities";
import { cloneElement, useCallback } from "react";

import { classes } from "./classes";

export type TooltipProps = PolymorphicProps<ArkTooltipProps> & {
	children: ReactElement<any>;
	className?: string;
	content: string;
	describeChild?: boolean;
};

export const Tooltip = polymorphicForwardRef<"div", TooltipProps>(
	({ as: As = "div", children, className, content, describeChild, ...rest }, ref) => {
		const { base, positioner } = classes();

		const addAriaLabel = useCallback(() => {
			if (describeChild) {
				return cloneElement(children, { "aria-label": content });
			}

			return children;
		}, [children, content, describeChild]);

		return (
			<ArkTooltip {...rest}>
				<TooltipTrigger asChild>
					<span>{addAriaLabel()}</span>
				</TooltipTrigger>
				<Portal>
					<TooltipPositioner className={positioner()}>
						<TooltipContent ref={ref} asChild className={base({ className })}>
							<As>{content}</As>
						</TooltipContent>
					</TooltipPositioner>
				</Portal>
			</ArkTooltip>
		);
	},
);
