<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <h1 class="title is-1 m-t-8">Catalogue Genesis</h1>
      <div
        class="is-flex is-justify-content-space-around is-align-items-center"
      >
        <div class="box box-shadow min-width-35">
          <p class="title is-4">Parametres de vente</p>
          <p class="subtitle mt-3">Prix Unitaire: {{ prixUnitaire }} €</p>
          <p class="subtitle">
            Taille S = {{ tailleS }} Produits conditionnés => {{ prixSmall }} €
          </p>
          <p class="subtitle">
            Taille L = {{ tailleL }} Produits conditionnés => {{ prixBig }} €
          </p>
          <button
            class="button is-primary is-outlined mt-4"
            @click="editPrices"
          >
            Modifier
          </button>
        </div>
        <div class="min-width-35">
          <form-new-product :cat="categories" />
        </div>
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
      <table class="table is-striped min-width-60">
        <thead>
          <tr>
            <th>n°</th>
            <th>nom</th>

            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProd" :key="product.id">
            <td>{{ product.ref }}</td>
            <td>{{ product.name }}</td>

            <td @click="editProduct(product)">
              <span class="icon cursor has-text-info">
                <i class="fas fa-wrench"></i
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal" :class="{ 'is-active': editModal }">
      <div class="modal-background" @click="editModal = !editModal"></div>
      <div class="modal-content no-overFLow">
        <edit-product
          :product="prod"
          :cat="categories"
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
import formNewProduct from "./formNewProduct.vue";
import editProduct from "./editProduct.vue";
import editPriceAndQuantity from "./editPriceAndProduct.vue";
import axios from "axios";
export default {
  name: "allProducts",
  props: ["user"],
  components: { editProduct, editPriceAndQuantity, formNewProduct },
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
    editProduct: function (prod) {
      this.$store.commit("prodToEdit", prod);
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
      const cat = this.$store.state.productsCategories;
      return cat.splice(0, 6);
    },
    prixSmall() {
      const prixS = this.prixUnitaire * this.tailleS;
      return prixS.toFixed(2);
    },
    prixBig() {
      const prixL = this.prixUnitaire * this.tailleL;
      return prixL.toFixed(2);
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
