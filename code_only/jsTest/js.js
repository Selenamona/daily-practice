// import { log } from "util";

// 	// 数组操作
// 	// <!-- 截取和清空数组 -->

// 	var arr = [12, 222, 44, 88];
// 	// arr.length = 2;
// 	// console.log(arr)  //截取，arr = [12, 222];
//     // arr.length = 0;
//     // console.log(arr)  //清空，arr will be equal to [].
//     arr[arr.length] = 6;   //插
//     // console.log(arr)

//     // 获取数组的最大最小值
//     var numbers = [5, 45822, 120, -215];
//     var maxInNumbers = Math.max.apply(Math, numbers);   //45822
//     var minInNumbers = Math.min.apply(Math, numbers);   //-215
//     Math.max(...[14, 3, 77])
//     Math.min(...[14, 3, 77])
//     // console.log(maxInNumbers,minInNumbers)

//     // 数组去重
//     var arr =[1,2,3,"s","a",3,"a"];
//     var newArr1 = [...new Set(arr)];
//     var newArr2 = Array.from(new Set(arr));
//     // console.log(newArr1)
//     // var arr = [1,2,3,2,1,3,{"a":1,"b":2},{"a":2},{"a":2}];
//     // var unique = function(arr) {   //对象键值对法
//     //     var result = [], json = {};
//     //     for (var i = 0, len = arr.length; i < len; i++){
//     //         console.log(arr[i])
//     //         if (!json[arr[i]]) {
//     //             json[arr[i]] = 1;
//     //             result.push(arr[i]);  //返回没被删除的元素
//     //         }
//     //     }
//     //     return result;
//     // };
//     // console.log(unique(arr))

//     // 浮点数计算问题
//     0.1 + 0.2 == 0.3   //false
//     // console.log((0.1+0.2).toFixed(1))      //toPrecision()

//     var arr = [1, 5, 6, 3];    //数字数组
//     arr.sort(function(a, b) {
//         // return a - b;   //从小到大排
//         // return b - a;   //从大到小排
//         return Math.random() - 0.5;   //数组洗牌
//     });
//     // console.log(arr)
//     var arr = [{   //对象数组
//         num: 1,
//         text: 'num1'
//         }, {
//         num: 5,
//         text: 'num2'
//         }, {
//         num: 6,
//         text: 'num3'
//         }, {
//         num: 3,
//         text: 'num4'
//     }];
//     arr.sort(function(a, b) {
//         // return a.num - b.num;   //从小到大排
//         return b.num - a.num;   //从大到小排
//     });
//     // console.log(arr)

//     // console.log(([][[]]+[])[+!![]]+([]+{})[!+[]+!![]])    //]

//     //Q&&A    下面的代码会在 console 输出神马？

//     (function(){
//     var a = b = 3;
//     })();

//     // console.log("a defined? " + (typeof a !== 'undefined'));
//     // console.log("b defined? " + (typeof b !== 'undefined'));

//     var foo = { n: 1 };
//     var bar = foo;
//     foo.x = foo = { n: 2 };
//     // console.log(bar);

//     var a={},
//     b={key:'b'},
//     c={key:'c'};
//     a[b]=123;
//     a[c]=456;
//     // console.log(a[b]);

//     function fun(n,o) {
//         // console.log(o)
//         return {
//             fun:function(m){
//                 return fun(m,n);
//             }
//         };
//     }
//     var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
//     var b = fun(0).fun(1).fun(2).fun(3);
//     var c = fun(0).fun(1); c.fun(2); c.fun(3);

//     // var val = 0;
//     // console.log(window)
//     // Object.defineProperty(window,'a',{
//     //     get: function() {
//     //         return ++val;
//     //     }
//     // });
//     // if (a == 1 && a == 2 && a == 3) {
//     //     console.log('yay');
//     // }

//     // var aﾠ = 1;
//     // var a = 2;
//     // var ﾠa = 3;
//     // if(aﾠ==1 && a== 2 &&ﾠa==3) {
//     //     console.log("Why hello there!")
//     // }

