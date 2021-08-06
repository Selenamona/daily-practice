/**
 * 题1
 * 计算数组的 中心下标
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 1、左和==右和；耗时308 ms；内存消耗: 40 MB
  // let sum1 = 0;
  // let n = -1
  // for (var i = 0; i < nums.length; i++) {
  //   sum1 += (nums[i - 1] || 0)
  //   let sum2 = 0;
  //   for (var j = nums.length - 1; j > i; j--) {
  //     sum2 += nums[j]
  //   }
  //   if (sum1 === sum2) n = i
  //   if (n > -1) return n
  // }
  // return n

  // 2、 计算总和 = 左和 * 2 + i ；耗时108 ms；内存消耗: 40.2 MB
  let total = 0
  nums.forEach((item) => {
    total += item
  })

  let ls = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + ls * 2 === total) {
      return i
    } else {
      ls += nums[i]
    }
  }
  return -1
}
// const result = pivotIndex([-1, -1, -1, -1, -1, -1])
// const result = pivotIndex([1, 7, 3, 6, 5, 6])
// console.log("🚀 result", result)

/**
 * 题2
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchnsert = function (nums, target) {
  // 1、 执行用时：76 ms；内存消耗：38.7 MB
  // const k = nums.indexOf(target)
  // if (k > -1) {
  //   return k
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   if (target < nums[i]) {
  //     return i
  //   } else {
  //     if (i === nums.length - 1) {
  //       return i + 1
  //     }
  //   }
  // }
  // 2、执行用时： 64 ms；内存消耗：38.6 MB
  let ls = nums.length
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      ls = i
      return ls
    }
  }
  return ls
}
// console.log(searchnsert([1, 3, 5, 6], 5))

/**
 * 题3
 * 返回一个不重叠的区间数组
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]) //依次排序
  return intervals.reduce((prev, cur, index) => {
    let peek = prev[prev.length - 1] //获取到prev中最后一项
    if (peek && peek[1] >= cur[0]) {
      //当前项和peek存在交集
      let left = peek[0]
      let right = peek[1] > cur[1] ? peek[1] : cur[1]
      prev[prev.length - 1] = [left, right]
    } else {
      prev.push(cur)
    }
    return prev
  }, [])
}

// console.log(merge([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18]
// ]))

// sort  test
// const ls = [
//   [2, 6],
//   [1, 3],
//   [8, 10],
//   [15, 18]
// ]
// const bv = ls.sort((a, b) => {
//   // console.log(a, b);
//   return a[0] - b[0]
// })

// console.log(ls, 1);
// console.log(bv, 2);

/**
 * 题4 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * @param {number[][]} matrix
 * @return {void} Do not return anythng, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 1、未原地旋转
  // matrix.reverse()
  // let res = []
  // matrix.forEach((arr, index) => {
  //   arr.forEach((num, k) => {
  //     if (!res[k]) {
  //       res[k] = []
  //     }
  //     res[k].push(num) e
  //   })
  // })
  // res.forEach((item, n) => {
  //   item.forEach((ele, k) => {
  //     matrix[n][k] = ele
  //   })
  // })
  // return res

  // 2、未原地旋转
  // matrix.reverse()
  // matrix = matrix.reduce((pre, cur, index, arr) => {
  //   cur.map((item, k) => {
  //     if (!pre[k]) pre[k] = []
  //     pre[k].push(item)
  //   })
  //   return pre
  // }, [])

  // 3、原地 旋转图像，这意味着你需要直接修改输入的二维矩阵
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
    }
  }
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]
// 5 15 16 11
// 1 13 12 10
// 2 14 7 9
// 4 3 6 8

// 规律：matrixnew[col][n−row−1]=matrix[row][col]

// 输出：
// [15, 13, 2, 5],
// [14, 3, 4, 1],
// [12, 6, 8, 9],
// [16, 7, 10, 11]
// console.log(rotate(matrix))

/**
 * 题5 若M × N矩阵中某个元素为0，则将其所在的行与列清零
 * @param {number[][]} matrix
 * @return {void} Do not return anythng, modify matrix in-place instead.
 * 说明：https://leetcode-cn.com/problems/zero-matrix-lcc/solution/ling-ju-zhen-by-leetcode-solution-7ogg/
 */
