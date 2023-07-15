import { useCallback, useEffect, useRef, useState } from "react";

export function useFloating(initialValue?: string) {
	const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
	const [floating, setFloating] = useState(!!initialValue);

	const handleInput = useCallback((event: Event) => {
		const el = event.currentTarget as HTMLInputElement | HTMLTextAreaElement;
		setFloating(!!el.value);
	}, []);

	useEffect(() => {
		if (!ref.current) return undefined;
		const el = ref.current;

		el.addEventListener("input", handleInput);
		return () => el.removeEventListener("input", handleInput);
	}, [handleInput]);

	return [ref, floating] as const;
}
