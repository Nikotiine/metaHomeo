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
          <a class="navbar-item"><router-link to="/">Accueil</router-link> </a>
          <a class="navbar-item"
            ><router-link to="/metahomeopathie"
              >MetaHomeopathie: La methode</router-link
            >
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"
              ><router-link
                :to="{
                  name: 'labo',
                  params: { view: 'accueil' },
                }"
                >Le labo</router-link
              >
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                <router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'technique' },
                  }"
                  >Sauvegarde de la technique</router-link
                >
              </a>
              <a class="navbar-item">
                <router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'dilutions' },
                  }"
                  >Recherche et création de dilutions</router-link
                >
              </a>
              <a class="navbar-item"
                ><router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'quesaco' },
                  }"
                  >Un laboratoire associatif à but non lucratif : quesaco
                  ?</router-link
                >
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"
              ><router-link
                :to="{
                  name: 'formations',
                  params: { view: 'accueil' },
                }"
                >Les formations</router-link
              >
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"
                ><router-link
                  :to="{
                    name: 'formations',
                    params: { view: 'ouverte-a-tous' },
                  }"
                  >Formation sans pre-requis
                </router-link>
              </a>
              <a class="navbar-item"
                ><router-link
                  :to="{
                    name: 'formations',
                    params: { view: 'pro-sante' },
                  }"
                  >Fromations pour les professionels de la santé
                </router-link>
              </a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"
              ><router-link
                :to="{
                  name: 'aboutUs',
                  params: { view: 'accueil' },
                }"
              >
                Qui sommes nous ?</router-link
              >
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> Ou nous trouver </a>
              <a class="navbar-item"> Nos partenaires </a>
              <a class="navbar-item">
                <router-link
                  :to="{
                    name: 'aboutUs',
                    params: { view: 'contactUs' },
                  }"
                >
                  Nous contacter</router-link
                >
              </a>
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
                class="button is-danger"
                :to="{
                  name: 'espace-admin',
                  params: { view: 'accueil' },
                }"
              >
                <strong>dashboard de : {{ status }}</strong>
              </router-link>
              <router-link class="button is-link" to="/" @click="deconnexion">
                <strong>Deconnexion</strong>
              </router-link>
            </div>
            <div class="buttons" v-if="admin === 'false'">
              <router-link
                class="button is-danger"
                :to="{
                  name: 'espace-praticien',
                  params: { view: 'espace-perso' },
                }"
              >
                <strong>Espace perso</strong>
              </router-link>
              <router-link class="button is-link" to="/" @click="deconnexion">
                <strong>Deconnexion</strong>
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
