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
      <label class="label">categorie</label>
      <div class="select">
        <select v-model="categorie">
          <option v-bind:value="null">Sélectionnez le niveau</option>
          <option v-for="cat in categories" :key="cat.id">{{ cat.nom }}</option>
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
      categories: [
        { id: 0, nom: "categorie 1" },
        { id: 1, nom: "categorie 2" },
        { id: 2, nom: "categorie 3" },
        { id: 3, nom: "categorie 4" },
        { id: 4, nom: "categorie 5" },
      ],
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
};
</script>

<style lang="scss" scoped></style>
