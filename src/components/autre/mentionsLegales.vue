<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Mentions Legales</p>
      <button class="button is-outlined is-primary" @click="back">
        retour
      </button>
    </div>
    <div class="hero-body is-flex is-justify-content-center">
      <div class="">
        <p class="subtitle">ici les Mentions Legales</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mentionsLegales",
  methods: {
    back: function () {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped></style>
