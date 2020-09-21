/* eslint-disable no-undef */

import {
  isDate, isEmail, isMobile, isNumeric, isNaN,
} from '../../src/utils/validate/index';

test('date', () => {
  expect(isDate(new Date())).toEqual(true);
});

test('email', () => {
  expect(isEmail('zhoolj@163.com')).toEqual(true);
  expect(isEmail('13232@.com')).toEqual(false);
});

test('mobile', () => {
  expect(isMobile('13850396673')).toEqual(true);
  expect(isMobile('1385039667')).toEqual(false);
  expect(isMobile('13900000012')).toEqual(true);
  expect(isMobile('11111111111')).toEqual(true);
  expect(isMobile('zhoolj@163.com')).toEqual(false);
});

test('number', () => {
  expect(isNumeric('23')).toEqual(true);
  expect(isNumeric(NaN)).toEqual(false);
  expect(isNumeric(111)).toEqual(true);
  expect(isNaN(NaN)).toEqual(true);
  expect(isNaN(0)).toEqual(false);
});
