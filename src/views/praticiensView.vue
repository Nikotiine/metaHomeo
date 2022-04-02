<template>
  <auth-praticiens v-if="view === 'loggin'" />
  <div></div>
</template>

<script>
import authPraticiens from "../components/praticiens/authPraticiens.vue";
export default {
  name: "praticiensView",
  components: { authPraticiens },
  props: ["view"],
};
</script>

<style lang="scss" scoped></style>
