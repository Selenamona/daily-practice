// 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 耗时太长
  // let left = 0;
  // for (let right = 0; right < nums.length; right++) {
  //   if (!nums.slice(0, right).includes(nums[right])) {
  //     nums[left] = nums[right];
  //     left++;
  //   }
  // }
  // return left;

  // 双指针
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k++] = nums[i];
    }
  }
  return nums.length ? k : 0;
};

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const k = removeDuplicates(nums);
// console.log(k);
// console.log(nums);

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   let k = 2;
//   for (let i = 2; i < nums.length; i++) {
//     // 注意用 k-2 而不是 i-2
//     if (nums[i] !== nums[k - 2]) {
//       nums[k++] = nums[i];
//     }
//   }
//   return k;
// };

var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }
  // 滑动窗口，窗口长度为3
  let left = 0;
  let right = 2;
  while (right < nums.length) {
    // 有3个重复 有序数组判断重复
    if (nums[left] === nums[right]) {
      nums.splice(right, 1);
      console.log("del", right);
    } else {
      right++;
      left++;
    }
  }
  return right + 1;
};

var removeDuplicates = function (nums) {
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
      // 因为删除数组元素后数组长度发生改变，所以需要i--回到当前索引位置继续检索，否则会跳过一个未检索到的元素
      i--;
    }
  }
  return nums.length;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// const nums = [1, 1, 1, 2, 2, 3];
const k = removeDuplicates(nums);
console.log(k);
console.log(nums);
