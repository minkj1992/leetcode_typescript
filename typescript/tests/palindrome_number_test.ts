import * as log from "https://deno.land/std/log/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "../solutions/1-100/palindrome_number.ts";

const logger = log.getLogger();
const inAndOut: [number, boolean][] = [
  [121, true],
  [-121, false],
  [10, false],
  [-101, false],
];

Deno.test("9. Palindrome Number", () => {
  for (const [input, output] of inAndOut) {
    assertEquals(isPalindrome(input), output);
  }
});
