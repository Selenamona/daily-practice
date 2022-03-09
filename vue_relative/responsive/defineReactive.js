import observe from "./observe";
export default function defineReactive(data, key, val) {
  if (arguments.length == 2) {
    val = data[key];
  }
  // 子元素要进行 observe, 至此形成了递归，
  // 这个递归不是函数自己调用自己
  let childOb = observe(val);
  Object.defineProperty(data, key, {
    // 可枚举
    emuerable: true,
    // 可以被配置，比如可以被 delete
    configurable: true,
    get() {
      console.log(`正在访问${key}属性`, val);
      return val;
    },
    set(newValue) {
      console.log(`正在改变${key}属性`, newValue);
      if (val === newValue) {
        return;
      }
      val = newValue;
      // 当设置了新值，新值也要 observe
      childOb = observe(newValue);
    }
  });
}
