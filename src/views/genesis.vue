<template>
  <div>
    <div>
      <section class="hero is-fullheight">
        <div class="hero-head m-t-10">
          <div class="container-head">
            <h1 class="has-font-gabriola">Qui sommes nous ?</h1>
            <figure class="image is-48X48">
              <img src="../assets/staff.png" alt="Placeholder image" />
            </figure>

            <h3 class="has-text-secondary is-title m-t-3r">
              Presentation de la page principale des formations
            </h3>
            <p class="has-text-secondary">
              Pareil du texte pour chaque formation ...
            </p>
          </div>
        </div>
        <div class="hero-body mt-6 findUs">
          <div
            class="container has-text-centered is-flex is-justify-content-center"
          >
            <div class="container-find">
              <p class="has-font-gabriola-sub mb-6">Ou trouver ...</p>

              <label
                class="checkbox m-2"
                v-for="checkboxe in markers"
                :key="checkboxe.id"
              >
                <input type="checkbox" class="" v-model="checkboxe.check" />

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
            <div class="mt-6">
              <button-neon :btnName="contact" :width="320" />
            </div>
            <Transition>
              <contact-us v-if="view === 'contactUs'" />
            </Transition>
            <div class="mt-6">
              <button-neon :btnName="praticiens" :width="320" />
            </div>
            <Transition>
              <all-praticiens v-if="view === 'tous-les-praticiens'" />
            </Transition>
            <p class="has-font-gabriola-sub">Nos Partenaires</p>
            <div class="container-partenaire">
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

      markers: [
        {
          id: 0,
          name: "Le cabinet",
          adresse: "51 Av. Léopold Fabre Lans en vercors",
          telephone: "0681389671",
          geoloc: latLng(45.127699, 5.589008),
          check: true,
          icon: require("../assets/iconeMaps/cabmed.png"),
          iconSize: [32, 32],
        },
        {
          id: 1,
          name: "La salle de seminiare",
          adresse: "180 Rue des Écoles, 38250 Lans-en-Vercors",
          telephone: "0681389671",
          geoloc: latLng(45.128078, 5.589974),
          check: true,
          icon: require("../assets/iconeMaps/salle.png"),
          iconSize: [32, 32],
        },
        {
          id: 2,
          name: "Office du tourisme",
          geoloc: latLng(45.129298, 5.584312),
          check: true,
          icon: require("../assets/iconeMaps/info.png"),
          iconSize: [32, 32],
        },
        {
          id: 3,
          name: "Hotel Val Fleuri",
          geoloc: latLng(45.129312, 5.58436),
          check: true,
          icon: require("../assets/iconeMaps/hotel1.png"),
          iconSize: [32, 32],
        },
        {
          id: 4,
          name: "Hotel du col de l arc",
          geoloc: latLng(45.129412, 5.58446),
          check: true,
          icon: require("../assets/iconeMaps/hotel2.png"),
          iconSize: [32, 32],
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
.blue {
  color: blue;
}
.close-view {
  position: absolute;
}
.has-font-gabriola-sub {
  padding: 3rem 0 1rem 0;
}
.container-partenaire {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5%;
}
.image {
  width: 256px;
}
.container-find {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.maps {
  height: 50vh;
  width: 50vw;
}
label {
  font-size: 1.5em;
}
@media screen and (max-width: 1024px) {
  .container-find {
    padding: 1rem 5rem 0 0;
    & p {
      font-size: 2rem;
    }
  }
  label {
    font-size: 1em;
  }
  .maps {
    width: 45vw;
    height: 45vh;
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
  .container-find {
    max-height: 20vh;
    flex-direction: row;
    padding: 1rem;
    align-items: flex-end;
    margin-top: 2%;

    & p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -30%;
    }
  }

  .container-partenaire {
    flex-direction: column;
    align-items: center;
    & figure {
      margin: 2% 0;
    }
  }
}
@media screen and (max-width: 480px) {
  .m-t-10 {
    margin-top: 22%;
  }
  .maps {
    height: 35vh;
  }
  .container-find {
    flex-wrap: wrap;
  }
}
</style>
