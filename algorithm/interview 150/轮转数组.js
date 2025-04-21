// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = Math.abs(nums.length - k);
  nums.splice(0, 0, ...nums.slice(n, nums.length));
  nums.length = n;
  console.log(nums);
};

const nums = [-1, 3];
// const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
