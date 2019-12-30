function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
}
function _isNumber(n) {
  return typeof n === 'number' && isFinite(n);
}
function __isNumber(n) {
  return n === +n;
}
function isString(o) {
  return o === o + '';
}
function isBoolean(b) {
  return b === !!b;
}
export default {
  isNumber,
  _isNumber,
  __isNumber,
  isString,
  isBoolean
};
