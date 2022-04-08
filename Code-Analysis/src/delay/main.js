// console.log("34erw");
// var el = document.getElementById("app");
// el.innerHTML = "我要改变你!";

// const delay1 = (ms, { value, willResolve } = {}) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (willResolve) {
//         resolve(value);
//       } else {
//         reject();
//       }
//     }, ms);
//   });
// };

// (async () => {
//   // 传递 value 参数作为结果
//   // willResolve 参数决定成功还是失败
//   try {
//     const result = await delay1(1000, {
//       value: "今天心情不错",
//       willResolve: false
//     });
//     console.log("输出这句", result); // 输出这句 今天心情不错
//   } catch (error) {
//     console.log("失败", error);
//   }
// })();

// 获取给定时间范围内随机数
const randomInteger = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1) + minimum);

const createAbortError = () => {
  const error = new Error("Delay aborted");
  error.name = "AbortError";
  return error;
};

const createDelay =
  ({ clearTimeout: defaultClear, setTimeout: set, willResolve }) =>
  (ms, { value, signal } = {}) => {
    console.log("🚀 ~ file: main.js ~ line 44 ~ signal", signal);
    if (signal && signal.aborted) {
      return Promise.reject(createAbortError());
    }
    let timeoutId;
    let settle;
    let rejectFn;
    const clear = defaultClear || clearTimeout;
    const signalListener = () => {
      clear(timeoutId);
      rejectFn(createAbortError());
    };
    const cleanup = () => {
      if (signal) {
        signal.removeEventListener("abort", signalListener);
      }
    };
    const delayPromise = new Promise((relove, reject) => {
      settle = () => {
        cleanup();
        if (willResolve) {
          relove(value);
        } else {
          reject(value);
        }
      };
      rejectFn = reject;
      timeoutId = (set || setTimeout)(settle, ms);
    });
    if (signal) {
      signal.addEventListener("abort", signalListener, { once: true });
    }

    delayPromise.clear = () => {
      clear(timeoutId);
      timeoutId = null;
      settle();
    };
    return delayPromise;
  };

const createWithTimers = (clearAndSet) => {
  const delay = createDelay({ ...clearAndSet, willResolve: true });
  console.log("🚀 ~ file: main.js ~ line 87 ~ createWithTimers ~ delay", delay);
  delay.reject = createDelay({ ...clearAndSet, willResolve: false });
  delay.range = (minimum, maximum, options) =>
    delay(randomInteger(minimum, maximum), options);
  return delay;
};
const delay1 = createWithTimers();

(async () => {
  // 实现一定时间范围内随机时间获取结果
  try {
    const result = await delay1.reject(1000, {
      value: "我是若川",
      willResolve: false
    });
    console.log("永远不会输出这句");
  } catch (err) {
    console.log("输出结果", err);
  }
  const result2 = await delay1.range(10, 20000, { value: "我是若川，range" });
  console.log("输出结果", result2);
  // 实现提前清除
  // const delayedPromise = delay1(1000, { value: "我是若川" });
  // setTimeout(() => {
  //   delayedPromise.clear(); // 提前清除
  // }, 300);
  // 300 milliseconds later
  // console.log(await delayedPromise);
  //=> '我是若川'
  // 实现取消功能
  // const abortController = new AbortController();
  // setTimeout(() => {
  //   abortController.abort();
  // }, 500);
  // try {
  //   await delay1(1000, { signal: abortController.signal });
  // } catch (error) {
  //   // 500 milliseconds later
  //   console.log(error.name);
  //   //=> 'AbortError'
  // }
})();
