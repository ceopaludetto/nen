/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from "tailwindcss";

import designSystem from "@reactjs-material/tailwindcss";

export default {
	content: ["./node_modules/@reactjs-material/**/dist/*"],
	presets: [designSystem({ baseColor: "#FACADA", addBaseStyles: true })],
} satisfies Config;
