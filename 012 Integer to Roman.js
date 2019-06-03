/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let Output = '';
  let bit = 0;

  let table = { 0: {0: 'I', 1: 'V'},
                1: {0: 'X', 1: 'L'}, 
                2: {0: 'C', 1: 'D'}, 
                3: {0: 'M', 1: null}};
    while (num > 0){
      let stepOutput = '';
      let needConvert = num % 10;
      num = Math.floor(num / 10);
      if(needConvert < 4){
        for (let a = 0; a < needConvert; a++){
          stepOutput += table[bit][0];
        }
      }
      else if(4 <= needConvert && needConvert < 5){
        stepOutput = table[bit][0] + table[bit][1];
      }else if(5 <= needConvert && needConvert < 9){
        stepOutput = table[bit][1]
        for (let a = 5; a < needConvert; a++){
          stepOutput += table[bit][0] ;
        }
      }else{
        let carryOn = bit + 1;
        stepOutput = table[bit][0] + table[carryOn][0];
      }
      console.log(stepOutput);
      Output = stepOutput + Output;
      bit ++;
    }

    return Output;
};



var intToRoman = function(num) {
  let M = ["", "M", "MM", "MMM"],
  C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[Math.floor(num%10)];
};

