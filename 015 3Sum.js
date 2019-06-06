/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(!nums.length) return [];
    let a = 0;
    let sumMap = {};
    let Output = [];
    while(a < nums.length){
      let restSum = 0 - nums[a];
      if(!(restSum in sumMap)){
        sumMap[restSum] = a;
      } 
      let b = a + 1;
      let sumMap2 = {};
      while(b < nums.length){
        let third = restSum - nums[b];
        if(!(third in sumMap2)){
          sumMap2[nums[b]] = b;
        }else{
          Output.push([nums[a], nums[b], third]);
        }
        b ++;
      }
      a++;

    }
    return Output;
};


/*
 sort Arry is an important step, it makes sure that when iterate left and right should 
 follow congregate trend, and when 0 appear, left and right are sure to move inside once
*/
var threeSum = function(nums) {
  var rtn = [];
  if (nums.length < 3) {
    return rtn;
  }
  nums = nums.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return rtn;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k;) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return rtn;
};