<template>
  <auth-praticiens v-if="view === 'loggin'" />
  <espace-perso v-if="view === 'espace-perso'" />
  <div></div>
</template>

<script>
//import Cookies from "js-cookie";
import authPraticiens from "../components/praticiens/authPraticiens.vue";
import espacePerso from "../components/praticiens/espacePerso.vue";
export default {
  name: "praticiensView",
  components: { authPraticiens, espacePerso },
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
