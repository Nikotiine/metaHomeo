<template>
  <section class="hero is-fullheight">
    <div class="hero-head m-t-10">
      <div class="container-head">
        <h1 class="has-font-gabriola">Les formations</h1>
        <h3 class="has-text-secondary is-title m-t-3r">
          Presentation de la page principale des formations
        </h3>
        <p class="has-text-secondary">
          Pareil du texte pour chaque formation ...
        </p>
      </div>
    </div>
    <div class="labo-body">
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
            <p class="has-font-gabriola-sub" v-if="view === 'ouverte-a-tous'">
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
            <p
              class="has-font-gabriola-sub"
              v-if="view === 'salle-de-formation'"
            >
              Presentation du cairn
            </p>
            <button-neon
              :btnName="leCairn"
              :width="320"
              @click="scrollInView"
              v-else
            />
          </div>
        </div>
      </div>
      <div class="card box-shadow" :class="{ isLarge: view === 'pro-sante' }">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../assets/img/formation.jpeg" alt="salle de formation" />
          </figure>
        </div>
        <div class="card-content" :class="{ isSelected: view === 'pro-sante' }">
          <div class="content">
            <p class="has-font-gabriola-sub" v-if="view === 'pro-sante'">
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
          name: "Le Cairn",
          router: {
            name: "formations",
            params: { view: "salle-de-formation" },
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
.card {
  min-width: 30%;
  margin-left: 2%;
  margin-right: 2%;
}
.isLarge {
  min-width: 35%;
  transition: 800ms ease;
}

.card-content {
  padding: 0;
}
.isSelected {
  padding: 2.5rem;
}
@media screen and (max-width: 1024px) {
  .card {
    margin-top: 3%;
  }

  .isLarge {
    min-width: 50%;
    transition: 800ms ease;
  }
  .m-t-10 {
    margin-top: 20%;
  }
}
</style>
