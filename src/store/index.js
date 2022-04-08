import { createStore } from "vuex";
import axios from "axios";
//import Cookies from "js-cookie";
export default createStore({
  state: {
    user: "visiteur",
    admin: null,
    productsCategories: [],
  },
  getters: {
    productsCategories: (state) => {
      return state.productsCategories;
    },
  },
  mutations: {
    newUser(state, newStatus) {
      state.user = newStatus;
    },
    isAdmin(state, newStatus) {
      state.admin = newStatus;
    },
    setCategory(state, laodCat) {
      state.productsCategories = laodCat;
    },
  },
  actions: {
    loadCategory({ commit }) {
      if (this.state.productsCategories.length === 0) {
        axios.get("products/category").then((res) => {
          commit("setCategory", res.data);
        });
      }
    },
  },
  modules: {},
});
