import { defineConfig } from "turbowatch";

export default defineConfig({
	project: __dirname,
	cwd: __dirname,
	triggers: [
		{
			initialRun: false,
			expression: [
				"anyof",
				["allof", ["dirname", "node_modules"], ["dirname", "dist"], ["match", "*"]],
				["allof", ["not", ["dirname", "node_modules"]], ["dirname", "src"], ["match", "*"]],
			],
			interruptible: true,
			name: "build",
			onChange: async ({ spawn }) => {
				await spawn`bun run build`;
			},
		},
	],
});
