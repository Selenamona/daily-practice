// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。 如果你最多只允许完成一笔交易(即买入和卖出一支股票)，设计一个算法来计
// 算你所能获取的最大利润。
// 注意你不能在买入股票前卖出股票。
// const arr = [7, 1, 5, 3, 6, 4]; // 5
// const arr = [7, 6, 4, 3, 1]; // 0

// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let k = i + 1; k < arr.length; k++) {
//     const benefit = arr[k] - arr[i];
//     if (benefit > max && benefit > arr[i]) {
//       max = benefit;
//     }
//   }
// }
// console.log(max);

// 给出一个股票n天的价格，每天最多只能进行一次交易，可以选择买入一支股票或卖出一支股票或放弃交易，输出能够达到的最大利润值
const arr = [1, 2, 10, 9];
