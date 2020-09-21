import { Toast } from 'vant';

export default function request(urlObj, params) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  // 请求前获取APP数据
  return new Promise((resolve, reject) => {
    console.log('operationType', urlObj.operationType);

    try {
      window.AlipayJSBridge.call(
        'rpc',
        {
          operationType: urlObj.operationType,
          requestData: [{
            _requestBody: {
              ...params,
            },
          }],
          headers: {},
        },
        (result) => {
          Toast.clear();
          console.log(urlObj.operationType);
          console.log('reault', result);
          const { code, msg } = result;

          if (String(code) === '200') { // TODO 成功
            resolve(result);
          } else if (String(code) === '403' || String(code) === '4031') { // TODO 登陆异常
            reject(Error(msg));
          } else { // TODO 其他异常
            reject(Error(msg));
          }
        },
      );
    } catch (e) {
      Toast.clear();
      reject(Error(`rpc请求异常${e}`));
    }
  });
}
