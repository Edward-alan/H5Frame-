/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-spread */
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */

// https://github.com/ElemeFE/element/blob/dev/src/utils/date.js

import fecha from './fecha';
import { isNaN } from '../validate/index';

const weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const newArray = function (start, end) {
  const result = [];
  for (let i = start; i <= end; i += 1) {
    result.push(i);
  }
  return result;
};

const getI18nSettings = () => ({
  dayNamesShort: weeks,
  dayNames: weeks,
  monthNamesShort: weeks,
  monthNames: months,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  },
});

export const range = function (n) {
  return Array.apply(null, { length: n }).map((_, n) => n);
};

const isDate = function (date) {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
  return true;
};

export const toDate = function (date) {
  return isDate(date) ? new Date(date) : null;
};

export const isDateObject = function (val) {
  return val instanceof Date;
};

export const formatDate = function (date, format, i18n) {
  date = toDate(date);
  if (!date) return '';
  return fecha.format(date, format || 'yyyy-MM-dd', i18n || getI18nSettings());
};

export const parseDate = function (string, format, i18n) {
  return fecha.parse(string, format || 'yyyy-MM-dd', i18n || getI18nSettings());
};

export const getDayCountOfMonth = function (year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    }
    return 28;
  }

  return 31;
};

export const getDayCountOfYear = function (year) {
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  return isLeapYear ? 366 : 365;
};

export const getFirstDayOfMonth = function (date) {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};

export const prevDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

export const nextDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

export const getStartDateOfMonth = function (year, month) {
  const result = new Date(year, month, 1);
  const day = result.getDay();

  if (day === 0) {
    return prevDate(result, 7);
  }
  return prevDate(result, day);
};

// 当前时间是第几周
export const getWeekNumber = function (src) {
  if (!isDate(src)) return null;
  const date = new Date(src.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  const week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

export const getRangeHours = function (ranges) {
  const hours = [];
  let disabledHours = [];

  (ranges || []).forEach((range) => {
    const value = range.map((date) => date.getHours());

    disabledHours = disabledHours.concat(newArray(value[0], value[1]));
  });

  if (disabledHours.length) {
    for (let i = 0; i < 24; i += 1) {
      hours[i] = disabledHours.indexOf(i) === -1;
    }
  } else {
    for (let i = 0; i < 24; i += 1) {
      hours[i] = false;
    }
  }

  return hours;
};

export const getPrevMonthLastDays = (date, amount) => {
  if (amount <= 0) return [];
  const temp = new Date(date.getTime());
  temp.setDate(0);
  const lastDay = temp.getDate();
  return range(amount).map((_, index) => lastDay - (amount - index - 1));
};

export const getMonthDays = (date) => {
  const temp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const days = temp.getDate();
  return range(days).map((_, index) => index + 1);
};

function setRangeData(arr, start, end, value) {
  for (let i = start; i < end; i += 1) {
    arr[i] = value;
  }
}

export const getRangeMinutes = function (ranges, hour) {
  const minutes = new Array(60);

  if (ranges.length > 0) {
    ranges.forEach((range) => {
      const start = range[0];
      const end = range[1];
      const startHour = start.getHours();
      const startMinute = start.getMinutes();
      const endHour = end.getHours();
      const endMinute = end.getMinutes();
      if (startHour === hour && endHour !== hour) {
        setRangeData(minutes, startMinute, 60, true);
      } else if (startHour === hour && endHour === hour) {
        setRangeData(minutes, startMinute, endMinute + 1, true);
      } else if (startHour !== hour && endHour === hour) {
        setRangeData(minutes, 0, endMinute + 1, true);
      } else if (startHour < hour && endHour > hour) {
        setRangeData(minutes, 0, 60, true);
      }
    });
  } else {
    setRangeData(minutes, 0, 60, true);
  }
  return minutes;
};

export const modifyDate = function (date, y, m, d) {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

export const modifyTime = function (date, h, m, s) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
};

export const modifyWithTimeString = (date, time) => {
  if (date == null || !time) {
    return date;
  }
  time = parseDate(time, 'HH:mm:ss');
  return modifyTime(date, time.getHours(), time.getMinutes(), time.getSeconds());
};

export const clearTime = function (date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const clearMilliseconds = function (date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
};

export const limitTimeRange = function (date, ranges, format = 'HH:mm:ss') {
  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date;
  const normalizeDate = (date) => fecha.parse(fecha.format(date, format), format);
  const ndate = normalizeDate(date);
  const nranges = ranges.map((range) => range.map(normalizeDate));
  if (nranges.some((nrange) => ndate >= nrange[0] && ndate <= nrange[1])) return date;

  let minDate = nranges[0][0];
  let maxDate = nranges[0][0];

  nranges.forEach((nrange) => {
    minDate = new Date(Math.min(nrange[0], minDate));
    maxDate = new Date(Math.max(nrange[1], minDate));
  });

  const ret = ndate < minDate ? minDate : maxDate;
  // preserve Year/Month/Date
  return modifyDate(
    ret,
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
};

export const timeWithinRange = function (date, selectableRange, format) {
  const limitedDate = limitTimeRange(date, selectableRange, format);
  return limitedDate.getTime() === date.getTime();
};

export const changeYearMonthAndClampDate = function (date, year, month) {
  // clamp date to the number of days in `year`, `month`
  // eg: (2010-1-31, 2010, 2) => 2010-2-28
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

export const prevMonth = function (date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 0
    ? changeYearMonthAndClampDate(date, year - 1, 11)
    : changeYearMonthAndClampDate(date, year, month - 1);
};

export const nextMonth = function (date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 11
    ? changeYearMonthAndClampDate(date, year + 1, 0)
    : changeYearMonthAndClampDate(date, year, month + 1);
};

export const prevYear = function (date, amount = 1) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year - amount, month);
};

export const nextYear = function (date, amount = 1) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year + amount, month);
};

export const extractDateFormat = function (format) {
  return format
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim();
};

export const extractTimeFormat = function (format) {
  return format
    .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '')
    .trim();
};

export const validateRangeInOneMonth = function (start, end) {
  return (start.getMonth() === end.getMonth()) && (start.getFullYear() === end.getFullYear());
};
