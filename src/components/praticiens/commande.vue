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
          <input type="radio" name="payement" />
          Virement banquaire
        </label>
        <label class="radio">
          <input type="radio" name="payement" />
          Cheque
        </label>
      </div>
      <div class="mt-4">
        <label class="label">Commande expedie a :</label>
        <p class="subtitle mt-3">
          {{ userData.firstName }} {{ userData.lastName }} <br />
          {{ userData.userAdress?.adressePro }}
        </p>
      </div>
    </div>
    <div
      class="is-flex mx-auto max-width-50 buttons is-justify-content-space-around mt-6"
    >
      <button class="button is-primary is-outlined" @click="cancel">
        Modifier
      </button>
      <button class="button is-link is-outlined">Valider</button>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
//import buttonNeon from "../button.vue";
export default {
  name: "commandeProduits",
  components: {},
  data() {
    return {
      searchAdresse: "",
      add: [],
      valideCommande: [
        {
          id: 0,
          name: "Validez",
          router: {
            name: "espace-praticien",
            params: {
              view: "commande-valide",
            },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      retourPanier: [
        {
          id: 0,
          name: "Annuler",
          router: {
            name: "espace-praticien",
            params: { view: "catalague-produit" },
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
  },
  watch: {},
  created() {
    this.$store.dispatch("loadUserData");
  },
};
</script>

<style lang="scss" scoped></style>
