<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Liste des commandes</p>
    </div>
    <div class="hero-body is-justify-content-center is-flex-direction-column">
      <div class="tabs is-centered">
        <ul>
          <li
            class="button is-outlined"
            :class="{ 'is-focused is-primary is-light': inProgress }"
            @click="inProgress = true"
          >
            En cours
          </li>
          <li
            class="button is-outlined"
            :class="{ 'is-focused is-primary is-light': !inProgress }"
            @click="inProgress = false"
          >
            Expediés
          </li>
        </ul>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Numero de commande</th>
            <th>Pour</th>
            <th>adresse</th>
            <th>total</th>
            <th>reglement</th>
            <th v-if="inProgress">a expedier</th>
            <th v-if="!inProgress">Status</th>
          </tr>
        </thead>
        <tbody v-if="inProgress">
          <tr v-for="order in ordersInProgress" :key="order.id">
            <td>{{ order.id }}</td>
            <td
              @click="UserProfil(order.user?.id)"
              class="cursor has-text-link"
            >
              {{ order.user?.lastName }} {{ order.user?.firstName }}
            </td>
            <td>{{ order.shipTo }}</td>
            <td>{{ order.total }}</td>
            <td>{{ order.payment }}</td>
            <td>
              <span class="has-text-info cursor" @click="shipped(order.id)"
                ><i class="fas fa-shipping-fast"></i
              ></span>
            </td>
          </tr>
        </tbody>
        <tbody v-if="!inProgress">
          <tr v-for="order in ordersShipped" :key="order.id">
            <td>{{ order.id }}</td>
            <td
              @click="UserProfil(order.user?.id)"
              class="cursor has-text-link"
            >
              {{ order.user?.lastName }} {{ order.user?.firstName }}
            </td>
            <td>{{ order.shipTo }}</td>
            <td>{{ order.total }}</td>
            <td>{{ order.payment }}</td>
            <td>
              <span class="has-text-success"
                ><i class="fas fa-check-circle"></i
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal is-active" v-if="showUserProfil">
      <div
        class="modal-background"
        @click="showUserProfil = !showUserProfil"
      ></div>
      <div class="modal-content">
        <user-profil :profil="user" :listOfOrder="listOfOrder" />
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    <toast-confirm
      v-if="confirm"
      :css="cssProps"
      :message="'commande envoyé ?'"
      @callBack="confirmShipping"
    />
    <toast-validate v-if="validedate" :css="cssProps" :message="isShipped" />
  </section>
</template>

<script>
import axios from "axios";
import toastConfirm from "../tools/toastConfirm.vue";
import toastValidate from "../tools/toastValidate.vue";
import userProfil from "./userProfil.vue";
export default {
  name: "allOrders",
  components: { toastConfirm, toastValidate, userProfil },
  data() {
    return {
      showUserProfil: false,
      allUsers: null,
      user: null,
      listOfOrder: null,
      inProgress: true,
      validedate: false,
      isShipped: "",
      confirm: false,
      idToShipped: null,
      cssProps: {
        width: "50%",
        top: "12%",
        position: "fixed",
      },
    };
  },
  computed: {
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
  methods: {
    UserProfil: function (id) {
      this.user = this.allUsers.filter((user) => user.id === id);
      axios.get("orders/myOrders/" + this.user[0].id).then((res) => {
        this.listOfOrder = res.data;
      });
      this.showUserProfil = !this.showUserProfil;
    },
    shipped: function (id) {
      this.idToShipped = id;
      this.confirm = !this.confirm;
    },

    confirmShipping: function (res) {
      if (!res) {
        this.idToShipped = null;
        this.confirm = !this.confirm;
      } else {
        axios
          .put("orders/shipping/" + this.idToShipped, {
            inProgress: false,
            shipped: true,
          })
          .then((res) => {
            (this.isShipped = res.data), (this.confirm = !this.confirm);
            this.validedate = !this.validedate;
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          });
      }
    },
  },
  created() {
    this.$store.dispatch("findAllOrders");
    axios.get("user/all").then((res) => {
      console.log(res.data);
      this.allUsers = res.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
