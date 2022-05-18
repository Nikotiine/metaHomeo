<template>
  <section class="hero is-fullheight" v-if="!validePanier">
    <div class="hero-head m-t-10">
      <h1 class="has-font-gabriola">Catalogue Genesis</h1>

      <div class="box box-shadow max-width-50 mx-auto">
        <p class="title">
          Taille S = {{ tailleS }} Produits Conditioné => {{ prixSmall }} €
        </p>
        <p class="title">
          Taille L = {{ tailleL }} Produits Conditioné => {{ prixBig }} €
        </p>
      </div>
    </div>
    <div class="hero-body is-justify-content-center is-flex-direction-column">
      <div class="min-width-50">
        <label class="label">Recherche un produit par nom ou reference</label>
        <input
          type="text"
          class="input"
          v-model="searchInput"
          placeholder="Rechercher"
        />
      </div>
      <div class="min-width-50">
        <label class="label mt-4">Rechercher une ou plusieurs categories</label>
        <VueMultiselect
          v-model="selectedCategories"
          :options="categories"
          placeholder="Filtrez par categorie"
          track-by="name"
          label="name"
          :multiple="true"
          @select="selectCategory"
          @remove="removeSelectCategory"
          :groupSelect="true"
          :groupLabel="'tout'"
          class="mt-4"
        >
        </VueMultiselect>
      </div>

      <table class="table is-fullwidth is-striped mt-5">
        <thead>
          <tr>
            <th>
              n°
              <div v-if="activeList === 6">
                <input type="number" name="" id="" />
              </div>
            </th>
            <th>
              nom
              <div v-if="activeList === 6">
                <input type="text" name="" id="" />
              </div>
            </th>

            <th>Ajouter au panier</th>
            <th>Mis dans le panier</th>
            <th>Total en €</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in searchProduct" :key="product.id">
            <td>{{ product.ref }}</td>
            <td>{{ product.name }}</td>

            <td>
              <button
                @click="addSmallBox(product.id, 1)"
                class="button is-primary is-outlined"
              >
                <i class="fas fa-flask"></i> Taille S
              </button>

              <button
                @click="addBigBox(product.id, 1)"
                class="m-l-3 button is-link is-outlined"
              >
                <i class="fas fa-flask"></i> Taille L
              </button>
            </td>
            <td>
              {{ product.smallBox }} Taille S
              <span
                class="icon has-text-info cursor"
                @click="removeSmallBox(product.id)"
                ><i class="fas fa-times"></i></span
              ><br />
              {{ product.bigBox }} Taille L
              <span
                class="icon has-text-info cursor"
                @click="removeBigBox(product.id)"
                ><i class="fas fa-times"></i
              ></span>
            </td>
            <td>
              {{ product.totalB + product.totalS }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>

            <th>total de produit</th>
            <th>Petite box:{{ smallBox }} <br />Grande Box:{{ bigBox }}</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>

            <th>total de la commande</th>
            <th>
              {{ totalCommande }}
            </th>
            <th>
              <button class="button" @click="commander">commander</button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
  <commande-produits
    v-if="validePanier"
    @cancel="this.validePanier = !this.validePanier"
  />
</template>

<script>
import VueMultiselect from "vue-multiselect";
import commandeProduits from "./commande.vue";

import axios from "axios";
export default {
  name: "catalogueProducts",
  props: [],
  components: { commandeProduits, VueMultiselect },
  data() {
    return {
      selectedCategories: "",
      validePanier: false,
      prixUnitaire: null,
      tailleS: null,
      tailleL: null,
      editModal: false,
      products: [],
      codeOfSelectedCategory: [],
      filteredProd: [],
      smallBox: 0,
      bigBox: 0,
      selectedProduct: [],
      editProd: false,
      editPrice: false,
      searchInput: "",
    };
  },

  methods: {
    selectCategory: function (code) {
      this.codeOfSelectedCategory.push(code.code);
      this.filteredProd = this.products.filter((item) => {
        return this.codeOfSelectedCategory.includes(item.categoryCode);
      });
    },
    removeSelectCategory: function (code) {
      const i = this.codeOfSelectedCategory.findIndex((x) => x === code.code);
      this.codeOfSelectedCategory.splice(i, 1);
      this.filteredProd = this.products.filter((item) => {
        return this.codeOfSelectedCategory.includes(item.categoryCode);
      });
      if (this.filteredProd.length === 0) {
        this.filteredProd = this.products;
      }
    },
    addSmallBox: function (id, quantity) {
      const prod = this.products.find((product) => product.id === id);
      prod.smallBox += quantity;
      const totalS = prod.smallBox * this.prixUnitaire * this.tailleS;
      prod.totalS = parseFloat(totalS.toFixed(2));
      this.smallBox += quantity;
    },
    addBigBox: function (id, quantity) {
      const prod = this.products.find((product) => product.id === id);
      prod.bigBox += quantity;
      const totalB = prod.bigBox * this.prixUnitaire * this.tailleL;
      prod.totalB = parseFloat(totalB.toFixed(2));
      this.bigBox += quantity;
    },
    removeSmallBox: function (id) {
      const prod = this.products.find((product) => product.id === id);
      prod.smallBox -= 1;
      const totalS = prod.smallBox * this.prixUnitaire * this.tailleS;
      prod.totalS = parseFloat(totalS.toFixed(2));
      this.smallBox -= 1;
    },
    removeBigBox: function (id) {
      const prod = this.products.find((product) => product.id === id);
      prod.bigBox -= 1;
      const totalB = prod.bigBox * this.prixUnitaire * this.tailleL;
      prod.totalB = parseFloat(totalB.toFixed(2));
      this.bigBox -= 1;
    },
    commander: function () {
      this.selectedProduct = this.products.filter((p) => {
        return p.bigBox > 0 || p.smallBox > 0;
      });

      this.$store.commit("setCommande", this.selectedProduct);
      this.$store.commit("setTotalCommande", this.totalCommande);
      this.validePanier = !this.validePanier;
    },
  },
  created() {
    axios.get("products/all").then((res) => {
      this.products = res.data;
      this.products = this.products.map((p) => {
        p.smallBox = 0;
        p.bigBox = 0;
        p.totalS = 0;
        p.totalB = 0;
        return p;
      });
      this.filteredProd = this.products;
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
    totalCommande() {
      const total =
        this.smallBox * this.prixUnitaire * this.tailleS +
        this.bigBox * this.prixUnitaire * this.tailleL;
      return parseFloat(total.toFixed(2));
    },
    prixSmall() {
      const prixS = this.prixUnitaire * this.tailleS;
      return parseFloat(prixS.toFixed(2));
    },
    prixBig() {
      const prixL = this.prixUnitaire * this.tailleL;
      return parseFloat(prixL.toFixed(2));
    },
    searchProduct() {
      return this.filteredProd.filter((product) => {
        let stringToSearch = product.name + product.ref;
        return stringToSearch
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
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
@media screen and(max-width: 1024px) {
  .m-l-3 {
    margin-left: 0;
  }
}
</style>
