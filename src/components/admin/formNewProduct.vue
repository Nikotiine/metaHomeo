<template>
  <form
    class="box box-shadow m-t-10 max-width-35 mx-auto"
    v-on:submit.prevent="onSubmit"
  >
    <div class="field">
      <label class="label">Nom</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Nom"
          v-model="name"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.name }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right has-text-success" v-if="this.name">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Categorie</label>
      <div class="select">
        <select v-model="categorie">
          <option v-bind:value="null">Sélectionnez la categorie</option>
          <option v-for="cat in categories" :key="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="buttons">
      <router-link class="button" to="/">Annuler</router-link
      ><button class="button is-primary" @click="send">send</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "formNewProduct",
  data() {
    return {
      name: null,
      categorie: null,
      categories: this.$store.state.productsCategories,
    };
  },
  methods: {
    send: function () {
      axios
        .post("product/new", {
          name: this.name,
          categorie: this.categorie,
        })
        .then((res) => {
          console.log(res.data);
        });
    },
  },
  computed: {
    // categories() {
    //   return this.$store.state.productsCategories;
    // },
  },
};
</script>

<style lang="scss" scoped></style>
