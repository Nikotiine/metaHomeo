<template>
  <div>
    <div>
      <section class="hero is-fullheight">
        <div class="hero-head">
          <div class="">
            <p class="title m-t-10 is-1 has-font-gabriola">Qui sommes nous ?</p>
            <div
              class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-evenly mt-6"
            >
              <figure class="image">
                <img src="../assets/staff.png" />
              </figure>
              <p class="title mt-5">
                Quelque mot pour te presenter + une photo sympa de toi
              </p>
            </div>
          </div>
        </div>
        <div class="hero-body mt-6 findUs">
          <div
            class="container has-text-centered is-flex is-justify-content-center"
          >
            <div
              class="is-flex-direction-column is-flex is-align-items-flex-start check"
            >
              <p class="title mb-6">Ou trouver ...</p>

              <label
                class="checkbox m-2 hidden"
                v-for="checkboxe in markers"
                :key="checkboxe.id"
              >
                <input
                  type="checkbox"
                  class="hidden"
                  v-model="checkboxe.check"
                />
                {{ checkboxe.name }}
              </label>
            </div>
          </div>
          <div class="">
            <maps-leaflet class="maps" :markers="markers" />
          </div>
        </div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title mt-6">
              <button-neon :btnName="contact" :width="320" />
            </p>
            <Transition>
              <contact-us v-if="view === 'contactUs'" />
            </Transition>
            <p class="title mt-6">
              <button-neon :btnName="praticiens" :width="420" />
            </p>
            <Transition>
              <all-praticiens v-if="view === 'tous-les-praticiens'" />
            </Transition>
            <p class="title">Nos Partenaires</p>
            <div class="is-flex is-justify-content-space-evenly mt-6">
              <figure class="image is-48X48">
                <img src="../assets/lecairn.jpeg" alt="Placeholder image" />
              </figure>
              <figure class="image is-48X48">
                <img src="../assets/lansot.jpeg" alt="Placeholder image" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import allPraticiens from "../components/genesis/allPraticiens.vue";
import buttonNeon from "../components/button.vue";
import { latLng } from "leaflet";
import contactUs from "../components/genesis/contact.vue";
import mapsLeaflet from "../components/genesis/maps.vue";
export default {
  name: "genesisTeam",
  components: { mapsLeaflet, contactUs, buttonNeon, allPraticiens },
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
      praticiens: [
        {
          id: 0,
          name: "tous les praticiens",
          router: {
            name: "aboutUs",
            params: { view: "tous-les-praticiens" },
          },
          width: "420px",
          strokeDasharray1: 140,
          strokeDasharray2: 600,
          strokeDashoffset: -600,
          dashHover: 960,
        },
      ],

      markers: [
        {
          id: 0,
          name: "Le cabinet",
          adresse: "51 Av. Léopold Fabre Lans en vercors",
          telephone: "0681389671",
          geoloc: latLng(45.127699, 5.589008),
          check: true,
        },
        {
          id: 1,
          name: "La salle de seminiare",
          adresse: "180 Rue des Écoles, 38250 Lans-en-Vercors",
          telephone: "0681389671",
          geoloc: latLng(45.128078, 5.589974),
          check: true,
        },
        {
          id: 2,
          name: "Office du tourisme",
          geoloc: latLng(45.129298, 5.584312),
          check: true,
        },
        {
          id: 3,
          name: "Hotel Val Fleuri",
          geoloc: latLng(45.129312, 5.58436),
          check: true,
        },
        {
          id: 4,
          name: "Hotel du col de l arc",
          geoloc: latLng(45.129412, 5.58446),
          check: true,
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
  height: 75vh;
  width: 50vw;
}
label {
  font-size: 1.5em;
}
@media screen and (max-width: 1024px) {
  .check {
    padding: 1rem 5rem 0 0;
  }
  label {
    font-size: 1em;
  }
  .maps {
    width: 45vw;
  }
  .hero-body {
    padding: 0;
  }
}
@media screen and (max-width: 768px) {
  .findUs {
    display: block !important;
  }
  .maps {
    margin: auto;
  }
  .hidden {
    display: none;
  }
  .check {
    padding: 0;
    & p {
      font-size: 1.5rem;
    }
  }
}
</style>
