import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { OnlyAs } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { combineRefs, polymorphicForwardRef, useIds } from "@reactjs-material/utilities";

import { classes } from "./classes";
import { useFloating } from "./hooks";

export type TextFieldProps = VariantProps<typeof classes> & {
	className?: string;
	description?: ReactNode;
	disabled?: boolean;
	defaultValue?: string;
	error?: boolean;
	label?: ReactNode;
	startAdornment?: ReactNode;
	endAdornment?: ReactNode;
};

export const TextField = polymorphicForwardRef<"input", TextFieldProps, OnlyAs<"input" | "textarea">>(
	(
		{
			as: As = "input",
			className,
			disabled,
			error,
			variant = "filled",
			label: labelComponent,
			description: descriptionComponent,
			startAdornment: startAdornmentComponent,
			endAdornment: endAdornmentComponent,
			...rest
		},
		ref,
	) => {
		const [trigger, floating] = useFloating(rest.defaultValue);
		const ids = useIds(["description", "input", "label"]);

		const { base, wrapper, field, input, description, startAdornment, endAdornment, label } = classes({
			variant,
			shrink: floating,
		});

		return (
			<div className={base({ className })} data-disabled={disabled || undefined} data-invalid={error || undefined}>
				<div className={wrapper()}>
					{!!startAdornmentComponent && <div className={startAdornment()}>{startAdornmentComponent}</div>}
					<div className={field()}>
						{!!labelComponent && (
							<label className={label()} htmlFor={ids.input} id={ids.label}>
								{labelComponent}
							</label>
						)}
						<As
							ref={combineRefs([ref, trigger])}
							aria-describedby={descriptionComponent ? ids.description : undefined}
							aria-invalid={error || undefined}
							aria-labelledby={ids.label}
							className={input()}
							disabled={disabled}
							id={ids.input}
							{...rest}
						/>
					</div>
					{!!endAdornmentComponent && <div className={endAdornment()}>{endAdornmentComponent}</div>}
				</div>
				{!!descriptionComponent && (
					<div className={description()} id={ids.description}>
						{descriptionComponent}
					</div>
				)}
			</div>
		);
	},
);
