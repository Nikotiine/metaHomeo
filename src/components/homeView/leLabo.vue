<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <p class="title m-t-10 is-1 has-font-gabriola" id="labo">
          Genesis Le labo
        </p>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex mt-4 is-justify-content-space-between">
            <div class="is-flex is-justify-content-space-between max-width-45">
              <div class="mt-6">
                <div class="box gradientBackGround box-shadow">
                  <p class="title is-2">Ici du texte pour presenter ton site</p>
                  <p class="subtitle">La c'est le resume du labo ...</p>
                  <p class="subtitle">donc reusme du labo :p</p>
                </div>
                <div class="mt-6">
                  <button-neon :btnName="bouton" :width="320" />
                </div>
              </div>
            </div>
            <figure class="image max-width-50">
              <img src="../../assets/img/labo_gen.jpg" alt="photo du labo" />
            </figure>
          </div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center">
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
  name: "homeLabo",
  components: { buttonNeon },
  props: ["next"],
  data() {
    return {
      bouton: [
        {
          id: 0,
          name: "le labo",
          router: {
            name: "labo",
            params: { view: "accueil" },
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
  methods: {
    scrollDown: function () {
      this.$emit("nextView", "formation");
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
  .is-flex {
    flex-direction: column-reverse;
    align-items: center;
  }
  .max-width-45 {
    max-width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .max-width-50 {
    max-width: 80%;
  }
}
@media screen and (max-width: 768px) {
  .is-1 {
    font-size: 3rem !important;
  }
}
</style>
