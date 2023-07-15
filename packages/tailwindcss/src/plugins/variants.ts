import plugin from "tailwindcss/plugin";

export const arkVariants = (prefix = "ark") =>
	plugin(({ addVariant, matchVariant }) => {
		const variants = [
			["in-route", ".active"],
			["disabled", "[data-disabled]"],
			["pressed", "[data-pressed]"],
			["checked", "[data-checked]"],
			["hover", "[data-hover]"],
			["focus", "[data-focus]"],
			["active", "[data-active]"],
			["invalid", "[data-invalid]"],
			["selected", "[data-selected]"],
			["indeterminate", "[data-indeterminate]"],
		];

		const dynamicVariants = [
			["group", ".group", "&"],
			["peer", ".peer", "~ &"],
		];

		variants.forEach(([name, variant]) => {
			addVariant(`${prefix}-${name}`, `&${variant}`);
			addVariant(`${prefix}-not-${name}`, `&:not(${variant})`);
		});

		dynamicVariants.forEach(([name, selector, suffix]) => {
			matchVariant(
				`${name}-${prefix}`,
				(value, { modifier }) =>
					modifier ? `:merge(${selector}\\/${modifier})${value} ${suffix}` : `:merge(${selector})${value} ${suffix}`,
				{ values: Object.fromEntries(variants) },
			);

			matchVariant(
				`${name}-${prefix}-not`,
				(value, { modifier }) =>
					modifier
						? `:merge(${selector}\\/${modifier}):not(${value}) ${suffix}`
						: `:merge(${selector}):not(${value}) ${suffix}`,
				{ values: Object.fromEntries(variants) },
			);
		});
	});
