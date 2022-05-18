<template>
  <section class="hero is-fullheight" v-if="!loadUserInfo">
    <p class="title is-1 m-t-10">loading</p>
  </section>
  <section class="hero is-fullheight" v-else>
    <div class="hero-head">
      <p class="title m-t-10">Bonjour {{ loadUserInfo.firstName }}</p>
    </div>
    <div class="hero-body">
      <div class="box box-shadow">
        <p class="title">Profil</p>

        <img :src="'data:image/png;base64,' + loadAvatar" alt="" />

        <p class="subtitle is-4 mt-2" @click="openOnMobile = !openOnMobile">
          {{ loadUserInfo.lastName }} {{ loadUserInfo.firstName }}
        </p>
        <div class="close-on-mobile" :class="{ openOnMobile: openOnMobile }">
          <p class="subtitle">
            Adresse pro: <br />
            {{ loadUserInfo.userAdress?.adressePro }}
          </p>
          <p class="subtitle">
            Adresse perso: <br />
            {{
              loadUserInfo.userAdress?.adressePerso
                ? loadUserInfo.userAdress?.adressePerso
                : "non renseigner"
            }}
          </p>
          <p class="subtitle">mail de contact : {{ loadUserInfo.email }}</p>
          <p class="subtitle">
            inscrit a la newsletter:
            {{ loadUserInfo.newsletter?.registered ? "oui" : "non" }}
          </p>
          <p class="subtitle">
            Diffusion publique:
            {{ loadUserInfo.publicAuthorisation ? "oui" : "non" }}
          </p>
          <button-neon :btnName="profil" :width="320" />
        </div>
      </div>
      <div class="container-praticiens">
        <div class="box box-shadow">
          <p class="subtitle">Acces au catalogue des produits</p>
          <button-neon :btnName="catalogue" :width="320" />
        </div>
        <div class="box box-shadow m-t-40">
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
      openOnMobile: false,
      avatarUrl: null,
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
    this.$store.commit("isAdmin", admin);
    console.log("avatar");
  },
  computed: {
    loadUserInfo() {
      return this.$store.state.userData;
    },
    // getWindowSize() {
    //   return window.innerWidth;
    // },
    loadAvatar() {
      const avatar = this.$store.state.userData.avatar.avatar;
      const avatarUrl = window.btoa(
        String.fromCharCode(...new Uint8Array(avatar.data))
      );
      return avatarUrl;
    },
  },
  beforeCreate() {
    this.$store.dispatch("loadUserData").then((res) => {
      console.log(res);
    });
  },
  async mounted() {
    console.log("mounted");
    this.$store.dispatch("loadUserData");
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container-praticiens {
  display: flex;
  flex-direction: column;
}
.box {
  min-width: 35%;
}
.hero-body {
  justify-content: space-around;
}
@media screen and(max-width: 1024px) {
  .close-on-mobile {
    transform: scaleY(0);
    height: 0px;
  }
  .openOnMobile {
    height: auto;
    transition: all 0.8s ease-in;
    overflow: hidden;
    transform: scaleY(1);
  }
  .hero-body {
    flex-direction: column;
  }
  .box {
    min-width: 70%;
  }
  .container-praticiens {
    min-width: 70%;
    & div.m-t-40 {
      margin-top: 0;
    }
  }
  .hero-body {
    justify-content: center;
  }
}
</style>
