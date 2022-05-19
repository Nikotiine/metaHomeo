<template>
  <section class="hero is-fullheight">
    <div class="home-body">
      <div class="container">
        <div class="container-labo">
          <div class="container-text m-t-3r">
            <h2 class="has-font-gabriola" id="labo">Le laboratoire</h2>
            <p class="has-text-secondary m-t-3r">
              c'est la page d'acceuil de Genesis , le liens du dessous t envoie
              sur la methode ainsi je vous explique la methode , suivez le guide
              ...
            </p>
          </div>
          <figure class="image width-45">
            <img src="../../assets/img/labo_gen.jpg" alt="photo du labo" />
          </figure>
        </div>
        <div class="m-t-8">
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
.container-labo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 1024px) {
  .container-labo {
    flex-direction: column-reverse;
    align-items: center;
  }
  .width-45 {
    width: 60%;
  }
}
@media screen and (max-width: 768px) {
  .width-45 {
    width: 100%;
  }
}
</style>
