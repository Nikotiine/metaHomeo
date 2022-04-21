<template>
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th>Produit</th>
          <th>smallBox</th>
          <th>BigBox</th>
          <th>Montant</th>
          <th>Adresse d'expedition</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in order.productInOrders" :key="items.productId">
          <td>{{ items.name }}</td>
          <td>{{ items.smallBox }}</td>
          <td>{{ items.bigBox }}</td>

          <td>{{ order.total }}</td>
          <td>{{ order.shipTo }}</td>
          <td>a faire</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "detailCommande",
  props: ["order"],
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
