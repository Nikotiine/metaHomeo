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
        <div class="card" :class="{ isLarge: selected === 0 }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content" @click="selected = 0">
            <div class="content">Sauvergarde de la technique</div>
          </div>
        </div>
        <div class="card" :class="{ isLarge: selected === 1 }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content" @click="selected = 1">
            <div class="content">Recherche & Creation de dilutions</div>
          </div>
        </div>
        <div class="card" :class="{ isLarge: selected === 2 }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content" @click="selected = 2">
            <div class="content">Un Labo associatif : Quesaco ?</div>
          </div>
        </div>
      </div>
      <tech-nique v-if="selected === 0" />
      <dilu-tions v-if="selected === 1" />
      <quesa-co v-if="selected === 2" />
    </section>
  </div>
</template>

<script>
import techNique from "../components/labo/technique.vue";
import diluTions from "../components/labo/dilutions.vue";
import quesaCo from "../components/labo/quesaco.vue";
export default {
  name: "laboMain",
  components: { techNique, diluTions, quesaCo },
  data() {
    return {
      selected: null,
    };
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
.card-content:hover {
  background-color: aqua;
  cursor: pointer;
}
</style>
