/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
if(!s.length){ return true; }
  let pair = {
    '{' : '}',
    '}' : '{',
    '[' : ']',
    ']' : '[',
    '(' : ')',
    ')' : '('
  };
  let shouldNotStartWith = '}])'
  let cur = '';
  let flag;
  for(let i = 0; i < s.length; i++){
      flag = 0;
    // console.log(cur.indexOf(s[i]));
    // console.log(cur.indexOf(pair[s[i]]));
      
      
      
    console.log(cur);
    console.log(s[i]);  
    if(cur.indexOf(s[i]) === -1 && cur.indexOf(pair[s[i]]) === -1){
      cur += s[i]
    }
    else{
      // console.log(pair[s[i]] !== cur[cur.length-1]);
      // console.log(shouldNotStartWith.indexOf(cur[cur.length-1]) !== -1);
      if(pair[s[i]] !== cur[cur.length-1] || shouldNotStartWith.indexOf(cur[cur.length-1]) !== -1){ flag = 0; }
      else{
        cur = cur.slice(0, cur.length - 1);
        if(cur.length === 0){ flag = 1; }
      }
    }
  }
    return flag;
};