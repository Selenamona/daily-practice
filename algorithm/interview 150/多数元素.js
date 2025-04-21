// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 方法一
  // nums.sort();
  // let num = nums[0];
  // let nextNum = nums[nums.lastIndexOf(num) + 1];
  // while (nextNum) {
  //   const n = nums.lastIndexOf(num) - nums.indexOf(num) + 1;
  //   const m = nums.lastIndexOf(nextNum) - nums.indexOf(nextNum) + 1;
  //   if (m > n) num = nextNum;
  //   nextNum = nums[nums.lastIndexOf(num) + 1];
  // }

  // 方法二
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], m.get(nums[i]) ? m.get(nums[i]) + 1 : 1);
  }
  const n = Math.max(...Array.from(m.values()));
  let num;
  for (const [key, value] of m) {
    if (value === n) {
      num = key;
    }
  }
  return num;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
majorityElement(nums);
