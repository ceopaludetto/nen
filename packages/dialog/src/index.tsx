import type { DialogProps as ArkDialogProps } from "@ark-ui/react";
import type { PolymorphicProps } from "@reactjs-material/utilities";
import type { ReactNode } from "react";

import {
	Dialog as ArkDialog,
	DialogBackdrop,
	DialogContainer,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
	Portal,
} from "@ark-ui/react";
import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type DialogProps = PolymorphicProps<ArkDialogProps> & {
	className?: string;
	children: ReactNode;
	title: string;
	description: string;
	endAdornment?: ReactNode;
	icon?: ReactNode;
};

export const Dialog = polymorphicForwardRef<"div", DialogProps>(
	(
		{
			as: As = "div",
			children,
			className,
			title: titleComponent,
			description: descriptionComponent,
			icon: iconComponent,
			endAdornment,
			...rest
		},
		ref,
	) => {
		const { backdrop, content, icon, title, description, adornment } = classes();

		return (
			<ArkDialog>
				<DialogTrigger>{children}</DialogTrigger>
				<Portal>
					<DialogBackdrop className={backdrop()} />
					<DialogContainer ref={ref} asChild {...rest}>
						<As>
							<DialogContent className={content()}>
								{!!iconComponent && <span className={icon()}>{iconComponent}</span>}
								<DialogTitle className={title()}>{titleComponent}</DialogTitle>
								<DialogDescription className={description()}>{descriptionComponent}</DialogDescription>
								{!!endAdornment && <div className={adornment()}>{endAdornment}</div>}
							</DialogContent>
						</As>
					</DialogContainer>
				</Portal>
			</ArkDialog>
		);
	},
);
