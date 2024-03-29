import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
export default createStore({
  state: {
    user: "visiteur",
    admin: null,
    productsCategories: [],
    totalCommande: null,
    panier: [],
    userData: null,
    totalPraticien: null,
    totalMembre: null,
    totalProduts: null,
    productsName: [],
    priceAndQuantity: null,
    allOrders: [],
    prodToEdit: null,
  },
  getters: {
    allOrders: (state) => {
      return state.allOrders;
    },
    productsCategories: (state) => {
      return state.productsCategories;
    },
    userData: (state) => {
      return state.userData;
    },
    totalPraticien: (state) => {
      return state.totalPraticien;
    },
    totalMembre: (state) => {
      return state.totalMembre;
    },
    totalProducts: (state) => {
      return state.totalProduts;
    },
    productsName: (state) => {
      return state.productsName;
    },
    priceAndQuantity: (state) => {
      return state.priceAndQuantity;
    },
  },
  mutations: {
    prodToEdit(state, prod) {
      state.prodToEdit = prod;
    },
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
      state.panier = newCommande;
    },
    setTotalCommande(state, total) {
      state.totalCommande = total;
    },
    setUserData(state, data) {
      state.userData = data;
    },
    setTotalPraticien(state, total) {
      state.totalPraticien = total;
    },
    setTotalMembre(state, total) {
      state.totalMembre = total;
    },
    setTotalProducts(state, total) {
      state.totalProduts = total;
    },
    getProductsName(state, names) {
      state.productsName = names;
    },
    setPriceAndQuantity(state, priceAndQuantity) {
      state.priceAndQuantity = priceAndQuantity;
    },
    getAllOrders(state, orders) {
      state.allOrders = orders;
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
    loadTotalProducts({ commit }) {
      if (!this.state.totalProduts) {
        axios
          .get("products/count")
          .then((res) => commit("setTotalProducts", res.data.count));
      }
    },
    loadUserData({ commit }) {
      axios.get("user/me").then((res) => {
        console.log(res.data);
        commit("setUserData", res.data);
        Cookies.set("userName", res.data.firstName);
      });
    },
    loadTotalPraticien({ commit }) {
      if (!this.state.totalPraticien) {
        console.log("store");
        axios.get("public/count").then((res) => {
          commit("setTotalPraticien", res.data.count);
        });
      }
    },
    loadTotalMembre({ commit }) {
      if (!this.state.totalMembre) {
        axios
          .get("user/count")
          .then((res) => commit("setTotalMembre", res.data.count));
      }
    },
    loadProductsName({ commit }) {
      if (this.state.productsName.length === 0) {
        axios.get("products/all").then((res) => {
          commit(
            "getProductsName",
            res.data.filter((x) => x.name)
          );
        });
      }
    },
    loadPriceAndQuantity({ commit }) {
      if (!this.state.priceAndQuantity) {
        axios.get("products/price").then((res) => {
          commit("setPriceAndQuantity", res.data);
        });
      }
    },
    findAllOrders({ commit }) {
      if (this.state.allOrders.length === 0) {
        axios.get("orders/all").then((res) => {
          commit("getAllOrders", res.data);
        });
      }
    },
  },
  modules: {},
});
