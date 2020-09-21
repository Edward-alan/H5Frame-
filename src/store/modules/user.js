import { login, logout } from '../../api/user';

export default {
  namespaced: true,
  state: {
    userInfo: {},
  },
  mutations: {
    SET_USERINFO(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    // 登陆
    login({ commit }, param) {
      return login({
        username: param.username,
        password: param.password,
      }).then(
        (res) => {
          console.log(res);
          commit('SET_USERINFO', res.data);
          return res;
        },
        (err) => Promise.reject(err),
      );
    },
    // 登出
    logout({ commit }, param) {
      return logout({
        username: param.username,
      }).then(
        (res) => {
          console.log(res);
          commit('SET_USERINFO', {});
          return res;
        },
        (err) => Promise.reject(err),
      );
    },
  },
};
