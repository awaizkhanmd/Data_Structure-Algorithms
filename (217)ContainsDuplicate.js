/*  Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct.
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/
/**
 * 
 * @param {[]} nums 
 * @returns boolean
 */
/*
Method (1)
TimeCompexity = n^2
space is contant= 0(1)
*/ 
const ContainsDuplicate = function (nums) {
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]) return true
    }
}
return false
}


//By using sorting techinuqe 
//sorting is nlogn (tiecompexity)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort()
 for(let i=0;i<nums.length-1;i++){
     if(nums[i]==nums[i+1]) return true
    
     
 }  
 return false 
};


console.log(ContainsDuplicate([1,2,3,4,1]))