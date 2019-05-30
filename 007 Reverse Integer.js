/*Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */

/*
 * Does. overflows in js need to be considered?
*/
var reverse = function(x) {
  let rev = 0;
  let positiveX = Math.abs(x);
  while(positiveX>0){
      let pop = positiveX % 10;
      positiveX = Math.floor(positiveX/10);
      rev = rev * 10 + pop;
  }
  rev = rev * Math.sign(x);
  return rev;
};