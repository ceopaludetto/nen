import type { AvatarImageProps } from "@ark-ui/react";
import type { VariantProps } from "@reactjs-material/tailwindcss/tv";
import type { PolymorphicProps } from "@reactjs-material/utilities";

import { Avatar as ArkAvatar, AvatarImage, AvatarFallback } from "@ark-ui/react";
import { polymorphicForwardRef } from "@reactjs-material/utilities";

import { classes } from "./classes";

export type AvatarProps = PolymorphicProps<AvatarImageProps> & VariantProps<typeof classes>;

export const Avatar = polymorphicForwardRef<"div", AvatarProps>(
	({ as: As = "div", children, className, size = "medium", src, ...rest }, ref) => {
		const { base, fallback } = classes({ size });

		return (
			<ArkAvatar ref={ref} asChild className={base({ className })}>
				<As>
					<AvatarFallback className={fallback()}>{children}</AvatarFallback>
					{!!src && <AvatarImage src={src} {...rest} />}
				</As>
			</ArkAvatar>
		);
	},
);
