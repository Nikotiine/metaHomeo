<template>
  <div class="mx-auto box box-shadow mt-6">
    <div>
      <p class="title is-4 mt-2">adresse de livraison</p>
      <p class="subtitle">
        {{ userInfo.lastName }} {{ userInfo.firstName }} <br />

        {{ order.shipTo }}
      </p>
    </div>
    <table class="table mt-5">
      <thead>
        <tr>
          <th>Produit</th>
          <th>smallBox</th>
          <th>BigBox</th>
          <th>Prix par produit (€)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in order.productInOrders" :key="items.productId">
          <td>{{ items.name }}</td>
          <td>{{ items.smallBox }}</td>
          <td>{{ items.bigBox }}</td>
          <td>{{ items.totalS + items.totalB }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th></th>
          <th></th>
          <th>{{ order.total }} €</th>
        </tr>
        <tr>
          <th>status</th>
          <th></th>
          <th></th>
          <th>
            {{
              order.inProgress ? "en cours de traitement" : "Commande expedié"
            }}
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "detailCommande",
  props: ["order"],
  computed: {
    userInfo() {
      return this.$store.state.userData;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
