import { useId } from "react";

export function useIds<const T extends string>(fields: T[], baseId?: string): Record<T, string> {
	const id = useId();

	return fields.reduce((acc, field) => ({ ...acc, [field]: `${baseId ?? id}-${field}` }), {} as Record<T, string>);
}
