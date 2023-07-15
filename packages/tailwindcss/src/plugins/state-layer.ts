import plugin from "tailwindcss/plugin";

export const stateLayer = () =>
	plugin(({ addUtilities, matchUtilities, theme }) => {
		addUtilities({
			".reset-svg": {
				"> svg": {
					width: "1em",
					height: "1em",
				},
			},
			".ripple": {
				overflow: "hidden",
				position: "relative",
				isolation: "isolate",
			},
			// stub to avoid lint plugin error
			".active": {},
		});

		// state layer utilities
		addUtilities({
			".state-layer": {
				"--tw-state-layer-opacity": "0",
				"--tw-state-layer-radius": "9999px",
				"--tw-state-layer-size": "150%",

				"&::before": {
					content: '""',
					display: "block",
					position: "absolute",
					left: "50%",
					top: "50%",
					backgroundColor: theme("colors.current"),
					borderRadius: "var(--tw-state-layer-radius, 9999px)",
					height: "var(--tw-state-layer-size, 150%)",
					width: "var(--tw-state-layer-size, 150%)",
					opacity: "var(--tw-state-layer-opacity, 0)",
					pointerEvents: "none",
					transform: "translateX(-50%) translateY(-50%)",
					transitionProperty: "opacity, background-color",
					transitionDuration: theme("transitionDuration.short3"),
					transitionTimingFunction: theme("transitionTimingFunction.standard"),
				},
			},
			".hover-state-layer": {
				"--tw-state-layer-opacity": theme("opacity.8"),
			},
			".focus-state-layer": {
				"--tw-state-layer-opacity": theme("opacity.10"),
			},
			".press-state-layer": {
				"--tw-state-layer-opacity": theme("opacity.12"),
			},
			".reset-state-layer": {
				"--tw-state-layer-opacity": theme("opacity.0"),
			},
		});

		matchUtilities(
			{
				"state-layer": (value) => ({
					"--tw-state-layer-size": value,
				}),
			},
			{ type: ["absolute-size", "relative-size", "length", "percentage"], values: theme("spacing") },
		);
	});
