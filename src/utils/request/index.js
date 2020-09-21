import http from './http';
import rpc from './rpc';

// eslint-disable-next-line import/no-mutable-exports
let request;
if (process.env.VUE_APP_ENV === 'development') {
  request = http;
} else {
  request = rpc;
}

export default request;
