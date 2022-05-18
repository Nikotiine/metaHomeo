<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head" id="formation">
        <p class="has-font-gabriola m-t-10">Les formations</p>
      </div>
      <div class="hero-body has-text-centered mb-5 m-t-8">
        <div class="is-flex mt-6 is-justify-content-space-around mb-5">
          <div class="max-width-35">
            <div class="">
              <p class="title has-text-primary">
                du texte pour presenter ta fomation sans pre requis
              </p>
              <p class="subtitle mt-5 has-text-primary">
                descrpition de la formation Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam cupiditate laboriosam at eum
                accusantium quia nobis architecto aperiam dolorum reiciendis
                porro et tempora voluptates, labore, atque ad libero ut
                consectetur.
              </p>
              <p class="subtitle has-text-primary">
                ainsi je vous explique la methode , suivez le guide ...
              </p>
            </div>
            <div class="mt-6 mb-3">
              <button-neon :btnName="bouton" :width="320" />
            </div>
          </div>
          <div class="max-width-35">
            <div class="">
              <p class="title has-text-primary">
                du texte pour presenter ta fomation avec pre requis
              </p>
              <p class="subtitle mt-5 has-text-primary">
                descrpition de la formation Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam cupiditate laboriosam at eum
                accusantium quia nobis architecto aperiam dolorum reiciendis
                porro et tempora voluptates, labore, atque ad libero ut
                consectetur.
              </p>
              <p class="subtitle has-text-primary">
                ainsi je vous explique la methode , suivez le guide ...
              </p>
            </div>
            <div class="mt-6 mb-3">
              <button-neon :btnName="bouton2" :width="320" />
            </div>
          </div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center mb-6 mt-6 downArrow">
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
@media screen and (max-width: 768px) {
  .is-flex {
    flex-direction: column;
  }
  .max-width-35 {
    max-width: 100%;
    margin-top: 3%;
  }
  .downArrow {
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .is-1 {
    font-size: 3rem !important;
  }
}
</style>
