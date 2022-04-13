<template>
  <form
    class="box box-shadow m-t-10 max-width-45 mx-auto"
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
      <label class="label">Adresse Professionelle </label>
      <find-adresse @getSelected="getAdressePro" />
    </div>
    <div class="field">
      <label class="label">Adresse Personelle (optionelle) </label>

      <find-adresse @getSelected="getAdressePerso" />
    </div>

    <div class="field mt-5">
      <label class="checkbox">
        <input type="checkbox" v-model="admin" />
        Admin ??
      </label>
      <label class="checkbox ml-4">
        <input type="checkbox" v-model="publicAuthorisation" />
        Profil publique
      </label>
      <label class="checkbox ml-4">
        <input type="checkbox" v-model="newsletter" />
        News-letter
      </label>
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
        :disabled="!validedField"
      >
        Enregistrer
      </button>
    </div>
    <Transition>
      <toast-validate
        v-if="userIsSave"
        :config="dataNewUser"
        :message="messageToast"
    /></Transition>
    <Transition
      ><toast-erreur v-if="erreur" :message="messageErreur"
    /></Transition>
  </form>
</template>

<script>
import findAdresse from "../tools/findAdresse.vue";
import toastValidate from "../tools/toastValidate.vue";
import toastErreur from "../tools/toastErreur.vue";
import axios from "axios";

export default {
  name: "formNewUser",
  components: { toastValidate, findAdresse, toastErreur },
  data() {
    return {
      erreur: false,
      messageErreur: "",
      newsletter: true,
      publicAuthorisation: true,
      firstName: null,
      lastName: null,
      adressePerso: null,
      geoLocPerso: null,
      adressePro: null,
      geoLocPro: null,
      email: null,
      password: null,
      admin: false,
      dataNewUser: {},
      userIsSave: false,
      messageToast: "ajouter a la base de donnée utilisateur",
    };
  },
  methods: {
    send: function () {
      axios
        .post("http://localhost:3000/user/new", {
          firstName: this.firstName,
          lastName: this.lastName,
          adressePerso: this.adressePerso,
          geoLocPerso: this.geoLocPerso,
          adressePro: this.adressePro,
          geoLocPro: this.geoLocPro,
          email: this.email,
          password: this.password,
          admin: this.admin,
          newsletter: this.newsletter,
          publicAuthorisation: this.publicAuthorisation,
        })
        .then((res) => {
          if (res.data.message) {
            this.messageErreur = res.data.message;
            this.erreur = !this.erreur;
            setTimeout(() => {
              this.erreur = !this.erreur;
            }, 3000);
          } else {
            this.dataNewUser = {
              firstName: res.data.firstName,
              lastName: res.data.lastName,
            };
            this.userIsSave = !this.userIsSave;
            setTimeout(() => {
              this.userIsSave = !this.userIsSave;
              location.reload();
            }, 3000);
          }
        });
    },
    getAdressePro: function (adresseData) {
      this.adressePro = adresseData.label;
      const lat = adresseData.gps[1];
      const long = adresseData.gps[0];
      this.geoLocPro = { type: "Point", coordinates: [lat, long] };
    },
    getAdressePerso: function (adresseData) {
      this.adressePerso = adresseData.label;
      const lat = adresseData.gps[1];
      const long = adresseData.gps[0];
      this.geoLocPerso = { type: "Point", coordinates: [lat, long] };
    },
  },
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    validedField() {
      if (
        this.firstName &&
        this.lastName &&
        this.validEmail &&
        this.password &&
        this.adressePro
      ) {
        return true;
      } else return false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
