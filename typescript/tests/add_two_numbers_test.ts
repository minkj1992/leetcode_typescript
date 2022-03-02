import * as log from "https://deno.land/std/log/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import addTwoNumbers from "../solutions/1-100/add_two_numbers.ts";
import { ListNode } from "../interface/listnode.ts";

const logger = log.getLogger();


const inAndOut: [[ListNode, ListNode], number[]][] = [
  [[getListNode([2,4,3]),getListNode([5,6,4])] true],
];

Deno.test("2. Add Two Numbers", () => {
  for (const [input, output] of inAndOut) {
    assertEquals(isPalindrome(input), output);
  }
});
