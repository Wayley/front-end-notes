var _toString = Object.prototype.toString;

export function isUndef(v) {
  return v === undefined || v === null;
}
export function isDef(v) {
  return v !== undefined && v !== null;
}
export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
export function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
export function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  );
}
export function isPromise(val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  );
}
export function toString(val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
    ? JSON.stringify(val, null, 2)
    : String(val);
}
export function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
