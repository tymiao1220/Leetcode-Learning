/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */

/*
  "cbbd", 
  s.substr(index, !length!)
*/

var longestPalindrome = function(s) {
  if (s == null || s.length < 1) return "";
  let longest = 1;
  let start;
  var vaildPalindromic = function(str, leftIndex, rightIndex){
    while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] == s[rightIndex]) {
        leftIndex--;
        rightIndex++;
    }
    return rightIndex - leftIndex - 1;
  }
  let center = 0;
  while(center < s.length){
    // case I one center !THAT IS LENGTH OF PALINDROMIC STRING!
    let vaildLen_1 = vaildPalindromic(s, center, center);
    // case II two center 'cbbd'
    let vaildLen_2 = vaildPalindromic(s, center, center + 1);

    let max = Math.max(vaildLen_1,vaildLen_2);
    if(max > longest){
      longest = max;
      if(vaildLen_1 > vaildLen_2){
        start = center - (vaildLen_1 - 1)/2;
      }else{
        start = center - ((vaildLen_2 - 2)/ 2);
      }
    }
    
    center ++; 
  }

  return s.substr(start, longest);
};



// Expand Around Center solution
// T O(N^2) and more
// S O(1)
var longestPalindrome = function(s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account 
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
        
    }
  }
  return max;
};