/* eslint-disable import/prefer-default-export */

// 补0  1=>'01'
export function padZero(num, targetLength = 2) {
  let str = `${num}`;

  while (str.length < targetLength) {
    str = `0${str}`;
  }

  return str;
}
