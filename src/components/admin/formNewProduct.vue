<template>
  <form
    class="box box-shadow m-t-10 max-width-35 mx-auto"
    v-on:submit.prevent="onSubmit"
  >
    <div class="field">
      <label class="label">Nom</label>
      <label class="label has-text-danger" v-if="nameIsUsed.length === 1"
        >Produit deja existant</label
      >
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
      <label class="label">Categorie</label>

      <div class="select min-width-100">
        <select v-model="categorie" class="min-width-100">
          <option v-bind:value="null">Sélectionnez la categorie</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.code">
            {{ cat.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="buttons is-justify-content-flex-end mt-6">
      <router-link
        class="button"
        :to="{
          name: 'espace-admin',
          params: { view: 'accueil' },
        }"
        >Annuler</router-link
      ><button
        class="button is-primary"
        @click="send"
        :disabled="nameIsUsed.length === 1 || !fieldIsValid"
      >
        Enregistrer
      </button>
    </div>
  </form>
  <Transition>
    <toast-validate
      v-if="productIssave"
      :config="dataProduct"
      :message="messageConfirm"
  /></Transition>
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

      categorie: null,
      productIssave: false,
      dataProduct: {},
      messageConfirm: "est enregistré dans la base de données",
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
          this.dataProduct = { lastName: res.data.name };
          this.productIssave = !this.productIssave;
          setTimeout(() => {
            this.productIssave = !this.productIssave;
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
