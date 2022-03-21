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
                  params: { view: 'accueil', status: 4 },
                }"
                >Le labo</router-link
              >
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                <router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'technique', status: 0 },
                  }"
                  >Sauvegarde de la technique</router-link
                >
              </a>
              <a class="navbar-item">
                <router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'dilutions', status: 1 },
                  }"
                  >Recherche et création de dilutions</router-link
                >
              </a>
              <a class="navbar-item"
                ><router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'quesaco', status: 2 },
                  }"
                  >Un laboratoire associatif à but non lucratif : quesaco
                  ?</router-link
                >
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"
              ><router-link to="/formations">Les formations</router-link>
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"
                >Formation complète professionnalisante 1 an
              </a>
              <a class="navbar-item"
                >Formation pour professionnels de santé et primo diplômés
              </a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"
              ><router-link to="/aboutUs"> Qui sommes nous ?</router-link>
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> Ou nous trouver </a>
              <a class="navbar-item"> Nos partenaires </a>
              <a class="navbar-item"> Contact </a>
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
