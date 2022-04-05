import { createStore } from "vuex";
//import Cookies from "js-cookie";
export default createStore({
  state: {
    user: "visiteur",
    admin: null,
  },
  getters: {},
  mutations: {
    newUser(state, newStatus) {
      state.user = newStatus;
    },
    isAdmin(state, newStatus) {
      state.admin = newStatus;
    },
  },
  actions: {},
  modules: {},
});
