import { test, expect } from "vitest";
import { sanitizeContent } from "../src/entities/utils/sanitizeContent";

test("String to analise should contain []", async ()=> {
    const stringToBeTested = await sanitizeContent(['[][a][][a][]aaa', '[a][][a][]aaa[]'])
    expect(stringToBeTested.includes('[]')).toBe(false)
}, 15000)