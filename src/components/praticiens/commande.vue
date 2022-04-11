<template>
  <div class="box box-shadow">
    <div v-for="prod in productsInBasket" :key="prod.id" class="m-t-10">
      <p class="title">Recapitulatif de la commande</p>
      <table class="table m-auto">
        <thead>
          <tr>
            <th>Nom du produit</th>
            <th>Quantité</th>
            <th>Total en €</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ prod.name }}</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
        <tfoot>
          <th>total de la commande</th>
          <th></th>
          <th>0€</th>
        </tfoot>
      </table>
    </div>
    <div>
      <p class="subtitle">Envoyé a l'adresse :</p>
      <VueMultiselect
        v-model="searchAdresse"
        :options="add"
        placeholder="Chercher une cote"
        @search-change="getadress"
        track-by="label"
        label="label"
      >
      </VueMultiselect>
      <button @click="getadress">chercher</button>
    </div>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
import axios from "axios";
export default {
  name: "commandeProduits",
  components: { VueMultiselect },
  data() {
    return {
      searchAdresse: "",
      add: [],
    };
  },
  computed: {
    productsInBasket() {
      return this.$store.state.prod;
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
