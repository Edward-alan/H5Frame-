const users = {
  name: 'imjianjian',
  id: '10086',
};

module.exports = [
  // user login
  {
    url: '/login',
    type: 'post',
    response: () => ({
      code: '200',
      data: users,
      message: '操作成功',
    }),
  },
  // user logout
  {
    url: '/logout',
    type: 'post',
    response: () => ({
      code: '200',
      data: {},
      message: '操作成功',
    }),
  },
];
