/*
Given n non-negative integers a1, a2, ..., an , where each represents 
a point at coordinate (i, ai). n vertical lines are drawn such that the two 
endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together 
with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.


The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if(height.length === 0) return null;
  let Output = 0;
  for(let a = 0; a < height.length; a++){
    for(let b = a + 1; b < height.length; b++){
      let newOutput = Math.min(height[a],height[b]) * (b - a);
      if(newOutput > Output){
        Output = newOutput;
      }
    }
  }
  return Output;
};

/*Two Pointer Approach*/
/*
 The Max will increase only if short bounder becomes larger then largest bounder
 (!If we try to move the pointer at the longer line inwards, 
 we won't gain any increase(event inifinit large) in area, since it is limited by the shorter line!)  
*/
var maxArea = function(height) {
  if(height.length === 0) return null;
  let Output = 0;
  let a = 0,
      b = height.length - 1;
  while(a < b){
    let newOutput = Math.min(height[a],height[b]) * (b - a);
    if(newOutput > Output){
      Output = newOutput;
    }
    if(height[a] > height[b]){
      b --;
    }else{
      a ++;
    }
  }
  return Output;
};