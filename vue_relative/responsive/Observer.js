import { def } from "./utils.js";
import defineReactive from "./defineReactive.js";
import { arrayMethods } from "./array.js";
import observe from "./observe.js";
export default class Observer {
  constructor(value) {
    // 给实例(构造函数中的this表示实例)添加了__ob__属性
    def(value, "__ob__", this, false);
    // Observer类的目的是：将一个正常的 object 转换为每个层级的属性都是响应式（可以被侦测的）的 object
    // 检查是数组还是对象
    if (Array.isArray(value)) {
      // 如果是数组，就要将这个数组的原型指向 arrayMethods
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  // 遍历
  walk(value) {
    for (let key in value) {
      defineReactive(value, key);
    }
  }
  // 数组的特殊遍历
  observeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // 逐项进行 observe
      observe(arr[i]);
    }
  }
}
