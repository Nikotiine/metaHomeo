<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="container-meta">
          <figure class="image width-45">
            <img src="../../assets/img/logo_meta.png" alt="Logo Genesis" />
          </figure>

          <div class="container-text m-t-3r">
            <h1 class="has-font-gabriola">MetaHomeopathie</h1>
            <p class="has-text-secondary m-t-3r">
              c'est la page d'acceuil de Genesis , le liens du dessous t envoie
              sur la methode ainsi je vous explique la methode , suivez le guide
              ...
            </p>
          </div>
        </div>
        <div class="m-t-5r">
          <button-neon :btnName="bouton" :width="320" />
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
.container-meta {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8%;
}

@media screen and (max-width: 1024px) {
  .container-meta {
    flex-direction: column;
    margin-top: 5%;
  }
}
@media screen and (max-width: 480px) {
  .container-meta {
    margin-top: 8%;
    width: 100%;
  }
}
</style>
