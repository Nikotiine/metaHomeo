<template>
  <div>
    <div>
      <section class="hero is-link is-fullheight">
        <div class="hero-head">
          <div class="">
            <p class="title m-t-10">L'equipe genesis</p>
            <div class="is-flex is-align-items-center">
              <figure class="image">
                <img src="../assets/staff.png" />
              </figure>
              <p class="subtitle mt-5">
                Niko , osteo depuis 1000 ans et marbout guerisseur qui ramene ta
                femme plus vite que la redoute
              </p>
            </div>
          </div>
        </div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">ou nous trouver ?</p>
            <p class="subtitle mt-5">
              Cabinet Osteo rue salengro 38118 lans en vercors
            </p>
          </div>
          <div class="maps">
            <maps-leaflet :heightMaps="50" :widthMaps="45" />
          </div>
        </div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Liens Utiles et partenaires</p>
            <p class="subtitle mt-5">
              office de tourisme .... hotel .... rBnB .... blablabla
            </p>
            <p class="title mt-6">
              <button class="button is-danger is-outlined">
                <router-link
                  :to="{
                    name: 'aboutUs',
                    params: { view: 'contactUs' },
                  }"
                >
                  Nous contacter</router-link
                >
              </button>
            </p>
          </div>
        </div>
        <contact-us v-if="view === 'contactUs'" />
      </section>
    </div>
  </div>
</template>

<script>
import contactUs from "../components/genesis/contact.vue";
import mapsLeaflet from "../components/genesis/maps.vue";
export default {
  name: "genesisTeam",
  components: { mapsLeaflet, contactUs },
  props: ["view"],
};
</script>

<style lang="scss" scoped>
.image {
  width: 256px;
}
.maps {
  z-index: 3;
}
</style>
