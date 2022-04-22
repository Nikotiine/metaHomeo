<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Dashboard du MARABOUT-GUERISSEUR</p>
      <figure class="image is-128x128 mx-auto">
        <img src="../../assets/rrrr.jpeg" />
      </figure>
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
        <p class="subtitle">
          tu as {{ ordersInProgress.length }}
          <span v-if="ordersInProgress.length > 1">commandes en attente</span
          ><span v-else>commande en attente</span>
        </p>
        <p class="subtitle">
          tu as {{ ordersShipped.length }}
          <span v-if="ordersShipped.length > 1"> commandes validées </span
          ><span v-else>commande validée</span>
        </p>
        <button-neon :btnName="listOfOrders" :width="420" />
      </div>
      <div class="">
        <p class="subtitle">
          tu as {{ totalProducts }} de produits enregistrés
        </p>

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
          name: "Tous les produits ",
          router: {
            name: "espace-admin",
            params: { view: "tous-les-produits" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      listOfOrders: [
        {
          id: 0,
          name: "Liste des commandes ",
          router: {
            name: "espace-admin",
            params: { view: "toutes-les-commandes" },
          },
          width: "420px",
          strokeDasharray1: 140,
          strokeDasharray2: 600,
          strokeDashoffset: -600,
          dashHover: 960,
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
    ordersInProgress() {
      const inProgress = this.$store.state.allOrders.filter(
        (orders) => orders.inProgress === true
      );
      return inProgress;
    },
    ordersShipped() {
      const shipped = this.$store.state.allOrders.filter(
        (orders) => orders.shipped
      );
      return shipped;
    },
  },
  created() {
    this.$store.dispatch("findAllOrders");
  },
};
</script>

<style lang="scss" scoped></style>
