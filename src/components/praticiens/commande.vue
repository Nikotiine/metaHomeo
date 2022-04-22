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
      <div class="control">
        <label class="label">Mode de reglement </label>
        <label class="radio">
          <input type="radio" v-model="payement" value="virement" />
          Virement banquaire
        </label>
        <label class="radio">
          <input type="radio" v-model="payement" value="cheque" />
          Cheque
        </label>
      </div>
      <div class="mt-4">
        <label class="label">Commande expedie a :</label>
        <p class="subtitle mt-3">
          {{ userData.firstName }} {{ userData.lastName }}
        </p>
        <div>
          <input
            type="radio"
            id="pro"
            :value="userData.userAdress?.adressePro"
            v-model="shipTo"
            :checked="true"
          />
          <label for="pro">{{ userData.userAdress?.adressePro }}</label>
          <br />
          <input
            type="radio"
            id="perso"
            :value="userData.userAdress?.adressePerso"
            v-model="shipTo"
          />
          <label for="perso"> {{ userData.userAdress?.adressePerso }}</label>
        </div>
      </div>
    </div>
    <div
      class="is-flex mx-auto max-width-50 buttons is-justify-content-space-around mt-6"
    >
      <button class="button is-primary is-outlined" @click="cancel">
        Modifier
      </button>
      <button class="button is-link is-outlined" @click="valideBasket">
        Valider
      </button>
      <Transition>
        <toast-validate
          v-if="orderIsValide"
          :css="cssProps"
          :message="message"
        />
      </Transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import toastValidate from "../tools/toastValidate.vue";
//import buttonNeon from "../button.vue";
export default {
  name: "commandeProduits",
  components: { toastValidate },
  data() {
    return {
      shipTo: this.$store.state.userData.userAdress?.adressePro,
      payement: "cheque",
      cssProps: {
        width: "50%",
        top: "13%",
        position: "fixed",
      },
      message: "",
      orderIsValide: false,
    };
  },
  computed: {
    productsInBasket() {
      return this.$store.state.panier;
    },
    totalCommande() {
      return this.$store.state.totalCommande;
    },
    userData() {
      return this.$store.state.userData;
    },
  },
  methods: {
    cancel: function () {
      this.$emit("cancel");
    },
    valideBasket: function () {
      console.log(this.productsInBasket);
      axios
        .post("orders/newOrder", {
          products: this.productsInBasket,
          userId: this.userData.id,
          payment: this.payement,
          shipTo: this.shipTo,
          total: this.totalCommande,
          inProgress: true,
        })
        .then((res) => {
          this.message = res.data.data;
          this.orderIsValide = !this.orderIsValide;
          setTimeout(() => {
            this.$router.push({
              name: "espace-praticien",
              params: { view: "espace-perso" },
            });
          }, 2000);
        });
    },
  },
  watch: {},
  created() {
    this.$store.dispatch("loadUserData");
  },
};
</script>

<style lang="scss" scoped></style>
