function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}

var a = foo(5);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}

var a = foo(5);
// console.log(a.next()); // 第一次使用next()方法时不能带有参数
// console.log(a.next(12));
// console.log(a.next(13));

function* ge() {
  yield "1";
  yield "2";
  yield "3";
  return "4";
}

var a = ge(); // 调用函数后不会运行，而是返回指向函数内部状态的指针
// console.log(a.next()); // { value: '1', done: false }   遇到yield暂停
// console.log(a.next()); // { value: '2', done: false }
// console.log(a.next()); // { value: '3', done: false }
// console.log(a.next()); // { value: '4', done: true}    函数执行完毕，返回done
// console.log(a.next()); // { value: undefined, done: true}  已经执行完毕，返回undefined

// function* foo(x) {
//   yield x + 1;
//   try {
//     yield x + 2;
//   } catch (e) {
//     console.log("catch it");
//   }
// }
// const result = foo(0); // foo {<suspended>}
// console.log(result.next()); // {value: 1, done: false}
// console.log(result.next()); // {value: 2, done: false}
// result.throw(); // catch it
// console.log(result.next()); //{value: undefined, done: true}

// function* foo(x) {
//   yield x + 1;
//   try {
//     yield x + 2;
//   } catch (e) {
//     console.log("catch it");
//   }
// }
// const result = foo(0); // foo {<suspended>}
// console.log(result.next()); // {value: 1, done: false}
// result.throw(); // Uncaught undefined
// console.log(result.next()); //{value: undefined, done: true}

// function* foo(x) {
//   let a = yield x + 1;
//   let b = yield a + 2;
//   return x + 3;
// }
// const result = foo(0); // foo {<suspended>}
// console.log(result.next(1)); // {value: 1, done: false}
// console.log(result.next(2)); // {value: 2, done: false}
// console.log(result.next(3)); // {value: 3, done: true}
// console.log(result.next(4)); //{value: undefined, done: true}

// function* foo(x) {
//   console.log("start");
//   yield x + 1;
//   console.log("state 1");
//   yield x + 2;
//   console.log("end");
// }
// const result = foo(0); // foo {<suspended>}
// for (let i of result) {
//   console.log(i);
// }
// console.log(result.next());

// function* foo(x) {
//   let a = yield x + 0;
//   let b = yield a + 2;
//   yield x;
//   yield a;
//   yield b;
// }
// const result = foo(0);
// console.log(result.next()); //  {value: 0, done: false}
// console.log(result.next(2)); // {value: 4, done: false}
// console.log(result.next(3)); // {value: 0, done: false}
// console.log(result.next(4)); // {value: 2, done: false}
// console.log(result.next(5)); // {value: 3, done: false}

// function* foo1() {
//   yield 1;
//   yield 2;
//   return "foo1 end";
// }

// function* foo2() {
//   yield 3;
//   yield 4;
// }

// function* foo() {
//   yield* foo1();
//   yield* foo2();
//   yield 5;
// }

// const result = foo();
// console.log(result);

// console.log(result.next()); // "{ value: 1, done: false }"
// console.log(result.next()); // "{ value: 2, done: false }"
// console.log(result.next()); // "{ value: 3, done: false }"
// console.log(result.next()); // "{ value: 4, done: false }"
// console.log(result.next()); // "{ value: 5, done: false }"
// console.log(result.next()); // "{ value: undefined, done: true }"

// 定义了一个 promise，用来模拟异步请求，作用是传入参数++
function getNum(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 1000);
  });
}

//自动执行器，如果一个 Generator 函数没有执行完，则递归调用
function asyncFun(func) {
  var gen = func();

  function next(data) {
    console.log("🚀 ~ data", data);
    var result = gen.next(data);
    if (result.done) return result.value;
    result.value.then(function (data) {
      console.log("🚀  147 ~ data", data);
      next(data);
    });
  }

  next();
}

// 所需要执行的 Generator 函数，内部的数据在执行完成一步的 promise 之后，再调用下一步
var func = function* () {
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  console.log(f2);
};
asyncFun(func);
