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
      <find-adresse @getSelected="getAdresse" />
    </div>

    <div class="field">
      <div class="control">
        <label class="label">Newletter</label>
        <label class="radio">
          <input type="radio" name="answer" checked />
          Oui
        </label>
        <label class="radio">
          <input type="radio" name="answer" />
          Non
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
      />
    </Transition>
    <toast-validate
      :message="messageValid"
      :config="updateUser"
      v-if="update"
    />
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
      updateUser: {},
      profil: {
        newpassword: null,
        firstName: null,
        lastName: null,
        email: null,
        geoLoc: [],
        adresse: null,
      },
    };
  },
  methods: {
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
          firstName: this.profil.firstName,
          lastName: this.profil.lastName,

          geoloc: this.profil.geoLoc,
          email: this.profil.email,
          adresse: this.profil.adresse,
          // password: this.profil.newpassword,
        })
        .then((res) => {
          console.log(res.data);
          this.updateUser = {
            firstName: res.data.firstName,
            lastName: res.data.lastName,
          };
          this.update = true;
          Cookies.set("userName", res.data.firstName);

          setTimeout(() => {
            this.$store.commit("newUser", res.data.firstName);
            this.$router.push({
              name: "espace-praticien",
              params: { view: "espace-perso" },
            });
          }, 2000);
        });
    },
    getAdresse: function (adresseData) {
      this.profil.adresse = adresseData.label;
      this.profil.geoLoc = adresseData.gps;
    },
  },
  mounted() {
    axios.get("user").then((res) => (this.profil = res.data));
  },
};
</script>

<style lang="scss" scoped></style>
