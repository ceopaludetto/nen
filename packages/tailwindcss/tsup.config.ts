import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "src/tv.ts"],
	format: ["cjs", "esm"],
	noExternal: ["@material/material-color-utilities"],
	dts: true,
	clean: true,
	treeshake: true,
	sourcemap: true,
});
