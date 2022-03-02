// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/
// floor division in js: https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let reversed = 0;

  for (let i = x; i > 0; i = ~~(i / 10)) {
    reversed *= 10;
    reversed += i % 10;
  }
  return reversed === x;
}

export default isPalindrome;
