import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 100000, // 请求超时时间
  headers: {
    'content-type': 'application/json',
  },
  crossDomain: true,
  responseType: 'json',
  withCredentials: true,
});

// request拦截器
service.interceptors.request.use(
  (config) => config,
  (error) => {
    console.log(error); // for debug
    Promise.reject(error);
  },
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const result = response.data;
    const { code, msg } = result;

    if (String(code) === '0') {
      return Promise.resolve(result);
    }
    if (String(code) === '200') { // TODO 成功
      return Promise.resolve(result);
    } if (String(code) === '403' || String(code) === '4031') { // TODO 登陆异常
      return Promise.reject(Error(msg));
    } // TODO 其他异常

    return Promise.reject(result);
  },
);

function request(urlObj, params, method) {
  return new Promise(
    (resolve, reject) => {
      service({
        method: method || 'post',
        url: urlObj.http,
        data: params,
      })
        .then((res) => resolve(res))
        .catch((erro) => reject(erro));
    },
  );
}
export default request;
