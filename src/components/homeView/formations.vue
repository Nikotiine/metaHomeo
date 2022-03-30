<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <p class="title is-1">Genesis Les formations</p>
        <div class="is-flex is-justify-content-space-around">
          <img class="image is-128x128" src="../../assets/ccurve.png" alt="" />
          <img class="image is-128x128" src="../../assets/bcurve.png" alt="" />
        </div>
      </div>
      <div class="hero-body has-text-centered mb-5">
        <div class="is-flex mt-6 is-justify-content-space-between mb-5">
          <div class="max50">
            <div class="box box-shadow gradientBackGround">
              <p class="title">Une formation sans pre-requis</p>
              <p class="subtitle mt-5">
                descrpition de la formation Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam cupiditate laboriosam at eum
                accusantium quia nobis architecto aperiam dolorum reiciendis
                porro et tempora voluptates, labore, atque ad libero ut
                consectetur.
              </p>
              <p class="subtitle">
                ainsi je vous explique la methode , suivez le guide ...
              </p>
            </div>
            <div class="mt-6 mb-3">
              <button-neon :btnName="bouton" :width="320" />
            </div>
          </div>
          <div class="max50">
            <div class="box box-shadow gradientBackGround">
              <p class="title">Une formation avec pre-requis</p>
              <p class="subtitle mt-5">
                descrpition de la formation Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam cupiditate laboriosam at eum
                accusantium quia nobis architecto aperiam dolorum reiciendis
                porro et tempora voluptates, labore, atque ad libero ut
                consectetur.
              </p>
              <p class="subtitle">
                ainsi je vous explique la methode , suivez le guide ...
              </p>
            </div>
            <div class="mt-6 mb-3">
              <button-neon :btnName="bouton2" :width="320" />
            </div>
          </div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center mb-6 mt-6">
        <img class="image is-96x96" src="../../assets/images.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import buttonNeon from "../button.vue";
export default {
  name: "formationView",
  components: { buttonNeon },
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
.title {
  margin-top: 7%;
}
.max50 {
  max-width: 45%;
}
</style>
