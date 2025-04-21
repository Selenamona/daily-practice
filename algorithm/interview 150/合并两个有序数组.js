/**
 * 方法总结：
 *  1、先合并，再排序
 *  2、双指针方法：将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中
 *  3、逆向双指针：指针设置为从后向前遍历，每次取两者之中的较大者放进 nums1 的最后面
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 1、先合并，再排序
  nums1.splice(m, n, ...nums2);
  nums1.forEach((el, index) => {
    for (let i = 0; i < index + 1; i++) {
      if (nums1[i] > nums1[index + 1]) {
        const ls = nums1[i];
        nums1[i] = nums1[index + 1];
        nums1[index + 1] = ls;
      }
    }
  });

  // nums1.splice(m, nums1.length - m, ...nums2);
  // nums1.sort((a, b) => a - b);
};
// const nums1 = [1, 2, 3, 0, 0, 0];
// merge(nums1, 3, [2, 5, 6], 3);
// const nums1 = [1];
// merge(nums1, 1, [], 0);
const nums1 = [4, 5, 6, 0, 0, 0];
merge(nums1, 3, [1, 2, 3], 3);
console.log("nums1", nums1); // [1,2,2,3,5,6]

// ---- ！！前提：有序数组！！ ----
// 2、双指针方法：将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中
var merge = function (nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0;
  const sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i];
  }
};

// 3、逆向双指针：指针设置为从后向前遍历，每次取两者之中的较大者放进 nums1 的最后面
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1;
  var cur;
  while (p1 > -1 || p2 > -1) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[p1 + p2 + 2] = cur;
  }
};
