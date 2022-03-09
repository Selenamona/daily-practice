import observe from "./observe";
console.log(111233);
let obj = {
  a: {
    m: {
      n: {
        e: {
          f: 5
        }
      }
    }
  },
  b: 3,
  g: [1, 2, 3]
};
observe(obj);
obj.g.splice(2, 1, 88);
console.log(obj.g);
