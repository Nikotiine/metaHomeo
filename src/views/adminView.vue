<template>
  <div>
    <form-new-user v-if="view === 'nouveau-membre'" />
    <espace-admin v-if="view === 'accueil'" />
    <form-new-product v-if="view === 'new-product'" />
    <all-users-tools v-if="view === 'tous-les-praticiens'" />
    <all-products v-if="view === 'tous-les-produits'" :user="user" />
    <all-orders v-if="view === 'toutes-les-commandes'" />
    <news-letter v-if="view === 'news-letter'" />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import allOrders from "../components/admin/allOrders.vue";
import allProducts from "../components/admin/allProducts.vue";
import allUsersTools from "../components/admin/allUsersTools.vue";
import formNewProduct from "../components/admin/formNewProduct.vue";
import formNewUser from "../components/admin/formNewUser.vue";
import espaceAdmin from "../components/admin/espaceAdmin.vue";
import newsLetter from "../components/admin/newsletter.vue";
export default {
  name: "adminView",
  props: ["view"],
  data() {
    return {
      user: "admin",
    };
  },
  components: {
    formNewUser,
    espaceAdmin,
    formNewProduct,
    allUsersTools,
    allProducts,
    allOrders,
    newsLetter,
  },
  created() {
    const admin = Cookies.get("isAdmin");
    const user = Cookies.get("userName");
    this.$store.commit("newUser", user);
    this.$store.commit("isAdmin", admin);
  },
};
</script>

<style lang="scss" scoped></style>
