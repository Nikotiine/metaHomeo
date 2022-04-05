<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Bonjour {{ praticienFirstname }}</p>
    </div>
    <div class="hero-body is-justify-content-space-around">
      <div class="box box-shadow">
        <p class="subtitle">Acces au catalogue des produits</p>
        <button-neon :btnName="catalogue" :width="320" />
      </div>
      <div class="box box-shadow">
        <p class="subtitle">Historique des commandes</p>
        <button-neon :btnName="historique" :width="320" />
      </div>
      <div class="box box-shadow">
        <p class="subtitle">Modifier ton profil</p>
        <button-neon :btnName="profil" :width="320" />
      </div>
    </div>
  </section>
</template>

<script>
import buttonNeon from "../button.vue";
import Cookies from "js-cookie";
export default {
  name: "espacePerso",
  components: { buttonNeon },
  data() {
    return {
      praticienFirstname: Cookies.get("userName"),
      catalogue: [
        {
          id: 0,
          name: "Genensis",
          router: {
            name: "espace-praticien",
            params: { view: "catalague-produit" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      historique: [
        {
          id: 0,
          name: "Tes commandes",
          router: {
            name: "espace-praticien",
            params: { view: "historique-commandes" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      profil: [
        {
          id: 0,
          name: "Acces profil",
          router: {
            name: "espace-praticien",
            params: { view: "edition-profil" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
    };
  },
  created() {
    const admin = Cookies.get("isAdmin");
    const user = Cookies.get("userName");
    this.$store.commit("newUser", user);
    this.$store.commit("isAdmin", admin);
  },
};
</script>

<style lang="scss" scoped>
.box {
  min-width: 25%;
  margin: 0 auto;
}
</style>
