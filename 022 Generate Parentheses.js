/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 0) return "";
    let arr = [];
    let dfs = function(str, left, right, n){
      if(left + right === 2 * n){
        arr.push(str);
      }else{

        /*!Should be if and if not else if, because path will continue 
        no matter whether () match or not!*/
        if(left >= right + 1){
          // because of if and if str = str + '(' will effect next 
          // str = str + ')';
          // dfs(str, left + 1, right, n);
          let newstr = str + ')'; 
          dfs(newstr, left, right + 1, n);
        }

        if(left < n){
          // str = str + '(';
          // dfs(str, left + 1, right, n);
          let newstr = str + ')'; 
          dfs(newstr, left + 1, right, n);
        }
      }
    }
    dfs('(', 1, 0, n);
    return arr;
};

var generateParenthesis = function(n) {
    if(n === 0) return "";
    let arr = [];
    let dfs = function(str, left, right, n){
      if (str.length < n*2) {
        if (left >= right+1) dfs(str+')', left, right+1, n)
        if (left < n) dfs(str+'(', left+1, right, n);
      } else {
        arr.push(str);
      }
    }
    dfs('(', 1, 0, n);
    return arr;
}