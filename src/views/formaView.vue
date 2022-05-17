<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <p class="title is-1 has-font-gabriola">Les formations</p>
          <p class="subtitle mt-5">
            Presentation de la page principale des formations
          </p>
          <p class="title">Pareil du texte pour chaque formation ...</p>
        </div>
      </div>
      <div class="hero-body is-justify-content-space-around">
        <div
          class="card box-shadow"
          :class="{ isLarge: view === 'ouverte-a-tous' }"
        >
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="salle de formation" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'ouverte-a-tous' }"
          >
            <div class="content">
              <p class="subtitle" v-if="view === 'ouverte-a-tous'">
                Formation sans pre-requis de diplome
              </p>
              <button-neon
                :btnName="formationSans"
                :width="320"
                @click="scrollInView"
                v-else
              />
            </div>
          </div>
        </div>
        <div
          class="card box-shadow"
          :class="{ isLarge: view === 'salle-de-formation' }"
        >
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/img/lieu_formation.jpg" alt="le cairn" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'salle-de-formation' }"
          >
            <div class="content">
              <p class="subtitle" v-if="view === 'salle-de-formation'">
                Presentation du cairn
              </p>
              <button-neon
                :btnName="leCairn"
                :width="420"
                @click="scrollInView"
                v-else
              />
            </div>
          </div>
        </div>
        <div class="card box-shadow" :class="{ isLarge: view === 'pro-sante' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="../assets/img/formation.jpeg"
                alt="salle de formation"
              />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'pro-sante' }"
          >
            <div class="content">
              <p class="subtitle" v-if="view === 'pro-sante'">
                Formation Pour les professionels de sante
              </p>
              <button-neon
                :btnName="formationPro"
                :width="320"
                @click="scrollInView"
                v-else
              />
            </div>
          </div>
        </div>
      </div>
      <Transition><forma-pro v-if="view === 'pro-sante'" /> </Transition>
      <Transition><forma-sans v-if="view === 'ouverte-a-tous'" /></Transition>
      <Transition
        ><lieu-formation v-if="view === 'salle-de-formation'"
      /></Transition>
    </section>
  </div>
</template>

<script>
import buttonNeon from "../components/button.vue";
import formaPro from "../components/formation/formapro.vue";
import formaSans from "../components/formation/formasans.vue";
import lieuFormation from "../components/formation/lieuFormation.vue";
export default {
  name: "formaView",
  components: { formaPro, formaSans, buttonNeon, lieuFormation },
  props: ["view"],
  data() {
    return {
      formationSans: [
        {
          id: 0,
          name: "Sans pre-requis",
          router: {
            name: "formations",
            params: { view: "ouverte-a-tous" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      formationPro: [
        {
          id: 0,
          name: "Avec Pre-requis",
          router: {
            name: "formations",
            params: { view: "pro-sante" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      leCairn: [
        {
          id: 0,
          name: "Lieu de formation",
          router: {
            name: "formations",
            params: { view: "salle-de-formation" },
          },
          width: "420px",
          strokeDasharray1: 140,
          strokeDasharray2: 600,
          strokeDashoffset: -600,
          dashHover: 960,
        },
      ],
    };
  },
  methods: {
    scrollInView: function () {
      setTimeout(() => {
        document.getElementById("title").scrollIntoView({ behavior: "smooth" });
      }, 800);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 10%;
}
.card {
  min-width: 25%;
}
.isLarge {
  min-width: 35%;
  transition: 800ms ease;
}
.isSelected {
  background-color: aqua;
}
@media screen and (max-width: 1024px) {
  .card {
    margin-top: 3%;
  }
  .hero-body {
    flex-wrap: wrap;
  }
  .isLarge {
    min-width: 50%;
    transition: 800ms ease;
  }
}
</style>
