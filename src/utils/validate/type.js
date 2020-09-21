/* eslint-disable import/prefer-default-export */

/**
 * 是否为NaN
 * @param {any} val
 */
export function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }

  // eslint-disable-next-line no-self-compare
  return val !== val;
}

/**
 * 是否定义
 * @param {} val
 */
export function isDef(val) {
  return val !== undefined && val !== null;
}

/**
 * 是否为function
 * @param {} val
 */
export function isFunction(val) {
  return typeof val === 'function';
}

/**
 * 是否为Object
 * @param {} val
 */
export function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * 是否为Promise
 * @param {} val
 */
export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * 是否为Date
 * @param {any} val
 */
export function isDate(val) {
  return (
    Object.prototype.toString.call(val) === '[object Date]'
    && !isNaN(val.getTime())
  );
}

/**
 * 是否字符串
 * @param {*} str
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true;
  }
  return false;
}

/**
 * 是否为数组
 * @param {*} arg
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}

/**
 * 是否为dom对象
 * @param {} node
 */
export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}
