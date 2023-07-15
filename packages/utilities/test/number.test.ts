import { describe, expect, it } from "bun:test";

import { displayMax } from "../src/number";

describe("number", () => {
	describe("#displayMax", () => {
		it("should return number if max not reached", () => {
			expect(displayMax(15, 20)).toBe("15");
		});

		it("should return max+ if max reached", () => {
			expect(displayMax(21, 20)).toBe("20+");
		});
	});
});
