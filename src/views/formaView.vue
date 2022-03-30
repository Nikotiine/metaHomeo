<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <p class="title">Les formations</p>
          <p class="subtitle mt-5">
            Presentation de la page principale des formations
          </p>
          <p class="subtitle">
            Nous vous proposons 2 type de formations , aouverte a tout publqiue
            desirant se forame a la methode , ou a un publique deja
            professonelel de la sante
          </p>
        </div>
      </div>
      <div class="hero-body is-justify-content-space-around">
        <div class="card" :class="{ isLarge: view === 'ouverte-a-tous' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'ouverte-a-tous' }"
          >
            <div class="content">
              <router-link
                :to="{
                  name: 'formations',
                  params: { view: 'ouverte-a-tous' },
                }"
                >formations sans prerequis</router-link
              >
            </div>
          </div>
        </div>
        <div class="card" :class="{ isLarge: view === 'pro-sante' }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div
            class="card-content"
            :class="{ isSelected: view === 'pro-sante' }"
          >
            <div class="content">
              <router-link
                :to="{
                  name: 'formations',
                  params: { view: 'pro-sante' },
                }"
                >formation pour les pro</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <Transition><forma-pro v-if="view === 'pro-sante'" /> </Transition>
      <Transition><forma-sans v-if="view === 'ouverte-a-tous'" /></Transition>
    </section>
  </div>
</template>

<script>
import formaPro from "../components/formation/formapro.vue";
import formaSans from "../components/formation/formasans.vue";
export default {
  name: "formaView",
  components: { formaPro, formaSans },
  props: ["view"],
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
