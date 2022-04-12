<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10" id="title">
        Retrouver ici la liste de tous nos praticiens
      </p>
    </div>
    <div class="hero-body is-justify-content-space-around">
      <div class="is-flex is-flex-direction-column">
        <p class="title">liste des particiens</p>

        <label
          class="checkbox m-2"
          v-for="praticien in allPraticiens"
          :key="praticien.id"
        >
          <input type="checkbox" />
          {{ praticien.firstName }} {{ praticien.lastName }}
        </label>
      </div>
      <mapsLeaflet :heightMaps="50" :widthMaps="45" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import mapsLeaflet from "./maps.vue";
export default {
  name: "allPraticiens",
  components: { mapsLeaflet },
  data() {
    return {
      allPraticiens: [],
    };
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
    axios
      .get("public/praticiens")
      .then((res) => (this.allPraticiens = res.data));
  },
};
</script>

<style lang="scss" scoped></style>
