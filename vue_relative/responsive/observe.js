import Observer from "./Observer.js";
// 创建 observe 函数，注意函数的名字没有r
export default function observe(value) {
  // 函数只为对象服务
  if (typeof value !== "object") return;
  // 定义 ob
  let ob;
  if (typeof value.__ob__ !== "undefined") {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}
