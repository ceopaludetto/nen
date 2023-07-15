// this file only exists to make eslint-plugin-tailwindcss happy
import type { Config } from "tailwindcss";

import designSystem from "./src";

export default {
	content: [],
	presets: [designSystem({ baseColor: "#FACADA", addBaseStyles: true })],
} satisfies Config;
