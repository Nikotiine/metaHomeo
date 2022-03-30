<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head"><p class="title is-1">Genesis Le labo</p></div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex mt-6 is-justify-content-space-between">
            <div class="is-flex is-justify-content-space-between max50">
              <div class="mt-6">
                <div class="box gradientBackGround box-shadow">
                  <p class="subtitle">
                    descrpition du labo Meta-Homeopathie Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Totam cupiditate
                    laboriosam at eum accusantium quia nobis architecto aperiam
                    dolorum reiciendis porro et tempora voluptates, labore,
                    atque ad libero ut consectetur.
                  </p>
                  <p class="subtitle">
                    ainsi je vous explique la methode , suivez le guide ...
                  </p>
                </div>
                <div class="mt-6">
                  <button-neon :btnName="bouton" :width="320" />
                </div>
              </div>
            </div>
            <figure class="image max50">
              <img src="../../assets/labo.jpeg" />
            </figure>
          </div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center">
        <img class="image is-96x96" src="../../assets/images.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import buttonNeon from "../button.vue";
export default {
  name: "homeLabo",
  components: { buttonNeon },
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
