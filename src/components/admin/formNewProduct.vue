<template>
  <form class="box box-shadow mx-auto" v-on:submit.prevent="onSubmit">
    <div class="field">
      <p class="title is-4">Ajout de Produits</p>
      <p class="subtitle is-4 mt-4">Nom</p>
      <p class="title is-4 has-text-danger" v-if="nameIsUsed.length === 1">
        Produit deja existant
      </p>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Nom"
          v-model="name"
        /><span
          class="icon is-small is-left"
          :class="{
            'has-text-info': nameIsUsed.length === 0,
            'has-text-danger': nameIsUsed.length === 1,
          }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="nameIsUsed.length === 0"
        >
          <i class="fas fa-check"></i>
        </span>
        <span
          class="icon is-small is-right has-text-danger"
          v-if="nameIsUsed.length === 1"
        >
          <i class="fas fa-times"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <p class="subtitle is-4">categorie</p>

      <div class="select min-width-100">
        <select v-model="categorie" class="min-width-100">
          <option v-bind:value="null">Sélectionnez la categorie</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.code">
            {{ cat.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="buttons is-justify-content-center mt-6">
      <button
        class="button is-primary is-outlined"
        @click="send"
        :disabled="nameIsUsed.length === 1 || !fieldIsValid"
        v-if="!productIssave"
      >
        Enregistrer
      </button>
      <Transition>
        <toast-validate v-if="productIssave" :css="cssProps" :message="message"
      /></Transition>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import toastValidate from "../tools/toastValidate.vue";
export default {
  name: "formNewProduct",
  components: { toastValidate },
  data() {
    return {
      name: null,
      cssProps: {
        width: "100%",
        top: "50%",
        position: "relative",
      },
      categorie: null,
      productIssave: false,
      dataProduct: {},
      message: "",
    };
  },
  methods: {
    send: function () {
      axios
        .post("products/new", {
          name: this.name,
          code: this.categorie,
        })
        .then((res) => {
          console.log(res.data.name);
          this.message = `${res.data.name} a ete enregistré`;
          this.productIssave = !this.productIssave;
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    },
  },

  computed: {
    categories() {
      return this.$store.state.productsCategories;
    },
    fieldIsValid() {
      if (this.name === null || this.categorie === null) {
        return false;
      } else return true;
    },

    nameIsUsed() {
      const names = this.$store.state.productsName;
      return names.filter((x) => {
        if (this.name && x.name !== this.name) {
          return false;
        } else return true;
      });
    },
  },
  created() {
    this.$store.dispatch("loadCategory");
    this.$store.dispatch("loadProductsName");
  },
};
</script>

<style lang="scss" scoped></style>
