import { useCallback, useEffect, useRef, useState } from "react";

import {
	cancelRippleAnimation,
	centerElementToPointer,
	completedFactor,
	createRipple,
	duration,
	applyClasses,
	filterKeyboardEvent,
	filterMouseEvent,
	isKeyboardEvent,
	isTouchDevice,
} from "./utils";

export type RippleOptions = {
	size?: number;
	center?: boolean;
	disabled?: boolean;
};

const self = () => document;

const startEvents = ["pointerdown", "keydown"] as const;
const endEvents = ["pointerout", "pointerup", "keyup"] as const;

const className = "solid-material--ripple";

/**
 * Add ripples to positioner element.
 *
 * Heavily inspired in https://github.com/asplunds/use-ripple
 *
 * @param options Ripple Options
 * @returns void
 */
export function useRipples<T extends HTMLElement = HTMLElement, U extends HTMLElement = T>({
	disabled,
	size,
	center,
}: RippleOptions) {
	const trigger = useRef<T>(null);
	const positioner = useRef<U>(null);

	const [pressing, setPressing] = useState(false);

	const onPointerDown = useCallback(
		(event: KeyboardEvent | PointerEvent) => {
			const target = positioner.current ?? trigger.current;
			const fromKeyboard = isKeyboardEvent(event);

			if (!target || disabled || pressing || !filterMouseEvent(event) || !filterKeyboardEvent(event)) return;
			if (fromKeyboard) setPressing(true);

			if (window.getComputedStyle(target).position === "static") applyClasses("relative", target);

			requestAnimationFrame(() => {
				const begun = Date.now();
				const ripple = centerElementToPointer({
					event,
					target,
					center: fromKeyboard || center,
					element: createRipple({ name: className, size, fromKeyboard }, target, event),
				});

				const cancelRipple = () => {
					setPressing(false);

					const now = Date.now();
					const diff = now - begun;

					setTimeout(
						() => cancelRippleAnimation(ripple),
						diff > 0.4 * duration ? 0 : completedFactor * duration - diff,
					);
					endEvents.forEach((item) => self().removeEventListener(item, cancelRipple));
				};

				if (!isTouchDevice()) endEvents.forEach((item) => self().addEventListener(item, cancelRipple));
				else setTimeout(() => cancelRippleAnimation(ripple), duration * completedFactor);

				target.appendChild(ripple);
			});
		},
		[center, disabled, pressing, size],
	);

	useEffect(() => {
		const el = trigger.current;

		startEvents.forEach((event) => el?.addEventListener(event, onPointerDown));
		return () => startEvents.forEach((event) => el?.removeEventListener(event, onPointerDown));
	}, [onPointerDown]);

	return [trigger, positioner] as const;
}
