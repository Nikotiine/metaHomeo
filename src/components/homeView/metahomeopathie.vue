<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <!-- <p class="title is-1">Genesis Meta-Homeopathie</p> -->
          <div class="is-flex mt-6 is-justify-content-space-between">
            <figure class="image max50">
              <img src="../../assets/meta.jpeg" />
            </figure>

            <div class="is-flex is-justify-content-space-between max50">
              <div class="mt-6">
                <div class="box box-shadow gradientBackGround">
                  <p class="subtitle">
                    Depuis 10 ans j'utilise la methode Meta-Homeopathie Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Totam
                    cupiditate laboriosam at eum accusantium quia nobis
                    architecto aperiam dolorum reiciendis porro et tempora
                    voluptates, labore, atque ad libero ut consectetur.
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
          </div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center mb-6">
        <img
          class="image is-96x96 cursor"
          src="../../assets/images.png"
          alt=""
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
.title {
  margin-top: 7%;
}
.max50 {
  max-width: 45%;
}
</style>
