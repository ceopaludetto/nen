import type { OnlyAs } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type SearchProps = {
	className?: string;
	startAdornment?: ReactNode;
	endAdornment?: ReactNode;
	placeholder: string;
};

export const Search = polymorphicForwardRef<"input", SearchProps, OnlyAs<"input">>(
	({ as: As = "input", className, startAdornment, endAdornment, placeholder, ...rest }, ref) => {
		const { base, input, adornment } = classes();

		return (
			<div className={base({ className })}>
				{!!startAdornment && <div className={adornment()}>{startAdornment}</div>}
				<As ref={ref} aria-label={placeholder} className={input()} placeholder={placeholder} type="search" {...rest} />
				{!!endAdornment && <div className={adornment()}>{endAdornment}</div>}
			</div>
		);
	},
);
