<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title"></p>
    </div>
    <div class="hero-body is-justify-content-center is-flex-direction-column">
      <div class="tabs is-centered">
        <ul>
          <li v-for="categorie in categories" :key="categorie.id">
            <a>{{ categorie.name }}</a>
          </li>
        </ul>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>nom</th>

            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>modfier</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "allProducts",
  data() {
    return {
      products: [],
      filtered: {},
    };
  },
  methods: {
    filteredProducts: function () {},
  },
  created() {
    axios.get("products/all").then((res) => {
      this.products = res.data;
    });
    this.$store.dispatch("loadCategory");
  },
  computed: {
    categories() {
      return this.$store.state.productsCategories;
    },
  },
};
</script>

<style lang="scss" scoped></style>
