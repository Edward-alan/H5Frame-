/* eslint-disable import/prefer-default-export */
/**
 *
 * @param {*} number 要格式化的数字
 * @param {*} decimals 保留几位小数
 * @param {*} decPoint 小数点符号
 * @param {*} thousandsSep 千分位符号
 */
export function MoneyFormat(number, decimals = 2, decPoint = '.', thousandsSep = ',') {
  const $number = (`${number}`).replace(/[^0-9+-Ee.]/g, '');
  const num = !Number.isFinite(+$number) ? 0 : +$number;
  const prec = !Number.isFinite(+decimals) ? 2 : Math.abs(decimals); // 保留小数

  let s = '';

  const toFixedFix = function ($n, $prec) {
    const k = 10 ** $prec;
    return `${Math.round($n * k) / k}`;
  };

  s = (prec ? toFixedFix(num, prec) : `${Math.round(num)}`).split('.');
  const re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${thousandsSep}$2`);
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(decPoint);
}
