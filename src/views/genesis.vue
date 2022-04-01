<template>
  <div>
    <div>
      <section class="hero is-fullheight">
        <div class="hero-head">
          <div class="">
            <p class="title m-t-10 is-1">Qui sommes nous ?</p>
            <div
              class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-evenly mt-6"
            >
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
        <div class="hero-body mt-6">
          <div
            class="container has-text-centered is-flex is-justify-content-center"
          >
            <div
              class="is-flex-direction-column is-flex is-align-items-flex-start box box-shadow check"
            >
              <p class="title mb-6">Ou trouver ...</p>

              <label
                class="checkbox m-2"
                v-for="checkboxe in markers"
                :key="checkboxe.id"
              >
                <input type="checkbox" v-model="checkboxe.check" />
                {{ checkboxe.name }}
              </label>
            </div>
          </div>
          <div class="maps">
            <maps-leaflet :heightMaps="50" :widthMaps="45" :markers="markers" />
          </div>
        </div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Nos Partenaires</p>
            <div class="is-flex is-justify-content-space-evenly">
              <figure class="image is-48X48">
                <img src="../assets/lecairn.jpeg" alt="Placeholder image" />
              </figure>
              <figure class="image is-48X48">
                <img src="../assets/lansot.jpeg" alt="Placeholder image" />
              </figure>
              <figure class="image is-48X48">
                <img src="../assets/logoforma.jpeg" alt="Placeholder image" />
              </figure>
            </div>
            <p class="title mt-6">
              <button-neon :btnName="contact" :width="320" />
            </p>
          </div>
        </div>
        <Transition>
          <contact-us v-if="view === 'contactUs'" />
        </Transition>
      </section>
    </div>
  </div>
</template>

<script>
import buttonNeon from "../components/button.vue";
import { latLng } from "leaflet";
import contactUs from "../components/genesis/contact.vue";
import mapsLeaflet from "../components/genesis/maps.vue";
export default {
  name: "genesisTeam",
  components: { mapsLeaflet, contactUs, buttonNeon },
  data() {
    return {
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

      markers: [
        {
          id: 0,
          name: "Le cabinet",
          adresse: "51 Av. Léopold Fabre Lans en vercors",
          telephone: "0681389671",
          geoloc: latLng(45.127699, 5.589008),
          check: false,
        },
        {
          id: 1,
          name: "La salle de seminiare",
          adresse: "180 Rue des Écoles, 38250 Lans-en-Vercors",
          telephone: "0681389671",
          geoloc: latLng(45.128078, 5.589974),
          check: false,
        },
        {
          id: 2,
          name: "Office du tourisme",
          geoloc: latLng(45.129298, 5.584312),
          check: false,
        },
        {
          id: 3,
          name: "Hotel Val Fleuri",
          geoloc: latLng(45.129312, 5.58436),
          check: false,
        },
        {
          id: 4,
          name: "Hotel du col de l arc",
          geoloc: latLng(45.129412, 5.58446),
          check: false,
        },
      ],
    };
  },
  methods: {
    // addmarker: function (mark) {
    //   if (mark.check === true) {
    //     this.markers.push(mark);
    //   } else {
    //    const index= this.markers.findIndex((x)=>x.id===mark.id);
    // if(index === -1){return}this.markers.splice(index,1)
    //   }
    // },
  },
  computed: {},
  mounted() {
    scrollTo(0, 0);
  },
  props: ["view"],
};
</script>

<style lang="scss" scoped>
.image {
  width: 256px;
}
.check {
  padding: 5rem;
}

.maps {
  z-index: 3;
  border: 2px groove black;
}
label {
  font-size: 1.5em;
}
.v-enter-active {
  transition: opacity 0.8s ease;
}
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
