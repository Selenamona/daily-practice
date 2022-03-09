Array.prototype.myReduce = function (fn, initialValue) {
  // console.log(this); // 原型链中 this 指向实例对象，注意：若是箭头函数，this 为 {}
  let pre = initialValue !== undefined ? initialValue : this[0];
  const n = initialValue !== undefined ? 0 : 1;
  for (let i = n; i < this.length; i++) {
    const cur = this[i];
    pre = fn(pre, cur, i, this);
  }
  return pre;
};

let arr = [1, 2, 3, 4, 5];
let res = arr.myReduce((pre, cur, i, arr) => {
  // console.log(pre, cur, i, arr);
  return pre + cur;
}, 10);
console.log(res);
