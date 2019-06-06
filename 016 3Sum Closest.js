/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
 There is a little difference with 015, no skip even if nums[a] == nums[a+1],
 sumation on which side of target determines which side should congregate.
*/
var sortNumber = function(a, b){
  return a - b;
}

var threeSumClosest = function(nums, target) {
  if(nums.length < 3){ return null; }
  nums = nums.sort(sortNumber);
  let closestDiff;
  let closest;
  let a = 0;
  for(a; a < nums.length - 2; a++){
    for(let b = a + 1, c = nums.length - 1; b < c;){
      let diff = Math.abs(target - (nums[a] + nums [b] + nums[c]));
      if (diff < closestDiff || !closestDiff){
        closest = nums[a] + nums [b] + nums[c];
        closestDiff = diff;
      }
      if(nums[a] + nums [b] + nums[c] > target){
        c --;
      }else if(nums[a] + nums [b] + nums[c] < target){
        b ++;
      }else{
        return closest;
      }
    }
  }
  return closest;
};