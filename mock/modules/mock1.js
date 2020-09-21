const data = {};

module.exports = [
// user login
  {
    url: '/url',
    type: 'post',
    response: () => ({
      code: '200',
      data,
      message: '操作成功',
    }),
  },
];
