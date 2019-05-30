/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/* 
Node v8 out of memory heap, may be because of too many array (maybe assign know length of array first like method 2)
Runtime Error
 stdout
<--- Last few GCs --->

[29:0x2faa1a0]     2237 ms: Scavenge 388.1 (398.1) -> 388.2 (400.6) MB, 0.6 / 0.0 ms  (average mu = 0.071, current mu = 0.000) allocation failure 
[29:0x2faa1a0]     2249 ms: Scavenge 389.3 (400.6) -> 389.3 (402.1) MB, 12.3 / 0.0 ms  (average mu = 0.071, current mu = 0.000) allocation failure 
[29:0x2faa1a0]     2251 ms: Scavenge 390.5 (402.1) -> 390.5 (407.1) MB, 1.7 / 0.0 ms  (average mu = 0.071, current mu = 0.000) allocation failure 


<--- JS stacktrace --->
Cannot get stack trace in GC.
*/
var convert = function(s, numRows) {
	let output = '';
	let arr = [];
    for(let a = 0, b=0; a < s.length; a = a + numRows -1){
    	let col = [];
    	for(let c = 0; c <= numRows - 1; c++){
    		
    		if( b % 2 === 0){
    			if(c == numRows - 1){
    				col.push('');
    			}else{
    				col.push(s.charAt(a+c))
    			}
	    	}else{
	    		if(c == 0){
    				col.push('');
    			}else{
    				col.push(s.charAt(a + numRows - 1 - c))   a+ 2/1/0
    			}
	    	}
    	}
    	arr.push(col)
    	b++;
    }
    for(let c = 0; c < numRows; c++){
    	for(let a = 0; a < arr.length; a++){
    		output += arr[a][c];
    	}
    }
    return output;
};

var convert = function(s, numRows) {
    // return original string if can't zigzag
    if (numRows === 1 || s.length < numRows) return s;

    let rows = []
    let converted = '';
    let reverse = false;
    let count = 0

    // prepare rows
    for (let i = 0; i < numRows; i++) rows[i] = [];
    // reverse the push flow when reaching turning points
    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    // put together converted string
    return rows.reduce((converted, cur) => converted + cur.join(''), '');
};