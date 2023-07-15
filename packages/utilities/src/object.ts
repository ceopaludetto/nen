import type { Entries } from "type-fest";

export function getTypedEntries<T extends object>(obj: T): Entries<T> {
	return Object.entries(obj) as Entries<T>;
}

export function addDefault<T extends object>(obj: T, key: keyof T) {
	return { ...obj, DEFAULT: obj[key] };
}
