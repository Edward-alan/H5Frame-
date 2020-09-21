/**
 * 是否为安卓系统
 */
export function isAndroid() {
  return /android/.test(navigator.userAgent.toLowerCase());
}

/**
 * 是否为ios系统
 */
export function isIOS() {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
