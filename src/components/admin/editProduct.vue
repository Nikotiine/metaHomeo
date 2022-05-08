<template>
  <form class="box box-shadow m-t-10 mx-auto" v-on:submit.prevent="onSubmit">
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
          v-model="prod.name"
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
      <label class="label">Reference</label>

      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="number"
          placeholder="Reference"
          v-model="prod.ref"
        /><span
          class="icon is-small is-left"
          :class="{
            'has-text-info': refIsUsed.length === 0,
            'has-text-danger': refIsUsed.length === 1,
          }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="refIsUsed.length === 0"
        >
          <i class="fas fa-check"></i>
        </span>
        <span
          class="icon is-small is-right has-text-danger"
          v-if="refIsUsed.length === 1"
        >
          <i class="fas fa-times"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Categorie</label>

      <div class="select min-width-100">
        <select v-model="prod.categoryCode" class="min-width-100">
          <option v-bind:value="null">Sélectionnez la categorie</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.code">
            {{ cat.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="buttons is-justify-content-flex-end mt-6">
      <button class="button is-primary" @click="this.$emit('cancel')">
        annuler</button
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
      :config="dataProduct"
      :message="messageConfirm"
      v-if="productIssave"
      :css="cssProps"
  /></Transition>
</template>

<script>
import axios from "axios";
import toastValidate from "../tools/toastValidate.vue";
export default {
  name: "editProduct",
  components: { toastValidate },
  props: ["cat"],
  data() {
    return {
      reference: null,
      name: null,
      cssProps: {
        width: "80%",
      },
      categorie: null,
      productIssave: false,
      dataProduct: {},
      messageConfirm: "a ete modifié dans la base de données",
    };
  },
  methods: {
    send: function () {
      axios
        .put("products/edit", {
          id: this.prod.id,
          name: this.prod.name,
          code: this.prod.categoryCode,
          ref: this.prod.ref,
        })
        .then((res) => {
          console.log(res);
          this.dataProduct = { lastName: this.name };
          this.productIssave = !this.productIssave;
          setTimeout(() => {
            this.productIssave = !this.productIssave;
            window.location.reload();
          }, 2000);
        });
    },
  },
  computed: {
    prod() {
      return this.$store.state.prodToEdit;
    },
    categories() {
      return this.cat;
    },
    fieldIsValid() {
      if (
        this.prod.name === null ||
        this.prod.categoryCode === null ||
        this.prod.ref === null
      ) {
        return false;
      } else return true;
    },

    nameIsUsed() {
      const names = this.$store.state.productsName;
      return names.filter((x) => {
        if (this.prod.name && x.name !== this.prod.name) {
          return false;
        } else return true;
      });
    },
    refIsUsed() {
      const refs = this.$store.state.productsName;
      return refs.filter((x) => {
        if (this.prod.ref && x.ref !== this.prod.ref) {
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
