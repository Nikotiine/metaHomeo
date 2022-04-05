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
          v-model="profil.lastName"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.profil.lastName }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.profil.lastName"
        >
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Prenom</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Prenom"
          v-model="profil.firstName"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.profil.firstName }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.profil.firstName"
        >
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="e.g. alex@example.com"
          v-model="profil.email"
          :class="{ isValidField: validEmail }"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': validEmail }"
        >
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right has-text-success" v-if="validEmail">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="password"
          placeholder="********"
          v-model="profil.newpassword"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.profil.newpassword }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.profil.newpassword"
        >
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">adresse</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Nom"
          v-model="profil.adresse"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.profil.adresse }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.profil.adresse"
        >
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">code postal</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="number"
          placeholder="Nom"
          v-model="profil.zipCode"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.profil.zipCode }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.profil.zipCode"
        >
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Ville</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Nom"
          v-model="profil.city"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.profil.city }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.profil.city"
        >
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div class="buttons">
      <router-link
        class="button"
        :to="{
          name: 'espace-praticien',
          params: { view: 'espace-perso' },
        }"
        >Annuler</router-link
      ><button class="button is-primary" @click="edit">Modifier</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "editProfil",
  data() {
    return {
      profil: {
        newpassword: null,
        firstName: null,
        lastName: null,
        email: null,
        zipCode: null,
        city: null,
        adresse: null,
      },
    };
  },
  methods: {
    edit: function () {
      axios.put("user/edit", {
        firstName: this.profil.firstName,
        lastName: this.profil.lastName,
        city: this.profil.city,
        zipCode: this.profil.zipCode,
        email: this.profil.email,
        adresse: this.profil.adresse,
        password: this.profil.newpassword,
      });
    },
  },
  mounted() {
    axios.get("user").then((res) => (this.profil = res.data));
  },
};
</script>

<style lang="scss" scoped></style>
