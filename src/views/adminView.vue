<template>
  <div>
    <form-new-user v-if="view === 'nouveau-membre'" />
    <espace-admin v-if="view === 'accueil'" />
    <form-new-product v-if="view === 'new-product'" />
    <all-users-tools v-if="view === 'tous-les-praticiens'" />
    <all-products v-if="view === 'tous-les-produits'" :user="user" />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import allProducts from "../components/admin/allProducts.vue";
import allUsersTools from "../components/admin/allUsersTools.vue";
import formNewProduct from "../components/admin/formNewProduct.vue";
import formNewUser from "../components/admin/formNewUser.vue";
import espaceAdmin from "../components/admin/espaceAdmin.vue";
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
