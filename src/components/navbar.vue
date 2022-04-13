<template>
  <div>
    <nav
      class="navbar is-fixed-top box-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand" :class="{ 'is-active': showNav }">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Accueil</router-link>
          <router-link to="/metahomeopathie" class="navbar-item"
            >MetaHomeopathie: La methode</router-link
          >

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{
                name: 'labo',
                params: { view: 'accueil' },
              }"
              class="navbar-item"
              >Le labo</router-link
            >

            <div class="navbar-dropdown">
              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'technique' },
                }"
                class="navbar-item"
                >Sauvegarde de la technique</router-link
              >

              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'dilutions' },
                }"
                class="navbar-item"
                >Recherche et création de dilutions</router-link
              >

              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'quesaco' },
                }"
                class="navbar-item"
                >Un laboratoire associatif à but non lucratif : quesaco
                ?</router-link
              >
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{
                name: 'formations',
                params: { view: 'accueil' },
              }"
              class="navbar-item"
              >Les formations</router-link
            >

            <div class="navbar-dropdown">
              <router-link
                :to="{
                  name: 'formations',
                  params: { view: 'ouverte-a-tous' },
                }"
                class="navbar-item"
                >Formation sans pre-requis
              </router-link>

              <router-link
                :to="{
                  name: 'formations',
                  params: { view: 'pro-sante' },
                }"
                class="navbar-item"
                >Fromations pour les professionels de la santé
              </router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{
                name: 'aboutUs',
                params: { view: 'accueil' },
              }"
              class="navbar-item"
            >
              Qui sommes nous ?</router-link
            >

            <div class="navbar-dropdown">
              <a class="navbar-item"> Ou nous trouver </a>
              <a class="navbar-item"> Nos partenaires </a>

              <router-link
                :to="{
                  name: 'aboutUs',
                  params: { view: 'contactUs' },
                }"
                class="navbar-item"
              >
                Nous contacter</router-link
              >
              <router-link
                :to="{
                  name: 'aboutUs',
                  params: { view: 'tous-les-praticiens' },
                }"
                class="navbar-item"
              >
                trouver un praticien</router-link
              >
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" v-if="status === 'visiteur' && admin === null">
              <router-link
                class="button is-info is-outlined"
                :to="{
                  name: 'espace-praticien',
                  params: { view: 'loggin' },
                }"
              >
                <strong>Espace praticien</strong>
              </router-link>
            </div>
            <div class="buttons" v-else-if="admin === 'true'">
              <router-link
                class="button is-rounded is-info is-outlined"
                :to="{
                  name: 'espace-admin',
                  params: { view: 'accueil' },
                }"
              >
                <strong>Panneau de controle : {{ status }}</strong>
              </router-link>
              <router-link
                class="button is-rounded"
                to="/"
                @click="deconnexion"
              >
                <i class="fas fa-power-off"></i>
              </router-link>
            </div>
            <div class="buttons" v-if="admin === 'false'">
              <router-link
                class="button is-rounded is-info is-outlined"
                :to="{
                  name: 'espace-praticien',
                  params: { view: 'espace-perso' },
                }"
              >
                <strong>Espace perso : {{ status }}</strong>
              </router-link>
              <router-link
                class="button is-rounded"
                to="/"
                @click="deconnexion"
              >
                <i class="fas fa-power-off"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "navBar",
  props: ["status", "admin"],
  data() {
    return { showNav: false };
  },
  methods: {
    deconnexion: function () {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      Cookies.remove("userName");
      Cookies.remove("isAdmin");
      this.$store.commit("newUser", "visiteur");
      this.$store.commit("isAdmin", null);
    },
  },
};
</script>

<style lang="scss" scoped></style>
