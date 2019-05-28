/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let totalMap = {};

    // if (s.length < 2) {
    //     return s.length;
    // }
    for(let a=0; a < s.length;a++){
      let lengthOfString = 1;
      let map = {};
      for(let lengthOfString = 1; lengthOfString < s.length - a; lengthOfString++){
        let substring = s.substr(a,lengthOfString);
        let newChar = s.substr(a+lengthOfString-1,1);
        if(newChar in map){
          let substringWithoutLastRepeat = s.substr(a,lengthOfString-1);
          totalMap[substringWithoutLastRepeat] = lengthOfString - 1;
          break;
        }
        else{
          let substringWithoutLastRepeat = s.substr(a,lengthOfString);
          totalMap[substringWithoutLastRepeat] = lengthOfString;
          map[newChar] = a;
        }
      }
    }
    let arr = Object.values(totalMap);

    // X (not consider 'aaab')
    // if there is no repeat appear
    // if(arr.length){
    //     max = Math.max(...arr);
    //     longestStr = Object.keys(totalMap).find(key => totalMap[key] === max);
    // }else{
    //     max = s.length;
    //     longestStr = s;
    // }
    // console.log(totalMap);
    // return max;
    
    let longestStr = Object.keys(totalMap).find(key => totalMap[key] === max);
    console.log(longestStr);
    
    return max;
};

var lengthOfLongestSubstring = function(s) {
    var maxLen,
        l,
        r;
        
    if (s.length < 2) {
        return s.length;
    }
    
    maxLen = 0;
    
    for (l = 0, r = 1; r < s.length; r++) {
        i = s.lastIndexOf(s[r], r-1);
        if (i >= 0) {
            maxLen = Math.max(maxLen, r - l);
            l = Math.max(l, i + 1);
        }
    }
    return Math.max(maxLen, r - l);
};

var lengthOfLongestSubstring = function(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}