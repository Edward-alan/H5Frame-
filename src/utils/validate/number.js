/* eslint-disable import/prefer-default-export */
/**
 * 是否为数字格式
 * @param {String，Number} val
 */
export function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
