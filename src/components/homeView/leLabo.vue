<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <p class="m-t-10 has-font-gabriola" id="labo">Le laboratoire</p>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="container-labo">
            <div class="container-labo width-45">
              <div class="">
                <p class="title is-2 has-text-primary">
                  Ici du texte pour presenter ton site
                </p>
                <p class="subtitle has-text-primary">
                  La c'est le resume du labo ...
                </p>
                <p class="subtitle has-text-primary">donc reusme du labo :p</p>
              </div>
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
@media screen and (max-width: 480) {
  .hero-body {
    padding: 0;
  }
}
</style>
