// const promise = new Promise(function (resolve, reject) {});
// console.log("🚀 new promise", promise);
// console.log("🚀  promise", Promise);
// const p1 = new Promise((resolve) => resolve("foo1"));
// const p2 = new Promise((resolve) => resolve("foo2"));
// const p3 = new Promise((resolve) => resolve("foo3"));
// Promise.all([p1, p2, p3]).then(([result1, result2, result3]) => {
//   /* use result1, result2 and result3 */
//   console.log(111, result1, result2, result3);
// });

// [p1, p2, p3]
//   .reduce((p, f) => p.then(f), Promise.resolve())
//   .then((result3) => {
//     console.log("🚀   ~ result3", result3);
//     /* use result3 */
//   });

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// wait().then(() => console.log(4));
// Promise.resolve()
//   .then(() => console.log(2))
//   .then(() => console.log(3));
// console.log(1); // 1, 2, 3, 4

// doSomethingCritical()
//   .then((result) =>
//     doSomethingOptional()
//       .then((optionalResult) => doSomethingExtraNice(optionalResult))
//       .catch((e) => {
//         console.log(e.message);
//       })
//   ) // 即使有异常也会忽略，继续运行;(最后会输出)
//   .then(() => moreCriticalStuff())
//   .catch((e) => console.log("Critical failure: " + e.message)); // 没有输出

// // 错误示例
// doSomething()
//   .then(function (result) {
//     doSomethingElse(result) // 没有返回 Promise 以及没有必要的嵌套 Promise
//       .then((newResult) => doThirdThing(newResult));
//   })
//   .then(() => doFourthThing());
// // 最后，是没有使用 catch 终止 Promise 调用链，可能导致没有捕获的异常

// // 修改后的
// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then((newResult) => doThirdThing(newResult))
//   .then(() => doFourthThing())
//   .catch((error) => console.log(error));

// var original = Promise.resolve(33);
// var cast = Promise.resolve(original);
// cast.then(function (value) {
//   console.log("value: " + value);
// });
// console.log("original === cast ? " + (original === cast));

// // Resolve一个thenable对象
// var p1 = Promise.resolve({
//   then: function (onFulfill, onReject) {
//     onFulfill("fulfilled!");
//   }
// });
// console.log(p1 instanceof Promise); // true, 这是一个Promise对象

// p1.then(
//   function (v) {
//     console.log(v); // 输出"fulfilled!"
//   },
//   function (e) {
//     // 不会被调用
//   }
// );

// // Thenable在callback之前抛出异常
// // Promise rejects
// var thenable = {
//   then: function (resolve) {
//     throw new TypeError("Throwing");
//     resolve("Resolving");
//   }
// };

// var p2 = Promise.resolve(thenable);
// p2.then(
//   function (v) {
//     // 不会被调用
//   },
//   function (e) {
//     console.log(e); // TypeError: Throwing
//   }
// );

// // Thenable在callback之后抛出异常
// // Promise resolves
// var thenable = {
//   then: function (resolve) {
//     resolve("Resolving");
//     throw new TypeError("Throwing");
//   }
// };

// var p3 = Promise.resolve(thenable);
// p3.then(
//   function (v) {
//     console.log(v); // 输出"Resolving"
//   },
//   function (e) {
//     // 不会被调用
//   }
// );

// const promise = Promise.resolve(2222);
// const promise2 = promise.then();
// console.log(promise2, 123, promise);

// var p2 = new Promise(function (resolve, reject) {
//   resolve(1);
// });

// p2.then(function (value) {
//   console.log(value); // 1
//   return value + 1;
// }).then(function (value) {
//   console.log(value + " - A synchronous value works");
// });

// p2.then(function (value) {
//   console.log(value); // 1
// });

// Promise.resolve("foo")
//   // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
//   .then(function (string) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         string += "bar";
//         resolve(string);
//       }, 1);
//     });
//   })
//   // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
//   // 并将其打印到控制台中, 但是不将处理后的字符串返回到下一个。
//   .then(function (string) {
//     setTimeout(function () {
//       string += "baz";
//       console.log(string);
//     }, 1);
//     return string;
//   })
//   // 3. 打印本节中代码将如何运行的帮助消息，
//   // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
//   .then(function (string) {
//     console.log(
//       "Last Then:  oops... didn't bother to instantiate and return " +
//         "a promise in the prior then so the sequence may be a bit " +
//         "surprising"
//     );

//     // 注意 `string` 这时不会存在 'baz'。
//     // 因为这是发生在我们通过setTimeout模拟的异步函数中。
//     console.log(string);
//   });

// // logs, in order:
// // Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// // foobar
// // foobarbaz

const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then((value) => {
  console.log(
    "this gets called after the end of the main stack. the value received and returned is: " +
      value
  );
  return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log(thenProm);
});
