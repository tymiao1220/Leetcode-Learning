/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */


/*How to recursively re-use function with different params*/
var mapping = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};
var curArr = [];
var letterCombinations = function(digits) {
    if(digits.length === 0){ return [];}
    if(digits.length === 1){
      return mapping[digits[0]];
    }
    /*!!Key point!!*/
    let prev = letterCombinations(digits.substring(0, digits.length - 1));
    /* Out of heap memory???*/
    for(let a = 0; a < prev.length * mapping[digits.slice(-1)].length; a++){
      curArr[a] = '';
    }
    for(let i = 0; i < prev.length; i++){
      for(let j = 0; j < mapping[digits.slice(-1)].length; j++){
        curArr[i * mapping[digits.slice(-1)].length + j] = prev[i] + mapping[digits.slice(-1)][j];
      }
    }
    return curArr;
};

/*This works well*/
let curArr = [];
curArr.push