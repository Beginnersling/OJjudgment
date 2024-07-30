// initial state
import { StoreOptions } from "vuex";

export default {
  namespace: true,
  //todo 未能正确
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "admin",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      //远程登陆
      commit("updateUser", { userName: "凌动之心" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
