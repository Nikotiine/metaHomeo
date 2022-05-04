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
    <div
      class="file is-primary has-name is-flex is-flex-direction-column is-align-items-center"
      :class="{
        'is-danger': fileOverSize,
        'is-primary': !fileOverSize,
      }"
    >
      <label class="label">Photo de profil (max 200ko)</label>
      <label class="file-label">
        <input
          class="file-input"
          type="file"
          accept="image/jpeg, image/png"
          name="userAvatar"
          @change="previewFile"
        />
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">Choisir une photo </span>
        </span>
        <span class="file-name"
          ><p>{{ fileName ? fileName : "aucun fichier" }}</p></span
        >
        <!-- <span class="file-name" v-if="avatars.length === 1"
          ><p v-for="avatar in avatars" :key="avatar.id">
            {{ avatar.name }}
          </p></span
        > -->
      </label>
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
        v-if="!userIsSave"
        >Annuler</router-link
      ><button
        class="button is-primary"
        @click="send"
        :disabled="!validedField"
        v-if="!userIsSave"
      >
        Enregistrer
      </button>
      <Transition>
        <toast-validate
          v-if="userIsSave"
          :message="messageToast"
          :css="cssProps"
      /></Transition>
    </div>

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
      fileName: null,
      fileOverSize: false,
      avatar: null,
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
      messageToast: "toto et tata a ete corretement enregistré",
      cssProps: {
        width: "100%",
        top: "20%",
        position: "relative",
      },
    };
  },
  methods: {
    send: function () {
      // let formDatas = new FormData();
      // formDatas.append("firstName", this.firstName);

      // formDatas.append("lastName", this.lastName);
      // formDatas.append("adressePerso", this.adressePerso);
      // formDatas.append("adressePro", this.adressePro);
      // formDatas.append("geoLocPerso", this.geoLocPerso);
      // formDatas.append("geoLocPro", this.geoLocPro);
      // formDatas.append("email", this.email);
      // formDatas.append("password", this.password);
      // formDatas.append("admin", this.admin);
      // formDatas.append("newsletter", this.newsletter);
      // formDatas.append("publicAuthorisation", this.publicAuthorisation);
      // formDatas.append("avatar", this.avatar);
      // console.log(Array.from(formDatas));
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
            console.log(res.data);
            this.messageToast = `${res.data.lastName} ${res.data.firstName} a ete corretement enregistré`;
            this.sendAvatar(res.data.id);
            this.userIsSave = !this.userIsSave;
            setTimeout(() => {
              this.userIsSave = !this.userIsSave;
              //  location.reload();
            }, 3000);
          }
        });
    },
    sendAvatar: function (id) {
      let formData = new FormData();
      formData.append("avatar", this.avatar);
      formData.append("userId", id);
      axios.post("user/new/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
    previewFile: function (file) {
      if (file.target.files[0].size < 80000) {
        this.fileName = file.target.files[0].name;
        this.fileOverSize = false;
        this.avatar = new Blob(file.target.files, { type: "jpeg/jpg" });
        console.log(this.avatar);
      } else {
        this.fileOverSize = true;
        return;
      }
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
