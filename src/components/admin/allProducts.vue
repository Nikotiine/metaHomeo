<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <h1 class="title is-1 m-t-8">Catalogue Genesis</h1>
      <div class="box box-shadow max-width-50 mx-auto">
        <p class="title" v-if="user === 'admin'">
          Prix Unitaire: {{ prixUnitaire }} €
        </p>
        <p class="title">
          Taille S = {{ tailleS }} Produits Conditioné =>
          {{ tailleS * prixUnitaire }} €
        </p>
        <p class="title">
          Taille L = {{ tailleL }} Produits Conditioné =>
          {{ tailleL * prixUnitaire }} €
        </p>
        <button
          v-if="user === 'admin'"
          class="button is-primary is-outlined"
          @click="editPrices"
        >
          Modifier
        </button>
      </div>
    </div>
    <div class="hero-body is-justify-content-center is-flex-direction-column">
      <div class="tabs is-centered">
        <ul>
          <li
            class="button is-outlined is-flex"
            :class="{
              'is-focused is-primary is-light': activeList === categorie.code,
            }"
            v-for="categorie in categories"
            :key="categorie.id"
          >
            <a @click="selectCategory(categorie.code)">{{ categorie.name }}</a>
          </li>
        </ul>
      </div>
      <table class="table is-striped min-width-60" v-if="user === 'admin'">
        <thead>
          <tr>
            <th>n°</th>
            <th>nom</th>

            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProd" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>

            <td @click="editProduct(product.id)">
              <i class="fas fa-wrench"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal" :class="{ 'is-active': editModal }">
      <div class="modal-background" @click="editModal = !editModal"></div>
      <div class="modal-content no-overFLow">
        <edit-product
          :productId="productId"
          @cancel="cancelEditProduct"
          v-if="editProd"
        />
        <edit-price-and-quantity
          @cancel="cancelEditPrice"
          v-if="editPrice"
          :price="prixUnitaire"
          :small="tailleS"
          :big="tailleL"
        />
      </div>
    </div>
  </section>
</template>

<script>
import editProduct from "./editProduct.vue";
import editPriceAndQuantity from "./editPriceAndProduct.vue";
import axios from "axios";
export default {
  name: "allProducts",
  props: ["user"],
  components: { editProduct, editPriceAndQuantity },
  data() {
    return {
      prixUnitaire: null,
      tailleS: null,
      tailleL: null,
      editModal: false,
      products: [],
      activeList: 0,
      filteredProd: [],
      smallBox: 0,
      bigBox: 0,
      selectedProduct: [],
      editProd: false,
      editPrice: false,
    };
  },
  methods: {
    editProduct: function (productId) {
      this.productId = productId;
      this.editModal = !this.editModal;
      this.editProd = !this.editProd;
    },
    cancelEditProduct: function () {
      this.editProd = !this.editProd;
      this.editModal = !this.editModal;
    },
    cancelEditPrice: function () {
      this.editPrice = !this.editPrice;
      this.editModal = !this.editModal;
    },
    editPrices: function () {
      this.editModal = !this.editModal;
      this.editPrice = !this.editPrice;
    },
    selectCategory: function (code) {
      this.activeList = code;
      this.filteredProd = this.products.filter((item) => {
        return item.categoryCode === code;
      });
    },
  },
  created() {
    axios.get("products/all").then((res) => {
      this.products = res.data;
      this.products = this.products.map((p) => {
        p.smallBox = 0;
        p.bigBox = 0;
        return p;
      });
      this.selectCategory(0);
    });
    this.$store.dispatch("loadCategory");
    axios.get("products/price").then((res) => {
      this.prixUnitaire = res.data.prixUnitaire;
      this.tailleS = res.data.quantitySmall;
      this.tailleL = res.data.quantityBig;
    });
  },
  computed: {
    categories() {
      return this.$store.state.productsCategories;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.no-overFLow {
  overflow: hidden;
  height: 60vh;
}
td {
  vertical-align: middle;
}
</style>
