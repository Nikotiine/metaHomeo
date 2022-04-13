<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <h1 class="title is-1 m-t-8">Catalogue Genesis</h1>
      <div class="box box-shadow max-width-50 mx-auto">
        <p class="title">
          Taille S = {{ tailleS }} Produits Conditioné =>
          {{ tailleS * prixUnitaire }} €
        </p>
        <p class="title">
          Taille L = {{ tailleL }} Produits Conditioné =>
          {{ tailleL * prixUnitaire }} €
        </p>
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
      <table class="table is-fullwidth is-striped" v-if="user === 'praticiens'">
        <thead>
          <tr>
            <th>n°</th>
            <th>nom</th>

            <th>Ajouter au panier</th>
            <th>Mis dans le panier</th>
            <th>Total en €</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProd" :key="product.id">
            <td>{{ product.id }}</td>
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
                class="ml-3 button is-link is-outlined"
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
              {{
                product.smallBox * tailleS * prixUnitaire +
                product.bigBox * prixUnitaire * tailleL
              }}
            </td>
          </tr>
        </tbody>
        <tfoot v-if="user === 'praticiens'">
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
    <div class="modal" :class="{ 'is-active': editModal }">
      <div class="modal-background" @click="editModal = !editModal"></div>
      <div class="modal-content no-overFLow">
        <edit-product :productId="productId" @cancel="editModal = !editModal" />
      </div>
    </div>
  </section>
</template>

<script>
import editProduct from "./editProduct.vue";
import axios from "axios";
export default {
  name: "allProducts",
  props: ["user"],
  components: { editProduct },
  data() {
    return {
      prixUnitaire: 1,
      tailleS: 5,
      tailleL: 25,
      editModal: false,
      products: [],
      activeList: 0,
      filteredProd: [],
      smallBox: 0,
      bigBox: 0,
      selectedProduct: [],
    };
  },
  methods: {
    editProduct: function (productId) {
      this.productId = productId;
      this.editModal = !this.editModal;
    },
    selectCategory: function (code) {
      this.activeList = code;
      this.filteredProd = this.products.filter((item) => {
        return item.categoryCode === code;
      });
    },
    addSmallBox: function (id, quantity) {
      const prod = this.products.find((product) => product.id === id);
      prod.smallBox += quantity;
      this.smallBox += quantity;
    },
    addBigBox: function (id, quantity) {
      const prod = this.products.find((product) => product.id === id);
      prod.bigBox += quantity;
      this.bigBox += quantity;
    },
    removeSmallBox: function (id) {
      const prod = this.products.find((product) => product.id === id);
      prod.smallBox -= 1;
      this.smallBox -= 1;
    },
    removeBigBox: function (id) {
      const prod = this.products.find((product) => product.id === id);
      prod.bigBox -= 1;
      this.bigBox -= 1;
    },
    commander: function () {
      this.selectedProduct = this.products.filter((p) => {
        return p.bigBox > 0 || p.smallBox > 0;
      });
      this.$store.commit("setCommande", this.selectedProduct);
      this.$store.commit("setTotalCommande", this.totalCommande);
      this.$router.push({
        name: "espace-praticien",
        params: {
          view: "commande",
        },
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
  },
  computed: {
    categories() {
      return this.$store.state.productsCategories;
    },
    totalCommande() {
      return (
        this.smallBox * this.prixUnitaire * this.tailleS +
        this.bigBox * this.prixUnitaire * this.tailleL
      );
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
