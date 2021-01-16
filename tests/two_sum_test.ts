import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
// import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";
import twoSum from "../solutions/1-100/two_sum.ts";

Deno.test("1. Two Sum", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([2, 7, 11, 15], 18), [1, 2]);
});
