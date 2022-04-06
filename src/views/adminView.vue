<template>
  <div>
    <form-new-user v-if="view === 'nouveau-membre'" />
    <espace-admin v-if="view === 'accueil'" />
    <form-new-product v-if="view === 'new-product'" />
    <all-users-tools v-if="view === 'tous-les-praticiens'" />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import allUsersTools from "../components/admin/allUsersTools.vue";
import formNewProduct from "../components/admin/formNewProduct.vue";
import formNewUser from "../components/admin/formNewUser.vue";
import espaceAdmin from "../components/admin/espaceAdmin.vue";
export default {
  name: "adminView",
  props: ["view"],
  components: { formNewUser, espaceAdmin, formNewProduct, allUsersTools },
  created() {
    const admin = Cookies.get("isAdmin");
    const user = Cookies.get("userName");
    this.$store.commit("newUser", user);
    this.$store.commit("isAdmin", admin);
  },
};
</script>

<style lang="scss" scoped></style>
