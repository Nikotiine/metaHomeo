<template>
  <div>
    <section class="hero toto is-fullheight">
      <div class="hero-head" id="aboutUs">
        <div class="">
          <p class="title is-1">Info et contact</p>
          <p class="subtitle"></p>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <button-neon
            :btnName="maps"
            :width="320"
            @click="openModal = !openModal"
          />
        </div>
        <div class="container blockInfo">
          <button-neon :btnName="info" :width="320" />
          <p class="subtitle box box-shadow gradientBackGround">
            Toutes les info que vous avez besoin sont ici <br />
            afficher directement la carte pour nous trouver <br />
            nous envoyer une demande de contact <br />
            enfin trouvez tous les praticiens qui ont suivi ma methode
          </p>
          <button-neon :btnName="praticiens" :width="420" />
        </div>
        <div class="container">
          <button-neon :btnName="contact" :width="320" />
        </div>
      </div>

      <div class="modal is-active" v-if="openModal">
        <div class="modal-background" @click="openModal = !openModal"></div>
        <div class="modal-content">
          <maps-leaflet :heightMaps="75" :widthMaps="50" :markers="markers" />
        </div>
      </div>
      <div class="hero-foot"><p>mentions legales</p></div>
    </section>
  </div>
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
          name: "toutes les info",
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
          name: "tous les praticiens",
          router: "/metahomeopathie",
          width: "420px",
          strokeDasharray1: 140,
          strokeDasharray2: 600,
          strokeDashoffset: -600,
          dashHover: 960,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 7%;
}
.hero-body {
  padding: 0;
}
.blockInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
}
</style>
