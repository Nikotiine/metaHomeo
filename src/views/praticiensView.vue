<template>
  <auth-praticiens v-if="view === 'loggin'" />
  <espace-perso v-if="view === 'espace-perso'" />
  <product-list v-if="view === 'catalague-produit'" />
  <historique-commandes v-if="view === 'historique-commandes'" />
  <edit-profil v-if="view === 'edition-profil'" />

  <div></div>
</template>

<script>
//import Cookies from "js-cookie";

import editProfil from "../components/praticiens/editProfil.vue";
import productList from "../components/praticiens/productList.vue";
import historiqueCommandes from "../components/praticiens/historiqueCommandes.vue";
import authPraticiens from "../components/praticiens/authPraticiens.vue";
import espacePerso from "../components/praticiens/espacePerso.vue";
export default {
  name: "praticiensView",
  components: {
    authPraticiens,
    espacePerso,
    productList,
    historiqueCommandes,
    editProfil,
  },
  props: ["view"],
  // created() {
  //   const admin = Cookies.get("isAdmin");
  //   const user = Cookies.get("userName");
  //   this.$store.commit("newUser", user);
  //   this.$store.commit("isAdmin", admin);
  // },
};
</script>

<style lang="scss" scoped></style>
