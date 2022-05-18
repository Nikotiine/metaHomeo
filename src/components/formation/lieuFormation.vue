<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="has-font-gabriola m-t-10" id="title">le cairn</p>
      <p class="subtitle">
        Situe dans le parc regional du Vercors blablabla il fait beau ya dla
        biere et du fromage
      </p>
    </div>
    <div class="body">
      <figure class="image">
        <img src="../../assets/img/vue_lans_en_vercors.jpg" alt="" />
      </figure>
      <figure class="image">
        <img src="../../assets/img/le_cairn_ext.webp" alt="" />
      </figure>
      <figure class="image">
        <img src="../../assets/img/formation.jpeg" alt="" />
      </figure>
      <figure class="image">
        <img src="../../assets/img/le_cairn_devant.jpg" alt="" />
      </figure>
      <figure class="image">
        <img src="../../assets/lecairn.jpeg" alt="Placeholder image" />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: "lieuFormation",
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 800);
  },
};
</script>

<style lang="scss" scoped>
.image {
  max-width: 480px;
}
.body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "ext ext ext"
    "devant vue salle"
    "logo logo logo";
}
.image:nth-child(1) {
  grid-area: vue;
}
.image:nth-child(2) {
  grid-area: ext;
  margin: auto;
}
.image:nth-child(3) {
  grid-area: salle;
  margin-left: 1rem;
}
.image:nth-child(4) {
  grid-area: devant;
  margin-right: 1rem;
}
.image:nth-child(5) {
  grid-area: logo;
  margin: auto;
  max-width: 256px;
  cursor: pointer;
}
</style>
