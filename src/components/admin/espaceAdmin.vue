<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Dashboard du MARABOUT-GUERISSEUR</p>
      <button-neon :btnName="newsletter" :width="320" />
      <figure class="image is-128x128 mx-auto">
        <img src="../../assets/rrrr.jpeg" />
      </figure>
    </div>
    <div class="body-dashboard">
      <div>
        <p class="subtitle">tu as {{ totalMembre }} membres enregistés</p>

        <button-neon :btnName="ajoutPraticien" :width="320" />
      </div>
      <div class="">
        <p class="subtitle">
          tu as {{ ordersInProgress.length }}
          <span v-if="ordersInProgress.length > 1">commandes en attente</span
          ><span v-else>commande en attente</span>
        </p>
        <!-- <p class="subtitle">
          tu as {{ ordersShipped.length }}
          <span v-if="ordersShipped.length > 1"> commandes validées </span
          ><span v-else>commande validée</span>
        </p> -->
        <button-neon :btnName="listOfOrders" :width="320" />
      </div>
      <div class="">
        <p class="subtitle">tu as {{ totalProducts }} produits enregistrés</p>

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
          name: "Tes disciples ",
          router: {
            name: "espace-admin",
            params: { view: "tous-les-praticiens" },
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
          name: "Les commandes ",
          router: {
            name: "espace-admin",
            params: { view: "toutes-les-commandes" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      newsletter: [
        {
          id: 0,
          name: "Bonne parole ",
          router: {
            name: "espace-admin",
            params: { view: "news-letter" },
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
