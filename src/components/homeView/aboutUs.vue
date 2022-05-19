<template>
  <section class="hero is-fullheight">
    <div class="hero-head" id="aboutUs">
      <p class="m-t-10 has-font-gabriola">Infos et contact</p>
      <p class="subtitle"></p>
    </div>
    <div class="home-body">
      <div class="container">
        <button-neon
          :btnName="maps"
          :width="320"
          @click="openModal = !openModal"
        />
      </div>
      <div class="blockInfo">
        <button-neon :btnName="info" :width="320" />

        <p class="has-text-secondary">
          Toutes les info que vous avez besoin sont ici <br />
          afficher directement la carte pour nous trouver <br />
          nous envoyer une demande de contact <br />
          enfin trouvez les {{ totalPraticien }} praticiens qui ont suivi ma
          methode
        </p>
        <button-neon :btnName="praticiens" :width="320" />
      </div>
      <div class="container">
        <button-neon :btnName="contact" :width="320" />
      </div>
    </div>

    <div class="modal is-active" v-if="openModal">
      <div class="modal-background" @click="openModal = !openModal"></div>
      <div class="modal-content">
        <maps-leaflet class="maps" :markers="markers" />
      </div>
    </div>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import mapsLeaflet from "../genesis/maps.vue";
import buttonNeon from "../button.vue";
export default {
  name: "aboutUs",
  components: { mapsLeaflet, buttonNeon },
  props: ["next"],
  data() {
    return {
      markers: [
        {
          id: 0,
          name: "cabinet",
          geoloc: latLng(45.128078, 5.589974),
          check: true,
        },
      ],
      openModal: false,
      maps: [
        {
          id: 0,
          name: "Nous trouver",
          router: "",
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      contact: [
        {
          id: 0,
          name: "Nous Contacter",
          router: {
            name: "aboutUs",
            params: { view: "contactUs" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      info: [
        {
          id: 0,
          name: "Toutes les infos",
          router: {
            name: "aboutUs",
            params: { view: "accueil" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      praticiens: [
        {
          id: 0,
          name: "Les praticiens",
          router: {
            name: "aboutUs",
            params: { view: "tous-les-praticiens" },
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
  methods: {},
  computed: {
    totalPraticien() {
      return this.$store.state.totalPraticien;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.blockInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
}
.maps {
  height: 75vh;
  width: 50vw;
}
@media screen and (max-width: 1024px) {
  .home-body {
    flex-direction: column;
  }
  .modal-content {
    width: 65vw;
  }
}
@media screen and (max-width: 768px) {
  .modal-content {
    width: 90vw;
  }
}
</style>
