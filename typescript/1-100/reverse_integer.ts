// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/
function reverse(x: number): number {
  const maxInteger: number = Math.pow(2, 31) - 1;
  const output: number = Math.abs(
    parseInt(x.toString().split("").reverse().join(""))
  );
  return output > maxInteger ? 0 : output * Math.sign(x);
}

export default reverse;
