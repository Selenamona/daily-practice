import QuickLRU from "quick-lru";

// 力扣测试
import SIMQLRU from "./simulation";

let lRUCacheTest = new SIMQLRU(2);
console.log("🚀 ~ lRUCacheTest", lRUCacheTest);
lRUCacheTest.put(2, 1); // 缓存是 {1=1}
lRUCacheTest.put(1, 1); // 缓存是 {1=1, 2=2}
lRUCacheTest.put(2, 3); // 缓存是 {1=1, 2=2}
lRUCacheTest.put(4, 1); // 缓存是 {1=1, 2=2}
console.log(lRUCacheTest.get(1)); // 返回 1
console.log(lRUCacheTest.get(2)); // 返回 1

// let lRUCacheTest = new SIMQLRU(2);
// console.log("🚀 ~ lRUCacheTest", lRUCacheTest);
// lRUCacheTest.put(1, 1); // 缓存是 {1=1}
// lRUCacheTest.put(2, 2); // 缓存是 {1=1, 2=2}
// console.log(lRUCacheTest.get(1)); // 返回 1
// lRUCacheTest.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log(lRUCacheTest.get(2)); // 返回 -1 (未找到)
// lRUCacheTest.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log(lRUCacheTest.get(1)); // 返回 -1 (未找到)
// console.log(lRUCacheTest.get(3)); // 返回 3
// console.log(lRUCacheTest.get(4)); // 返回 4

// 基本使用
// const onEviction = (key, value) => {
//   console.log("onEviction", key, value);
// };
// const lru = new QuickLRU({ maxSize: "3", maxAge: 900, onEviction });
// console.log("🚀   lru", lru);
// // lru.set("name", "张2三");
// // lru.set("age", 143);
// // lru.set("sex", "女32");
// lru.set("name", "张三");
// lru.set("age", 14);
// lru.set("sex", "女", { maxAge: 100 });
// // lru.get("sex");
// // lru.delete("name");
// // console.log(lru.get("name")); // => '张三'
// // lru.set("hair", "black");

// setTimeout(() => {
//   //   console.log(lru.get("name"), 12);
//   console.log([...lru.keys()]);
// }, 200);

// console.log([...lru.keys()]); //  ['hair', 'name', 'age', 'sex']
// // lru.set("name", "李四");
// // console.log(lru.has("name")); // => true
// console.log([...lru.values()]);
// console.log([...lru.entries()]);
// console.log([...lru.entriesAscending()]);
// console.log([...lru.entriesDescending()]);
// console.log(lru.size);

// for (const iterator of lru) {
//   console.log(iterator);  //  ['age', 14]
// }

// has 和 get； generator 转数组
// const lru = new QuickLRU({ maxSize: 2 });
// lru.set("1", 1);
// lru.set("2", 2);
// lru.set("3", 3);
// console.log(lru.size);
// console.log(lru.has("1")); // true
// console.log(lru.has("2")); // true
// console.log(lru.has("3")); // true
// console.log(lru.get("1")); // 1
// console.log(lru.get("2")); //undefined
// console.log(lru.get("3")); // 3
// console.log(lru.keys());
// console.log([...lru.keys()]); //  ['3', '1', '2']
// console.log(Array.from(lru.keys())); //  ['3', '1', '2']
// console.log([...lru]); // [ ["3", 3],  ["1", 1],  ["2", 2]  ];

// 重复键
// const lru = new QuickLRU({ maxSize: 2 });
// lru.set("key", "value");
// lru.set("keyDupe", 1);
// lru.set("keyDupe", 2);
// console.log([...lru.keys()]); //  ['keyDupe', 'key']
// console.log([...lru.values()]); //  [2, 'value']

// 过期时间
// const lru = new QuickLRU({ maxSize: 10 });
// const lru = new QuickLRU({ maxSize: 10, maxAge: 800 });
// lru.set("1", "test", { maxAge: 150 });
// console.log(new Date().getTime());
// lru.set("2", "test2", "string");
// lru.set("3", "boo");
// setTimeout(() => {
//   console.log(new Date().getTime());
//   console.log(lru.has("1")); // false
//   console.log(lru.has("2")); // true
//   console.log(lru.has("3")); // true
// }, 10);
// setTimeout(() => {
//   console.log(lru.has("1")); // false
// }, 2000);

// resize
// const expectKeys = ["1", "2", "3"];
// const expectValues = ["test", "test2", "test3"];

// let isCalled = false;
// const actualKeys = [];
// const actualValues = [];
// const onEviction = (key, value) => {
//   console.log("🚀   onEviction ~ key, value", key, value);
//   isCalled = true;
//   actualKeys.push(key);
//   actualValues.push(value);
// };
// const lru = new QuickLRU({
//   maxSize: 3,
//   // maxAge: 100,
//   onEviction
// });

// lru.set("1", "test");
// lru.set("2", "test2");
// lru.set("3", "test3");
// lru.set("4", "test4");
// lru.set("5", "test5");

// lru.resize(2);
// console.log(lru);

// const lru = new QuickLRU({ maxSize: 2 });
// lru.set("1", 1);
// lru.set("2", 2);
// console.log(lru[Symbol.toStringTag]); // '[["1",1],["2",2]]'
// console.log(lru.toString()); // [object [["1",1],["2",2]]]
