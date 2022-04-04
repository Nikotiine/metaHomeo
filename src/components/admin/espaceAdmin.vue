<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Ton dashboard</p>
    </div>
    <div class="hero-body is-justify-content-space-around">
      <div>
        <p class="subtitle">tu as ... de membre enregisté</p>
        <button class="button is-primary is-light">voir les profils</button>
        <button-neon :btnName="ajoutPraticien" :width="320" />
      </div>
      <div class="">
        <p class="subtitle">tu as ... de produits enregisté</p>
        <button class="button is-primary is-light">voir la liste</button>
        <button-neon :btnName="ajoutProduit" :width="320" />
      </div>
    </div>
  </section>
</template>

<script>
import buttonNeon from "../button.vue";
export default {
  name: "espaceAdmin",
  components: {
    buttonNeon,
  },
  data() {
    return {
      ajoutPraticien: [
        {
          id: 0,
          name: "Nouveau membre ",
          router: {
            name: "espace-admin",
            params: { view: "nouveau-membre" },
          },
          width: "320px",
          strokeDasharray1: 140,
          strokeDasharray2: 540,
          strokeDashoffset: -474,
          dashHover: 760,
        },
      ],
      ajoutProduit: [
        {
          id: 0,
          name: "Ajouter produit ",
          router: {
            name: "espace-admin",
            params: { view: "nouveau-produit" },
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
};
</script>

<style lang="scss" scoped></style>
