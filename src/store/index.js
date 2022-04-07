import { createStore } from "vuex";
//import Cookies from "js-cookie";
export default createStore({
  state: {
    user: "visiteur",
    admin: null,
    productsCategories: [
      { id: 0, name: "hormones" },
      { id: 1, name: "virus et bactéries " },
      { id: 2, name: "environnement" },
      { id: 3, name: "complexes de remèdes" },
      { id: 4, name: "allopathie" },
      { id: 5, name: "organothérapie" },
    ],
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
