<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">
        Bonjour {{ loadUserInfo.firstName }} {{ loadUserInfo.lastName }}
      </p>
    </div>
    <div class="hero-body is-justify-content-space-around">
      <div class="box box-shadow">
        <p class="title">Profil</p>
        <p class="subtitle is-4 mt-2">
          {{ loadUserInfo.lastName }} {{ loadUserInfo.firstName }}
        </p>
        <p class="subtitle">
          Adresse : <br />
          {{ loadUserInfo.userAdress?.adressePro }}
        </p>
        <p class="subtitle">mail de contact : {{ loadUserInfo.email }}</p>
        <p class="subtitle">
          inscrit a la newsletter:
          {{ loadUserInfo.newletter?.registered ? "oui" : "non" }}
        </p>
        <p class="subtitle">
          Diffusion publique:
          {{ loadUserInfo.publicAuthorisation ? "oui" : "non" }}
        </p>
        <button-neon :btnName="profil" :width="320" />
      </div>

      <div class="is-flex bottomContainer is-flex-direction-column">
        <div class="box box-shadow">
          <p class="subtitle">Acces au catalogue des produits</p>
          <button-neon :btnName="catalogue" :width="320" />
        </div>
        <div class="box box-shadow">
          <p class="subtitle">Historique des commandes</p>
          <button-neon :btnName="historique" :width="320" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import buttonNeon from "../button.vue";
import Cookies from "js-cookie";
export default {
  name: "espacePerso",
  components: { buttonNeon },
  data() {
    return {
      praticienFirstname: Cookies.get("userName"),
      catalogue: [
        {
          id: 0,
          name: "Genensis",
          router: {
            name: "espace-praticien",
            params: { view: "catalague-produit" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      historique: [
        {
          id: 0,
          name: "Tes commandes",
          router: {
            name: "espace-praticien",
            params: { view: "historique-commandes" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      profil: [
        {
          id: 0,
          name: "Modifier",
          router: {
            name: "espace-praticien",
            params: { view: "edition-profil" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
    };
  },
  created() {
    const admin = Cookies.get("isAdmin");
    const user = Cookies.get("userName");
    this.$store.commit("newUser", user);
    this.$store.commit("isAdmin", admin);
    this.$store.dispatch("loadUserData");
  },
  computed: {
    loadUserInfo() {
      return this.$store.state.userData;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  min-width: 35%;
  // margin: 0 auto;
}
</style>
