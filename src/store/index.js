import { createStore } from "vuex";
import axios from "axios";
//import Cookies from "js-cookie";
export default createStore({
  state: {
    user: "visiteur",
    admin: null,
    productsCategories: [],
    prod: null,
    userData: null,
  },
  getters: {
    productsCategories: (state) => {
      return state.productsCategories;
    },
    userData: (state) => {
      return state.userData;
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
    setCommande(state, newCommande) {
      state.prod = newCommande;
    },
    setUserData(state, data) {
      state.userData = data;
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
    loadUserData({ commit }) {
      if (!this.state.userData) {
        axios.get("user/me").then((res) => {
          commit("setUserData", res.data);
        });
      }
    },
  },
  modules: {},
});
