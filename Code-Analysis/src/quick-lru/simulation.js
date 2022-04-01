// 力扣 LRU 缓存：https://leetcode-cn.com/problems/lru-cache/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxSize = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // const val = this.cache.get(key);
  // if (val != null && val != undefined) {
  //   this.cache.delete(key);
  //   this.cache.set(key, val);
  //   return val;
  // } else {
  //   return -1;
  // }

  if (this.cache.has(key)) {
    let value = this.cache.get(key);
    this.cache.delete(key); // 删除后，再 set ，相当于更新到 cache 最后一位
    this.cache.set(key, value);
    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // const val = this.cache.get(key);
  // if (val != null && val != undefined) {
  //   this.cache.delete(key);
  //   this.cache.set(key, value);
  // } else {
  //   this.cache.set(key, value);
  //   if (this.cache.size > this.maxSize) {
  //     const arr = [...this.cache.keys()];
  //     for (let i = 0; i < arr.length - this.maxSize; i++) {
  //       this.cache.delete(arr[i]);
  //     }
  //   }
  // }

  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  if (this.cache.size > this.maxSize) {
    // keys() 返回 iterator，通过.next().value 获取值
    this.cache.delete(this.cache.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;