var setZeroes = function (matrix) {
  // 1、替换数组
  // 执行用时：92 ms, 在所有 JavaScript 提交中击败了96.07%的用户
  // 内存消耗：42.5 MB, 在所有 JavaScript 提交中击败了5.03%的用户
  // const newArr = JSON.parse(JSON.stringify(matrix));
  // matrix.forEach((item, index) => {
  //   item.forEach((num, k) => {
  //     if (num === 0) {
  //       newArr[index] = new Array(newArr[index].length).fill(0)
  //       newArr.map(ele => ele[k] = 0)
  //     }
  //   })
  // })
  // newArr.forEach((item, k) => {
  //   item.forEach((num, j) => {
  //     matrix[k][j] = num
  //   })
  // })

  // 2、标记数组
  // 执行用时：104 ms, 在所有 JavaScript 提交中击败了84.72%的用户
  // 内存消耗：40 MB, 在所有 JavaScript 提交中击败了61.57%的用户
  // const m = matrix.length,
  //   n = matrix[0].length;
  // const row = new Array(m).fill(false);
  // const col = new Array(n).fill(false);
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       row[i] = col[j] = true;
  //     }
  //   }
  // }
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (row[i] || col[j]) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }

  // 3、使用两个标记变量
  // 执行用时： 84 ms, 在所有 JavaScript 提交中击败了99 .34 % 的用户
  // 内存消耗： 39.9 MB, 在所有 JavaScript 提交中击败了75 .33 % 的用户
  // const m = matrix.length,
  //   n = matrix[0].length;
  // let flagCol0 = false,
  //   flagRow0 = false;
  // for (let i = 0; i < m; i++) {
  //   if (matrix[i][0] === 0) {
  //     flagCol0 = true;
  //   }
  // }
  // for (let j = 0; j < n; j++) {
  //   if (matrix[0][j] === 0) {
  //     flagRow0 = true;
  //   }
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       matrix[i][0] = matrix[0][j] = 0;
  //     }
  //   }
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     if (matrix[i][0] === 0 || matrix[0][j] === 0) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }
  // if (flagCol0) {
  //   for (let i = 0; i < m; i++) {
  //     matrix[i][0] = 0;
  //   }
  // }
  // if (flagRow0) {
  //   for (let j = 0; j < n; j++) {
  //     matrix[0][j] = 0;
  //   }
  // }

  // 4、使用一个标记变量
  // 执行用时：84 ms, 在所有 JavaScript 提交中击败了99.34%的用户
  // 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了93.45%的用户
  const m = matrix.length,
    n = matrix[0].length
  let flagCol0 = false
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
    if (flagCol0) {
      matrix[i][0] = 0
    }
  }
}

// console.log(setZeroes([
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5]
// ]));

/**
 * 题6 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let a = []
  let rowLength = mat.length - 1
  let colLength = mat[0].length - 1
  let h = 0,
    c = 0
  for (let i = 0; i <= rowLength + colLength; i++) {
    if (i % 2 === 0) {
      // 偶数，右上方向移动
      for (let j = h; j >= i - c; j--) {
        a.push(mat[j][i - j])
      }
    } else {
      // 奇数，左下方向移动
      for (let j = c; j >= i - h; j--) {
        a.push(mat[i - j][j])
      }
    }
    h = h >= rowLength ? rowLength : h + 1
    c = c >= colLength ? colLength : c + 1
  }
  return a
}
// console.log(findDiagonalOrder([
//   [1, 2, 3, 4, 3, 4],
//   [4, 5, 6, 5, 6, 5],
//   [7, 8, 9, 7, 9, 7],
//   [5, 5, 7, 7, 9, 7],
//   [4, 6, 9, 7, 9, 7],
// ]));

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
)

// ------------- 字符串 -------------

/**
 * 编写一个函数来查找字符串数组中的最长 !公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 1. 此方法返回最长的公共字符串， 非前缀
  // strs.sort((a, b) => a.length - b.length)
  // const basic = strs[0]
  // let str = "",
  //   arr = []
  // for (let i = 0; i < basic.length; i++) {
  //   str += basic[i]
  //   const isHas = strs.every((item) => {
  //     return item.indexOf(str) > -1
  //   })
  //   isHas ? arr.push(str) : str = ""
  // }
  // if (arr.length) {
  //   arr.sort((a, b) => a.length - b.length)
  //   return arr[arr.length - 1].length === arr[0].length ? arr[0] : arr[arr.length - 1]
  // } else {
  //   return ""
  // }
  // 2. 公共前缀
  strs.sort((a, b) => a.length - b.length)
  const basic = strs[0]
  let str = '',
    res = ''
  for (let i = 0; i < basic.length; i++) {
    str += basic[i]
    const isHas = strs.every((item) => {
      return item.indexOf(str) == 0
    })
    if (isHas) {
      res = str
    } else {
      return res
    }
  }
  return res
}

// console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// console.log(longestCommonPrefix(["flower", "flow", "fligflowhts"]))
// console.log(longestCommonPrefix(["cr", "car"]))
// console.log(longestCommonPrefix(["reflower", "flow", "flight"]))

/**
 * 字符串 s，找到 s 中最长的回文子串。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  for (let i = 0; i < s.length; i++) {
    // const element = array[i];
  }
}

console.log(longestPalindrome('babad')) // "bab"
console.log(longestPalindrome('cbbd')) // "bb"
console.log(longestPalindrome('a')) // "a"
console.log(longestPalindrome('ac')) // "a"
