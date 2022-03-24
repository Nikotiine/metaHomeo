<template>
  <div>
    <section class="hero is-danger is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <p class="title">Le labo</p>
          <p class="subtitle mt-5">
            Presentation de la page principale du labo
          </p>
          <p class="subtitle">
            Sur chaque vignette vous pourrez decrouvrir en detail les techniquye
            utilisées
          </p>
        </div>
      </div>
      <div class="hero-body is-justify-content-space-around">
        <div class="card" :class="{ isLarge: view === 'technique' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'technique' }"
          >
            <div class="content">
              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'technique' },
                }"
                >Sauvegarde de la technique</router-link
              >
            </div>
          </div>
        </div>
        <div class="card" :class="{ isLarge: view === 'dilutions' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'dilutions' }"
          >
            <div class="content">
              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'dilutions' },
                }"
                >Recherche et création de dilutions</router-link
              >
            </div>
          </div>
        </div>
        <div class="card" :class="{ isLarge: view === 'quesaco' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content" :class="{ isSelected: view === 'quesaco' }">
            <div class="content">
              <router-link
                :to="{
                  name: 'labo',
                  params: { view: 'quesaco' },
                }"
                >Un laboratoire associatif : quesaco ?</router-link
              >
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
import techNique from "../components/labo/technique.vue";
import diluTions from "../components/labo/dilutions.vue";
import quesaCo from "../components/labo/quesaco.vue";
export default {
  name: "laboView",
  components: { techNique, diluTions, quesaCo },
  props: ["view"],
  data() {
    return {};
  },
  methods: {},
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
.card-content:hover {
  background-color: aqua;
  cursor: pointer;
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
