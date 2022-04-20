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
          v-model="userData.lastName"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.userData.lastName }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.userData.lastName"
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
          v-model="userData.firstName"
        /><span
          class="icon is-small is-left"
          :class="{ 'has-text-info': this.userData.firstName }"
        >
          <i class="fas fa-lock"></i>
        </span>
        <span
          class="icon is-small is-right has-text-success"
          v-if="this.userData.firstName"
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
          v-model="userData.email"
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
          v-model="newpassword"
        /><span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right has-text-success">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label"
        >Adresse Pro
        <span class="ml-5"
          ><a @click="majPro = !majPro">(Mettre a jour)</a></span
        >
      </label>
      <p class="subtitle" v-if="!majPro">
        {{ userData.userAdress?.adressePro }}
      </p>
      <find-adresse @getSelected="getAdressePro" v-if="majPro" />
    </div>
    <div class="field">
      <label class="label"
        >Adresse Perso
        <span class="ml-5"
          ><a @click="majPerso = !majPerso">(Mettre a jour)</a></span
        >
      </label>
      <p class="subtitle" v-if="!majPerso">
        {{
          userData.userAdress?.adressePerso
            ? userData.userAdress?.adressePerso
            : userData.userAdress?.adressePro
        }}
      </p>
      <find-adresse @getSelected="getAdressePerso" v-if="majPerso" />
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="registered" />
          newsletter
        </label>
        <label class="checkbox">
          <input
            type="checkbox"
            class="ml-4"
            v-model="userData.publicAuthorisation"
          />
          donees publiques
        </label>
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
      ><button class="button is-primary" @click="confirm = !confirm">
        Modifier
      </button>
    </div>
    <Transition>
      <toast-confirm
        v-if="confirm"
        :message="messageConfirm"
        @callBack="callBackToast"
        :css="cssConfirm"
      />
    </Transition>
    <toast-validate :message="messageValid" v-if="update" :css="cssValidate" />
  </form>
</template>

<script>
import findAdresse from "../tools/findAdresse.vue";
import Cookies from "js-cookie";
import toastValidate from "../tools/toastValidate.vue";
import toastConfirm from "../tools/toastConfirm.vue";
import axios from "axios";
export default {
  name: "editProfil",
  components: { toastConfirm, toastValidate, findAdresse },
  data() {
    return {
      messageConfirm: "Enregister les modifications ?",
      messageValid: "Profil mis a jour",
      update: false,
      confirm: false,

      userData: null,
      newpassword: null,
      majPro: false,
      majPerso: false,
      adressePerso: null,
      geoLocPerso: null,
      adressePro: null,
      geoLocPro: null,
      registered: false,
      cssConfirm: {
        width: "35%",
        position: "absolute",
        top: "80%",
      },
      cssValidate: {
        width: "35%",
        position: "absolute",
        top: "10%",
      },
    };
  },
  methods: {
    getUserData: function () {
      this.userData = this.$store.state.userData;
      this.registered = this.$store.state.userData?.newsletter?.registered;
    },

    callBackToast: function (res) {
      if (!res) {
        this.confirm = !this.confirm;
      } else {
        this.confirm = !this.confirm;
        this.edit();
      }
    },
    edit: function () {
      axios
        .put("user/edit", {
          firstName: this.userData.firstName,
          lastName: this.userData.lastName,
          email: this.userData.email,
          adressePerso: this.adressePerso
            ? this.adressePerso
            : this.userData.adressePerso,
          geoLocPerso: this.geoLocPerso
            ? this.geoLocPerso
            : this.userData.geoLocPerso,
          adressePro: this.adressePro
            ? this.adressePro
            : this.userData.adressePro,
          geoLocPro: this.geoLocPro ? this.geoLocPro : this.userData.geoLocPro,
          password: this.newpassword,
          newsletter: this.registered,
          publicAuthorisation: this.userData.publicAuthorisation,
        })
        .then((res) => {
          console.log(res.data);
          this.update = true;
          Cookies.set("userName", res.data.firstName);

          this.$store.commit("setUserData", res.data);

          setTimeout(() => {
            this.$store.commit("newUser", res.data.firstName);

            this.$router.push({
              name: "espace-praticien",
              params: { view: "espace-perso" },
            });
          }, 2000);
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
  mounted() {},
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.userData.email);
    },
  },
  created() {
    this.$store.dispatch("loadUserData");
    this.getUserData();
  },
};
</script>

<style lang="scss" scoped></style>
