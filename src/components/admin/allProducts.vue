<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title"></p>
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
      <table class="table is-fullwidth is-striped" v-if="user === 'admin'">
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

            <td><i class="fas fa-wrench"></i></td>
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
            <th>Effacer la selection</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProd" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>

            <td>
              <button @click="addToBasket(product.id, 5)">5</button>
              <button @click="addToBasket(product.id, 10)">10</button>
              <button @click="addToBasket(product.id, 50)">50</button>
            </td>
            <td>{{ product.basket }}</td>
            <td @click="clearBasket(product.id)">
              <i class="fas fa-trash"></i>
            </td>
          </tr>
        </tbody>
        <tfoot v-if="user === 'praticiens'">
          <tr>
            <th></th>
            <th></th>

            <th>total de produit</th>
            <th>{{ totalProduct }}</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>

            <th>total de la commande</th>
            <th>34</th>
            <th>
              <button class="button" @click="commander">commander</button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "allProducts",
  props: ["user"],
  data() {
    return {
      products: [],
      activeList: 0,
      filteredProd: [],
      totalProduct: 0,
      selectedProduct: [],
    };
  },
  methods: {
    selectCategory: function (code) {
      this.activeList = code;
      this.filteredProd = this.products.filter((item) => {
        return item.categoryCode === code;
      });
    },
    addToBasket: function (id, quantity) {
      const prod = this.products.find((product) => product.id === id);
      prod.basket += quantity;
      this.totalProduct += quantity;
    },
    clearBasket: function (id) {
      const prod = this.products.find((product) => product.id === id);
      this.totalProduct -= prod.basket;
      prod.basket = 0;
    },
    commander: function () {
      this.selectedProduct = this.products.filter((p) => {
        return p.basket > 0;
      });
      this.$store.commit("setCommande", this.selectedProduct);
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
        p.basket = 0;
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
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
