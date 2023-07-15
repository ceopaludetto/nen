import { describe, expect, it } from "bun:test";

import { addDefault, getTypedEntries } from "../src/object";

describe("object", () => {
	describe("#getTypedEntries", () => {
		it("should return an array of entries", () => {
			const obj = { a: 1, b: 2, c: 3 };
			const entries = getTypedEntries(obj);

			expect(entries).toStrictEqual([
				["a", 1],
				["b", 2],
				["c", 3],
			]);
		});
	});

	describe("#addDefault", () => {
		it("should add DEFAULT key on object", () => {
			const obj = { a: 1, b: 2, c: 3 };
			const newObj = addDefault(obj, "a");

			expect(newObj).toStrictEqual({
				a: 1,
				b: 2,
				c: 3,
				DEFAULT: 1,
			});
		});
	});
});
