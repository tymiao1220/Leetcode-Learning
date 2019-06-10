/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let Output = [];
  nums.sort(function(a, b){
    return a - b;
  });

  if(nums.length < 4){ return Output; }

  for(let i = 0; i < nums.length - 3; i++){

    if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target){ break; }
    if(nums[i] + nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3] < target){ continue; }
    /*
      Should will compare with pre not next(will miss [-3(0),-3(1),*,*] solution)
      duplicate quadruplets does not mean duplicate element in array:
      [-3(0),*,*] === [-3(1),*,*] because they will all loop through rest
      but if compare with pre will miss [-3(0),-3(1),*] sulotion
    */
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    // if(nums[i] === nums[i + 1]) continue;

    for(let j = nums.length - 1; j > 2; j--){
      if(nums[j] + nums[j - 1] + nums[j - 2] + nums[j - 3] < target){ break; }
      if(nums[j] + nums[i] + nums[i + 1] + nums[i + 3] > target){ continue; }

      if(j < nums.length - 1 && nums[j] === nums[j + 1]) continue;
      // if(nums[j] === nums[j - 1]) continue;
      let secIndex = i + 1, thrIndex = j - 1;
      while(secIndex < thrIndex){
        if(nums[i] + nums[secIndex] + nums[thrIndex] + nums[j] === target){
          Output.push([nums[i], nums[secIndex], nums[thrIndex], nums[j]]);
          while(nums[secIndex] === nums[secIndex + 1]) { secIndex ++; }
          while(nums[thrIndex] === nums[thrIndex - 1]) { thrIndex --; }

          /* Don't forget update iterator especially for while loop*/
          secIndex ++;
          thrIndex --;
        }
        else if(nums[i] + nums[secIndex] + nums[thrIndex] + nums[j] > target){
          thrIndex --;
        }
        else if(nums[i] + nums[secIndex] + nums[thrIndex] + nums[j] < target){
          secIndex ++;
        }
      }
      if(j === i + 3){
        break;
      }
    }
  }
  return Output;
};