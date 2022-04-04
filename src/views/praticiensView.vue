<template>
  <auth-praticiens v-if="view === 'loggin'" />
  <espace-perso v-if="view === 'espace-perso'" />
  <div></div>
</template>

<script>
import authPraticiens from "../components/praticiens/authPraticiens.vue";
import espacePerso from "../components/praticiens/espacePerso.vue";
export default {
  name: "praticiensView",
  components: { authPraticiens, espacePerso },
  props: ["view"],
};
</script>

<style lang="scss" scoped></style>
