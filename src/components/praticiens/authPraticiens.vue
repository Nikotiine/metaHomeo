<template>
  <form
    class="box box-shadow m-t-10 max-width-35 mx-auto"
    v-on:submit.prevent="onSubmit"
  >
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
    <div class="buttons">
      <router-link class="button" to="/">Annuler</router-link
      ><button class="button is-primary" @click="loggin">Se connecter</button>
    </div>
  </form>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
export default {
  name: "authPraticiens",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    getUserAccount: function () {
      console.log("get test");
      axios.get("user").then((res) => {
        const admin = res.data.admin;
        const user = res.data.firstName;
        if (!admin) {
          Cookies.set("userName", user);
          Cookies.set("isAdmin", admin);
          this.$router.push({
            name: "espace-praticien",
            params: { view: "espace-perso" },
          });
        } else {
          Cookies.set("userName", user);
          Cookies.set("isAdmin", admin);
          this.$router.push({
            name: "espace-admin",
            params: { view: "accueil" },
          });
        }
      });
    },
    loggin: function () {
      axios
        .post("user/loggin", {
          email: this.email,
          password: this.password,
        })
        //if false do something
        .then((res) => {
          Cookies.set("accessToken", res.data.accessToken);
          Cookies.set("refreshToken", res.data.refreshToken);

          // localStorage.setItem("accessToken", res.data.accessToken);
          // localStorage.setItem("refreshToken", res.data.refreshToken);
          this.getUserAccount();
        });
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
