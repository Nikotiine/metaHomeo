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
    totalPraticien: null,
  },
  getters: {
    productsCategories: (state) => {
      return state.productsCategories;
    },
    userData: (state) => {
      return state.userData;
    },
    totalPraticien: (state) => {
      return state.totalPraticien;
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
    setTotalPraticien(state, total) {
      state.totalPraticien = total;
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
    loadTotalPraticien({ commit }) {
      if (!this.state.totalPraticien) {
        console.log("store");
        axios.get("public/count").then((res) => {
          commit("setTotalPraticien", res.data.count);
        });
      }
    },
  },
  modules: {},
});
