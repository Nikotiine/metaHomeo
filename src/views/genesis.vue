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
            <div class="is-flex-direction-column is-flex">
              <p class="title">Ou trouver ...</p>

              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="cabinet.check"
                  v-on:change="addmarker(cabinet)"
                />
                Le cabinet
              </label>
              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="salleSeminaire.check"
                  v-on:change="addmarker(salleSeminaire)"
                />
                La salle de seminaire
              </label>
              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="officeTourisme.check"
                  v-on:change="addmarker(officeTourisme)"
                />
                L'office du tourisme
              </label>
            </div>
          </div>
          <div class="maps">
            <maps-leaflet :heightMaps="50" :widthMaps="45" :markers="markers" />
          </div>
        </div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Partenaires</p>
            <p class="subtitle mt-5">
              a remplir si ya .. genre ma formation.fr ou autre
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
import { latLng } from "leaflet";
import contactUs from "../components/genesis/contact.vue";
import mapsLeaflet from "../components/genesis/maps.vue";
export default {
  name: "genesisTeam",
  components: { mapsLeaflet, contactUs },
  data() {
    return {
      markers: [],
      salleSeminaire: {
        id: 1,
        name: "Salle de Seminiare",
        geoloc: latLng(45.127699, 5.589008),
        check: false,
      },
      cabinet: {
        id: 0,
        name: "cabinet",
        geoloc: latLng(45.128078, 5.589974),
        check: false,
      },
      officeTourisme: {
        id: 2,
        name: "Office du tourisme",
        geoloc: latLng(45.129298, 5.584312),
        check: false,
      },
    };
  },
  methods: {
    addmarker: function (mark) {
      if (mark.check === true) {
        this.markers.push(mark);
      } else this.markers.pop(mark);
    },
  },
  computed: {},
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