//     // const a = {
//     //     i: 1,
//     //     toString: function () {
//     //         return a.i++;
//     //     }
//     // }
//     // if(a == 1 && a == 2 && a == 3) {
//     //     console.log('Hello World!');
//     // }

// // 写一个函数，接收一个数字，输出这个数字里面所有相邻数相加等于这个数字的，例如
// // 15=1+2+3+4+5
// // 15=4+5+6
// // 15=8+7
// // 有时间大家开动一下脑筋

// // 16 = 7+9
// // 16 =

//     // function fn(n){

//     // }

//     // fn(15)

// // ----------------------
// // function doSth(){
// //     console.log(this);
// // }

// // let btn = document.getElementById("test");

// // btn.onclick = doSth;

// // btn.onclick = function(){
// //     doSth();
// // }

// // doSth();

// // -------------------------test

// [1,2,3,4].reduce(function(a,b,c,d){
//     console.log(a,b,c,d);
//     return a+b;
// })

// -----------算法测试 start-----------------
// excel 列对应的字母： 例如1-A 26-Z 702-ZZ
// var convertToTitle = function(n) {
//     var arr = [];
//     var res = "";
//     let letters = "ZABCDEFGHIJKLMNOPQRSTUVWXY"
//     while(n>0){
//         arr.push(n%26);
//         if(n==26){
//             n = 0;
//         } else {
//             n = Math.floor(n/26);
//         }
//     }
//     console.log(arr);
//     while(arr.length){
//         res += letters[arr.pop()];
//     }
//     console.log(res);
// };

// // convertToTitle(52);
// function aaa(column){
//     let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     // var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//     if(column <= 26) {
//         return arr[column-1]
//     } else {
//         column = column % 26 === 0 ? column - 26 : column; // 都是双组合，需要减去26
//         let idx = column % 26 === 0 ? 25 : (column % 26  - 1);
//         return aaa(Math.floor(column / 26)) + arr[idx];
//     }
// }
// console.log(aaa(703));

// var convertToTitle = function(n) {
//     var arr = [];
//     var res = "";
//     let letters = "ZABCDEFGHIJKLMNOPQRSTUVWXY"
//     let letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     while (n>0) {
//         if(n<26){
//             arr.push(letters[n%26]);
//             n = 0;
//         }else{
//             arr.push(letters[(n-1)%26]);
//             n = Math.floor((n)/26);
//         }
//     }
//     console.log(arr);
//     arr.reverse();
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     console.log(res);
// };
// convertToTitle(53);

var lengthOfLongestSubstring = function (s) {
  var startIndex = 0;
  var maxLength = 1;
  var maxLengthLs = 1;
  var str = "";
  for (var i = 1; i < s.length; i++) {
    var ls = true;
    for (let j = 0; j < str.length; j++) {
      if (s[i] == str[j]) {
        ls = false;
      }
    }
    if (!ls) {
      console.log(1 + "eeee");
      maxLengthLs = i - 1 - startIndex;
      startIndex = i;
    } else {
      console.log(2 + "eeee");
      str = s.substr(startIndex, i + 1);
      maxLengthLs = i - startIndex;
    }
    if (maxLengthLs > maxLength) {
      maxLength = maxLengthLs;
    }
  }
  console.log(maxLength);
};
// lengthOfLongestSubstring("abcabcbb");

// // -----------算法测试 end-----------------

// try{
//   a(
// } catch (e) {
//   console.log('error', e)
// }
// // output
// // Uncaught SyntaxError: Unexpected token }

// function d() {
//   a.b;
// }
// try {
//   d();
// } catch (e) {
//   console.log("error", e);
// }
// output
// error ReferenceError: a is not defined

try {
  function d() {
    a.b;
  }
} catch (e) {
  console.log("error", e);
}
d();
// output
// error ReferenceError: a is not defined
