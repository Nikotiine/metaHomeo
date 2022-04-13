<template>
  <div class="box box-shadow m-t-10 max-width-50 mx-auto">
    <div class="">
      <p class="title">Recapitulatif de la commande</p>
      <table class="table m-auto">
        <thead>
          <tr>
            <th>Nom du produit</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prod in productsInBasket" :key="prod.id">
            <td>{{ prod.name }}</td>
            <td>
              smallbox : {{ prod.smallBox }} <br />
              bigbox: {{ prod.bigBox }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <th>total de la commande</th>
          <th></th>
          <th>{{ totalCommande }} €</th>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "commandeProduits",
  components: {},
  data() {
    return {
      searchAdresse: "",
      add: [],
    };
  },
  computed: {
    productsInBasket() {
      return this.$store.state.panier;
    },
    totalCommande() {
      return this.$store.state.totalCommande;
    },
  },
  methods: {
    getadress: function (adresse) {
      if (adresse.length > 5) {
        const noInterceptorAxios = axios.create();
        noInterceptorAxios
          .get(
            "https://api-adresse.data.gouv.fr/search/?q=" + adresse + "&limit=3"
          )
          .then((res) => {
            this.add = res.data.features.map((r) => r.properties);
            console.log(this.add);
          });
      }
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped></style>
