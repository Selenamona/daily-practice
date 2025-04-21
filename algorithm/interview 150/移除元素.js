// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。

// 假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：

// 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
// 返回 k。

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let k = 0;
  let m = 0;
  while (k < nums.length) {
    if (nums[k] === val) {
      nums[k] = "_";
    } else {
      ++m;
    }
    k++;
  }
  nums.sort();
  return m;
};

/**
 * 双指针-至多遍历数组两遍
 * 输出数组的长度一定小于等于输入数组的长度，
 * 右指针 right 指向当前将要处理的元素
 * 左指针 left 指向下一个将要赋值的位置。
 */
var removeElement = function (nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};

// 双指针优化-至多遍历数组一遍
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};

// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2,_,_]
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const k = removeElement(nums, 3);
console.log(k, nums);
