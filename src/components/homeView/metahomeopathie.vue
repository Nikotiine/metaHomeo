<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div
            class="is-flex mt-6 is-justify-content-space-between is-align-items-center"
          >
            <figure class="image max-width-50">
              <img src="../../assets/img/logo_meta.png" alt="Logo Genesis" />
            </figure>

            <div class="is-flex is-justify-content-space-between max-width-45">
              <div class="mt-6">
                <div class="box box-shadow gradientBackGround">
                  <p class="title is-2">Ici du texte pour presenter ton site</p>
                  <p class="subtitle">
                    c'est la page d'acceuil de Genesis , le liens du dessous t
                    envoie sur la methode ainsi je vous explique la methode ,
                    suivez le guide ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="m-t-8">
            <button-neon :btnName="bouton" :width="320" />
          </div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center mb-6 downArrow">
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
  name: "metaHomeo",
  components: { buttonNeon },
  data() {
    return {
      bouton: [
        {
          id: 0,
          name: "la methode",
          router: "/metahomeopathie",
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
      this.$emit("nextView", "labo");
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
  .is-flex {
    flex-direction: column;
  }
  .max-width-45 {
    max-width: 100%;
  }
  .downArrow {
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .max-width-50 {
    max-width: 80%;
  }
  .mt-6 {
    margin-top: 0 !important;
  }
}
@media screen and (max-width: 480px) {
  .max-width-45 {
    max-width: 100%;
  }
  .hero-body {
    padding: 0;
  }
}
</style>
