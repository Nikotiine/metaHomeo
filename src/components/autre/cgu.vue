<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Conditions generales d'utilisation</p>
      <router-link
        class="button is-primary is-outlined"
        :to="{
          name: 'aboutUs',
          params: { view: 'contactUs' },
        }"
      >
        <strong>Revenir au formulaire</strong>
      </router-link>
    </div>
    <div class="hero-body is-flex is-justify-content-center">
      <div class="">
        <p class="subtitle">ici les cug</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cGu",
};
</script>

<style lang="scss" scoped></style>
