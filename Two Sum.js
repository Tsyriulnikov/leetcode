/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

const twoSum = (nums, total) => {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === total) {
          return [i, j];
        }
      }
    }
  };
  

  или с созданием объекта

  const twoSum = (nums, total) => {
    // Keep track of previous array values
    const previousValues = {};
    for (let i = 0; i < nums.length; i++) {
      // What previous value needs to exist for
      // us to have found our solution?
      const complement = total - nums[i];
      if (previousValues[complement]) {
        return [complement, nums[i]];
      }
      // This current array item now becomes
      // a previous value
      previousValues[nums[i]] = true;
    }
  };