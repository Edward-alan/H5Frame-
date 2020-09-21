/* eslint-disable no-undef */
import {
  formatDate, parseDate, getDayCountOfMonth, getDayCountOfYear, getWeekNumber, getMonthDays,
} from '../../src/utils/date/index';

expect(getDayCountOfMonth(new Date(1596526488000))).toEqual(31);

// Date -> String
test('formatDate', () => {
  expect(formatDate(new Date(1596526488000))).toEqual('2020-08-04');
  expect(formatDate(new Date(1596526488000), 'yyyy-MM-dd hh:mm:ss')).toEqual('2020-08-04 03:34:48');
  expect(formatDate(new Date(1596526488000), 'yyyy-MM-dd HH:mm:ss')).toEqual('2020-08-04 15:34:48');
  expect(formatDate(new Date(1596526488000), 'yyyyMMddHHmm')).toEqual('202008041534');
});

//  String -> Date
test('parseDate', () => {
  expect(parseDate('2020-08-04 00:00:00', 'yyyy-MM-dd hh:mm:ss')).toEqual(new Date(1596470400000));
  expect(parseDate('2020-08-04', 'yyyy-MM-dd')).toEqual(new Date(1596470400000));
  expect(parseDate('2020-08-04 15:34:48', 'yyyy-MM-dd HH:mm:ss')).toEqual(new Date(1596526488000));
  expect(parseDate('2020-08-04 16:43:59', 'yyyy-MM-dd HH:mm:ss')).toEqual(new Date(1596530639000));
  expect(parseDate('2020-08-04 17:17:26', 'yyyy-MM-dd HH:mm:ss')).toEqual(new Date(1596532646000));
});

test('getDayCountOfMonth', () => {
  expect(getDayCountOfMonth(new Date(1596526488000))).toEqual(31);
});

test('getDayCountOfYear', () => {
  expect(getDayCountOfYear(new Date(1596526488000))).toEqual(366);
});

test('getWeekNumber', () => {
  expect(getWeekNumber(new Date())).toEqual(32);
});

test('getMonthDays', () => {
  expect(getMonthDays(new Date())).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
});
