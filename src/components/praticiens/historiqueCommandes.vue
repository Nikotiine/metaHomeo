<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Historique des commandes</p>
      <p class="title" v-if="orderDetail">
        Detail de la commande n° {{ orderID }}
        <span class="has-text-info" @click="orderDetail = !orderDetail"
          ><i class="fas fa-times-circle"></i
        ></span>
      </p>
    </div>
    <div
      class="hero-body is-flex is-justify-content-center"
      v-if="!orderDetail"
    >
      <table class="table">
        <thead>
          <tr>
            <th>N° de commande</th>
            <th>Date</th>
            <th>Montant</th>
            <th>status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody v-for="order in listOfOrder" :key="order.id">
          <tr>
            <td>{{ order.id }}</td>
            <td>{{ order.createdAt }}</td>
            <td>{{}}</td>
            <td>sataus</td>
            <td>
              <span class="has-text-info" @click="showOderDetail(order.id)"
                ><i class="fas fa-eye cursor"></i
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <detail-commande v-if="orderDetail" :order="order" />
  </section>
</template>

<script>
import detailCommande from "./detailCommande.vue";
import axios from "axios";
export default {
  name: "historiqueCommandes",
  data() {
    return {
      listOfOrder: null,
      orderDetail: false,
      orderID: null,
      order: null,
    };
  },
  components: { detailCommande },
  methods: {
    showOderDetail: function (orderId) {
      this.orderID = orderId;
      axios.get("orders/one/" + orderId).then((res) => {
        this.order = res.data;
        this.orderDetail = !this.orderDetail;
      });

      // this.orderID = orderId;
    },
  },
  created() {
    axios.get("orders/myOrders").then((res) => {
      this.listOfOrder = res.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
