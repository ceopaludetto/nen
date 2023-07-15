import type { LegacyRef, MutableRefObject, RefCallback } from "react";
import type { PolyRefFunction, OnlyAs, PolymorphicComponent, PolymorphicPropsWithoutRef } from "react-polymorphed";

import { forwardRef } from "react";

export function combineRefs<T = any>(refs: (LegacyRef<T> | MutableRefObject<T>)[]): RefCallback<T> {
	return (element) =>
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(element);
				return;
			}

			// eslint-disable-next-line no-param-reassign
			if (ref != null) (ref as React.MutableRefObject<T | null>).current = element;
		});
}

export const polymorphicForwardRef = forwardRef as PolyRefFunction;

export type PolymorphicProps<Props extends object = {}> = Omit<Props, "asChild">;
export type { OnlyAs, PolymorphicComponent, PolymorphicPropsWithoutRef };
