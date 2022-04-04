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
          v-model="lastName"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.lastName }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.lastName"
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
          v-model="firstName"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.firstName }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.firstName"
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
          v-model="email"
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
          v-model="password"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.password }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.password"
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
          v-model="adresse"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.adresse }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.adresse"
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
          v-model="zipCode"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.zipCode }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.zipCode"
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
          v-model="city"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.city }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right has-text-success" v-if="this.city">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field mt-4">
      <label class="checkbox">
        <input type="checkbox" v-model="admin" />
        Admin ??
      </label>
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
  name: "formNewUser",
  data() {
    return {
      firstname: null,
      lastName: null,
      zipCode: null,
      adresse: null,
      city: null,
      email: null,
      password: null,
      admin: false,
    };
  },
  methods: {
    send: function () {
      axios
        .post("http://localhost:3000/user/new", {
          firstName: this.firstName,
          lastName: this.lastName,
          adresse: this.adresse,
          zipCode: this.zipCode,
          city: this.city,
          email: this.email,
          password: this.password,
          admin: this.admin,
        })
        .then((res) => console.log(res));
    },
  },
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
  },
};
</script>

<style lang="scss" scoped></style>
