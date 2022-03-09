export const def = function (obj, key, value, emurable) {
  Object.defineProperty(obj, key, {
    value,
    emurable,
    writable: true,
    configurable: true
  });
};
