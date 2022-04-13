<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10" id="title">
        Retrouver ici la liste de tous nos praticiens
      </p>
    </div>
    <div class="hero-body is-justify-content-space-around">
      <div class="is-flex is-flex-direction-column">
        <p class="title">liste des particiens</p>

        <label
          class="checkbox m-2"
          v-for="praticien in allPraticiens"
          :key="praticien.id"
        >
          <input
            type="checkbox"
            :value="praticien.id"
            @change="checked($event, praticien.userAdress)"
          />
          {{ praticien.firstName }} {{ praticien.lastName }}
        </label>
      </div>
      <div class="maps">
        <mapsLeaflet :heightMaps="50" :widthMaps="45" :markers="markers" />
      </div>
    </div>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import axios from "axios";
import mapsLeaflet from "./maps.vue";
export default {
  name: "allPraticiens",
  components: { mapsLeaflet },
  data() {
    return {
      markerChecked: false,
      allPraticiens: [],
      markers: [],
    };
  },
  methods: {
    checked: function (e, id) {
      if (e.target.checked) {
        const particienMarker = {
          id: id.userId,
          adresse: id.adressePro,
          geoloc: latLng(
            id.geoLocPro.coordinates[0],
            id.geoLocPro.coordinates[1]
          ),
          check: true,
        };
        this.markers.push(particienMarker);
      } else if (!e.target.checked) {
        const i = this.markers.findIndex((m) => (m.id = id.userId));
        this.markers.splice(i, 1);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
    axios
      .get("public/praticiens")
      .then((res) => (this.allPraticiens = res.data));
  },
};
</script>

<style lang="scss" scoped></style>
