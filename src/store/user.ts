// initial state
import { StoreOptions } from "vuex";

export default {
  namespace: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
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
