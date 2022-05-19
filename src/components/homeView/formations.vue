<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head" id="formation">
        <p class="has-font-gabriola m-t-10">Les formations</p>
      </div>
      <div class="home-body mb-5 m-t-8">
        <div class="container-formation">
          <div class="container-text">
            <h3 class="has-text-secondary is-title">
              Fomation sans pre requis
            </h3>
            <p class="has-text-secondary m-t-3r">
              descrpition de la formation Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam cupiditate laboriosam at eum accusantium
              quia nobis architecto aperiam dolorum reiciendis porro et tempora
              voluptates, labore, atque ad libero ut consectetur.
            </p>

            <div class="mt-6 mb-3">
              <button-neon :btnName="bouton" :width="320" />
            </div>
          </div>
          <div class="container-text">
            <h3 class="has-text-secondary is-title">
              Fomation avec pre requis
            </h3>
            <p class="has-text-secondary m-t-3r">
              descrpition de la formation Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam cupiditate laboriosam at eum accusantium
              quia nobis architecto aperiam dolorum reiciendis porro et tempora
              voluptates, labore, atque ad libero ut consectetur.
            </p>

            <div class="mt-6 mb-3">
              <button-neon :btnName="bouton2" :width="320" />
            </div>
          </div>
        </div>
      </div>
      <div class="down-arrow">
        <img
          class="image is-96x96 cursor"
          src="../../assets/images.png"
          alt="fleches descendantes"
          @click="scrollDown"
        />
      </div>
    </section>
  </div>
</template>

<script>
import buttonNeon from "../button.vue";
export default {
  name: "formationView",
  components: { buttonNeon },
  props: ["next"],
  methods: {
    scrollDown: function () {
      this.$emit("nextView", "aboutUs");
    },
  },
  data() {
    return {
      bouton: [
        {
          id: 0,
          name: "Sans Pre-requis",
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
      bouton2: [
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
    };
  },
};
</script>

<style lang="scss" scoped>
.container-formation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
@media screen and (max-width: 768px) {
  .container-formation {
    flex-direction: column;
    align-items: center;
  }
  .max-width-35 {
    max-width: 100%;
    margin-top: 3%;
  }
}
</style>
