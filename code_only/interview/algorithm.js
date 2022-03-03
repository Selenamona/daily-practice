// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 示例: 输入:[1,2,3,4,5,6,7] 和 k=3 输出:[5,6,7,1,2,3,4] 解释: 向右旋转 1 步: [7,1,2,3,4,5,6] 向右旋转 2 步:[6,7,1,2,3,4,5] 向右旋转 3 步:[5,6,7,1,2, 3, 4]
// const arr = [-1, -100, 3, 99];
// const moveFn = (arr, k) => {
//   let ls = [];
//   arr.forEach((ele, index) => {
//     const j = index + k > arr.length - 1 ? index + k - arr.length : index + k;
//     ls[j] = ele;
//   });
//   return ls;
// };
// 进阶方法
const moveFn = (arr, k) => {
  const len = arr.length;
  const step = k % len;
  return arr.slice(-step).concat(arr.slice(0, len - step));
};

// console.log(moveFn(arr, 2));

// 打印出 1 - 10000 之间的所有对称数,例如:121、1331

const numMaker = () => {
  // const arr = Array.from({ length: 10000 }, (v, i) => i);
  // return arr.filter((ele, index) => {
  //   const ls = String(ele);
  //   return ls.length === 2
  //     ? ls[0] === ls[1]
  //     : ls.length === 3
  //     ? ls[0] === ls[2]
  //     : ls.length === 4
  //     ? ls[0] === ls[3] && ls[1] === ls[2]
  //     : false;
  // });

  // 进阶方法
  const arr = [...Array(10000).keys()];
  return arr.filter((ele) => {
    return (
      ele.toString().length > 1 &&
      ele === Number(ele.toString().split("").reverse().join(""))
    );
  });
};
// numMaker()

// 实现一个 add 函数，实现
// add(1) 返回 1
// add(1,2，3) 返回 6
// add(1,2)(3) 返回 6
// add(1)(2,3) 返回 6
// add(1)(2)(3) 返回 6

// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
// 示例: 给定 nums=[2,7,11,15],target=9 因为 nums[0]+nums[1]=2+7=9 所以返 回 [0, 1]
// const testFn = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = i + 1; k < arr.length; k++) {
//       if (arr[i] + arr[k] === target) {
//         return [i, k];
//       }
//       console.log(k, "k");
//     }
//     console.log(i, "i");
//   }
// };
// testFn([2, 7, 11, 15], 9);

// 扁平数据结构，转成树
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 }
];

const transferTree = (arr) => {
  const fn = (arr, child) => {
    arr.forEach((item) => {
      if (item.id === child.pid) {
        item.children ? item.children.push(child) : (item.children = [child]);
      } else {
        if (item.children && item.children.length) {
          fn(item.children, child);
        }
      }
    });
  };

  const newArr = arr.filter((item) => {
    return item.pid === 0;
  });
  arr.forEach((item) => {
    if (item.pid === 0) return;
    fn(newArr, item);
  });

  console.log(newArr);
};

transferTree(arr);

/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
};

/**
 * 转换方法
 */
const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid);
  return result;
};
arrayToTree(arr);
