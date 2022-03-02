/**
 * Definition for singly-linked list.
 */
export function genlistNode(arr: number[]) {
  if (arr.length === 1) {
    return new ListNode(arr[0]);
  }
  const root: ListNode = new ListNode(arr.shift());
  let parent: ListNode = root;
  arr.forEach((ele) => {
    const child = new ListNode(ele);
    parent.next = child;
    parent = child;
  });
  return root;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
