/* eslint-disable no-undef */
import { padZero, MoneyFormat } from '../../src/utils/format/index';

test('string', () => {
  expect(padZero(123, 5)).toEqual('00123');

  expect(padZero(123, 2)).toEqual('123');

  expect(padZero(3, 2)).toEqual('03');
});

test('money', () => {
  expect(MoneyFormat('12321321')).toEqual('12,321,321.00');
  expect(MoneyFormat('1321.123')).toEqual('1,321.12');
  expect(MoneyFormat('1321.125')).toEqual('1,321.13');
  expect(MoneyFormat('12321321.1')).toEqual('12,321,321.10');
  expect(MoneyFormat('12321321.1', 4)).toEqual('12,321,321.1000');
});
