import type { SwitchProps as ArkSwitchProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { Switch as ArkSwitch, SwitchControl, SwitchInput, SwitchLabel, SwitchThumb } from "@ark-ui/react";
import { useRipples } from "@reactjs-material/ripple";
import { combineRefs, polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type SwitchProps = PolymorphicProps<ArkSwitchProps> & VariantProps<typeof classes> & { children?: ReactNode };

export const Switch = polymorphicForwardRef<"label", SwitchProps>(
	({ as: As = "label", children, className, disabled, labelPlacement, ...rest }, ref) => {
		const { base, label, control, thumb } = classes({ labelPlacement });
		const [trigger, positioner] = useRipples({ disabled, center: true, size: 40 });

		return (
			<ArkSwitch
				ref={combineRefs([ref, trigger])}
				asChild
				className={base({ className })}
				disabled={disabled}
				{...rest}
			>
				<As>
					<SwitchInput />
					<SwitchLabel className={label()}>{children}</SwitchLabel>
					<SwitchControl className={control()}>
						<SwitchThumb ref={positioner} className={thumb()} />
					</SwitchControl>
				</As>
			</ArkSwitch>
		);
	},
);
