// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。

// leetcode.cn/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 方法一：暴力枚举
  // const arr = [];
  // for (let i = 0; i < nums.length; i++) {
  //   const e = nums[i];
  //   i + 1 只需遍历当前元素之后的数据
  //   for (let k = i + 1; k < nums.length; k++) {
  //     const m = nums[k];
  //     if (e + m === target) {
  //       arr.push(i, k);
  //       break;
  //     }
  //   }
  // }
  // return arr
  // 方法二：双指针（仅限于递增数组）
  // nums.sort((a, b) => a - b);
  // var left = 0,
  //   right = nums.length - 1;
  // while (left < right) {
  //   var sum = nums[left] + nums[right];
  //   if (sum === target) {
  //     // 找到了，返回
  //     console.log([left, right]);
  //     return [left, right];
  //   } else if (sum < target) {
  //     left++; // 让 sum 大一点
  //   } else if (sum > target) {
  //     right--; // 让 sum 小一点
  //   }
  // }
  // 方法三： 哈希表
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(target - nums[i])) {
      console.log(nums.indexOf(target - nums[i]), i);
      return [m.get(target - nums[i]), i];
    }
    m.set(nums[i], i);
  }
};

// const nums = [2, 11, 7, 15],
//   target = 9;
// twoSum(nums, target);

// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
// https://leetcode.cn/problems/3sum/description/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {};
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

const nums = [-1, 0, 1, 2, -1, -4];
