<template>
  <auth-praticiens v-if="view === 'loggin'" />
  <espace-perso v-if="view === 'espace-perso'" />
  <catalogueProducts v-if="view === 'catalague-produit'" />
  <historique-commandes v-if="view === 'historique-commandes'" />
  <edit-profil v-if="view === 'edition-profil'" />
  <commande-produits v-if="view === 'commande'" />

  <div></div>
</template>

<script>
import editProfil from "../components/praticiens/editProfil.vue";
import catalogueProducts from "../components/praticiens/catalogueProducts.vue";
import historiqueCommandes from "../components/praticiens/historiqueCommandes.vue";
import authPraticiens from "../components/praticiens/authPraticiens.vue";
import espacePerso from "../components/praticiens/espacePerso.vue";
import commandeProduits from "../components/praticiens/commande.vue";
export default {
  name: "praticiensView",
  components: {
    authPraticiens,
    espacePerso,
    catalogueProducts,
    historiqueCommandes,
    editProfil,
    commandeProduits,
  },
  props: ["view"],
  methods: {},
  // created() {
  //   const admin = Cookies.get("isAdmin");
  //   const user = Cookies.get("userName");
  //   this.$store.commit("newUser", user);
  //   this.$store.commit("isAdmin", admin);
  // },
};
</script>

<style lang="scss" scoped></style>
