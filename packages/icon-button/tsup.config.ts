import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.tsx"],
	format: ["cjs", "esm"],
	dts: true,
	clean: true,
	treeshake: true,
	sourcemap: true,
});