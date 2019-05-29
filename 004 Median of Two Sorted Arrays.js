/*
There are two !sorted! arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * By default, the sort method sorts elements alphabetically
 * .sort O(n^2)
 * .concat O(n)
*/
var findMedianSortedArrays = function(nums1, nums2) {
    let median;
    let arr = nums1.concat(nums2);
    function sortNumber(a, b) {
      return a - b;
    }
    arr = arr.sort(sortNumber);
    let totalLen = nums1.length + nums2.length;
    console.log(totalLen)
    if(totalLen % 2){
      let medianIndex = Math.floor(totalLen/2);
      median = arr[medianIndex];
    }else{
      let lIndex, rIndex;
      lIndex = totalLen / 2 - 1;
      rIndex = totalLen / 2;
      median = (arr[lIndex] +  arr[rIndex])/2;
    }
   
   return median;
};


var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    const arr = []
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    let median
    if (arr.length % 2 === 0) {
        median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    } else {
        median = arr[Math.floor(arr.length / 2)]
    }
    return median
};