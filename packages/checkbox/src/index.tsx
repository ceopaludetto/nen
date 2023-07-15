import type { CheckboxProps as ArkCheckboxProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { Checkbox as ArkCheckbox, CheckboxControl, CheckboxInput, CheckboxLabel } from "@ark-ui/react";
import { useRipples } from "@reactjs-material/ripple";
import { combineRefs, polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type CheckboxProps = PolymorphicProps<ArkCheckboxProps> &
	VariantProps<typeof classes> & {
		children: ReactNode;
	};

export const Checkbox = polymorphicForwardRef<"label", CheckboxProps>(
	({ as: As = "label", children, className, disabled, labelPlacement, ...rest }, ref) => {
		const { base, control, label, indicator } = classes({ labelPlacement });
		const [trigger, positioner] = useRipples<HTMLDivElement, HTMLDivElement>({ size: 40, center: true, disabled });

		return (
			<ArkCheckbox
				ref={combineRefs([ref, trigger])}
				asChild
				className={base({ className })}
				disabled={disabled}
				{...rest}
			>
				{({ isChecked, isIndeterminate }) => (
					<As>
						<CheckboxLabel className={label()}>{children}</CheckboxLabel>
						<CheckboxInput />
						<CheckboxControl ref={positioner} className={control()}>
							{isChecked && <span className={indicator()}>✓</span>}
							{isIndeterminate && <span className={indicator()}>-</span>}
						</CheckboxControl>
					</As>
				)}
			</ArkCheckbox>
		);
	},
);
