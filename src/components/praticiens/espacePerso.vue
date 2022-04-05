<template>
  <section class="hero is-danger is-fullheight">
    <div class="hero-body">
      <div class="">
        <p class="title">Espace Perso du praticien</p>
        <p class="subtitle">Fullheight subtitle</p>
      </div>
    </div>
  </section>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "espacePerso",
  created() {
    const admin = Cookies.get("isAdmin");
    const user = Cookies.get("userName");
    this.$store.commit("newUser", user);
    this.$store.commit("isAdmin", admin);
  },
};
</script>

<style lang="scss" scoped></style>
