<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head m-t-8">
        <div
          class="container has-text-centered is-flex is-align-items-center is-justify-content-space-around"
        >
          <div>
            <p class="title is-1 has-font-gabriola">Le Labo</p>
            <p class="subtitle mt-1">
              Presentation de la page principale du labo
            </p>
            <p class="subtitle">
              Sur chaque vignette vous pourrez decrouvrir en detail les
              techniquye utilisées
            </p>
          </div>
        </div>
      </div>
      <div class="hero-body is-justify-content-space-around">
        <div class="card box-shadow" :class="{ isLarge: view === 'technique' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo_gen.jpg" alt="photo du labo" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'technique' }"
          >
            <div class="content">
              <p class="subtitle" v-if="view === 'technique'">
                Sauvegarde de la technique
              </p>
              <button-neon
                :btnName="technique"
                :width="320"
                v-else
                @click="scrollInView"
              />
            </div>
          </div>
        </div>
        <div class="card box-shadow" :class="{ isLarge: view === 'dilutions' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/logo_dilution.jpg" alt="photo fioles" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'dilutions' }"
          >
            <div class="content">
              <p class="subtitle" v-if="view === 'dilutions'">
                Recherche et creations
              </p>
              <button-neon
                :btnName="dilutions"
                :width="320"
                v-else
                @click="scrollInView"
              />
            </div>
          </div>
        </div>
        <div class="card box-shadow" :class="{ isLarge: view === 'quesaco' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/quesaco.jpg" alt="logo genesis" />
            </figure>
          </div>
          <div class="card-content" :class="{ isSelected: view === 'quesaco' }">
            <div class="content">
              <p class="subtitle" v-if="view === 'quesaco'">
                Qu'est qu'un labo associatif
              </p>
              <button-neon
                :btnName="quesaco"
                :width="320"
                v-else
                @click="scrollInView"
              />
            </div>
          </div>
        </div>
      </div>
      <Transition> <tech-nique v-if="view === 'technique'" /></Transition>
      <Transition><dilu-tions v-if="view === 'dilutions'" /></Transition>
      <Transition> <quesa-co v-if="view === 'quesaco'" /></Transition>
    </section>
  </div>
</template>

<script>
import buttonNeon from "../components/button.vue";
import techNique from "../components/labo/technique.vue";
import diluTions from "../components/labo/dilutions.vue";
import quesaCo from "../components/labo/quesaco.vue";
export default {
  name: "laboView",
  components: { techNique, diluTions, quesaCo, buttonNeon },
  props: ["view"],
  data() {
    return {
      showBtn: false,
      quesaco: [
        {
          id: 0,
          name: "Quesaco",
          router: {
            name: "labo",
            params: { view: "quesaco" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      dilutions: [
        {
          id: 0,
          name: "dilutions",
          router: {
            name: "labo",
            params: { view: "dilutions" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      technique: [
        {
          id: 0,
          name: "technique",
          router: {
            name: "labo",
            params: { view: "technique" },
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
  created() {},
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 25%;
}
.isLarge {
  min-width: 35%;
  transition: 800ms ease;
}
.isSelected {
  background-color: rgb(55 210 244 / 50%);
}
// .is-fullheight {
//   background-image: url("/Users/niko/naturo/front/src/assets/testlabo.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// }
.max50 {
  max-width: 45%;
}
.has-background-labo {
  // background-image: url("/Users/niko/naturo/front/src/assets/backquesaca.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
