import request from '../utils/request/index';

export const login = (params = {}) => request({
  http: '/login',
  operationType: 'login',
}, params);

export const logout = (params = {}) => request({
  http: '/login',
  operationType: 'login',
}, params);
