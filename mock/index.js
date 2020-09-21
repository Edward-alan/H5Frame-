const Mock = require('mockjs');

const user = require('./modules/user');

const mocks = [
  ...user,
];

function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    // eslint-disable-next-line prefer-rest-params
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: url,
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  mocks.forEach((item) => {
    Mock.mock(new RegExp(item.url), item.type || 'post', XHR2ExpressReqWrap(item.response));
  });
}

module.exports = {
  mocks,
  mockXHR,
};
