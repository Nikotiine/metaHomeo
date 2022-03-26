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
            <div class="buttons">
              <a class="button is-info is-outlined">
                <strong>Espace praticien</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return { showNav: false };
  },
};
</script>

<style lang="scss" scoped></style>
