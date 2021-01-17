import * as log from "https://deno.land/std/log/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import reverse from "../solutions/1-100/reverse_integer.ts";

const logger = log.getLogger();
const inAndOut: [number, number][] = [
  [123, 321],
  [-123, -321],
  [120, 21],
  [0, 0],
];

Deno.test("7. Reverse Integer", () => {
  for (const [input, output] of inAndOut) {
    logger.info([reverse(input), output]);
    assertEquals(reverse(input), output);
  }
});
