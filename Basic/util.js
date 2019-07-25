var _toString = Object.prototype.toString;

function isUndef(v) {
  return v === undefined || v === null;
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function isArray() {}
