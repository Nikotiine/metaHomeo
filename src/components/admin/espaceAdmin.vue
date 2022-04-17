<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Ton dashboard</p>
    </div>
    <div class="hero-body is-justify-content-space-around">
      <div>
        <p class="subtitle">tu as {{ totalMembre }} membres enregistés</p>
        <router-link
          class="button is-info is-outlined"
          :to="{
            name: 'espace-admin',
            params: { view: 'tous-les-praticiens' },
          }"
        >
          Voir les profils
        </router-link>
        <button-neon :btnName="ajoutPraticien" :width="320" />
      </div>
      <div class="">
        <p class="subtitle">tu as eu ... de commandes pasées</p>
        <button class="button is-primary is-light">voir la liste</button>
      </div>
      <div class="">
        <p class="subtitle">tu as {{ totalProducts }} de produits enregisté</p>
        <router-link
          class="button is-info is-outlined"
          :to="{
            name: 'espace-admin',
            params: { view: 'tous-les-produits' },
          }"
        >
          Voir les tous produits
        </router-link>

        <button-neon :btnName="ajoutProduit" :width="320" />
      </div>
    </div>
  </section>
</template>

<script>
// import Cookies from "js-cookie";
//import axios from "axios";
import buttonNeon from "../button.vue";
export default {
  name: "espaceAdmin",
  components: {
    buttonNeon,
  },
  data() {
    return {
      ajoutPraticien: [
        {
          id: 0,
          name: "Nouveau membre ",
          router: {
            name: "espace-admin",
            params: { view: "nouveau-membre" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      ajoutProduit: [
        {
          id: 0,
          name: "Ajouter produit ",
          router: {
            name: "espace-admin",
            params: { view: "new-product" },
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
  mounted() {
    this.$store.dispatch("loadTotalMembre");
    this.$store.dispatch("loadTotalProducts");
  },
  computed: {
    totalMembre() {
      return this.$store.state.totalMembre;
    },
    totalProducts() {
      return this.$store.state.totalProduts;
    },
  },
};
</script>

<style lang="scss" scoped></style>
