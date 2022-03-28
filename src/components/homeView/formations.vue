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
          <div class="gradientBackGround max50">
            <p class="title">Une formation sans pre-requis</p>
            <p class="subtitle mt-5">
              descrpition de la formation Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam cupiditate laboriosam at eum accusantium
              quia nobis architecto aperiam dolorum reiciendis porro et tempora
              voluptates, labore, atque ad libero ut consectetur.
            </p>
            <p class="subtitle">
              ainsi je vous explique la methode , suivez le guide ...
            </p>
            <div class="mt-6 mb-3">
              <a class="button is-info is-outlined"
                ><router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'accueil' },
                  }"
                  >Decouvrir: Le labo</router-link
                >
              </a>
            </div>
          </div>
          <div class="gradientBackGround max50">
            <p class="title">Une formation avec pre-requis</p>
            <p class="subtitle mt-5">
              descrpition de la formation Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam cupiditate laboriosam at eum accusantium
              quia nobis architecto aperiam dolorum reiciendis porro et tempora
              voluptates, labore, atque ad libero ut consectetur.
            </p>
            <p class="subtitle">
              ainsi je vous explique la methode , suivez le guide ...
            </p>
            <div class="mt-6 mb-3">
              <a class="button is-info is-outlined"
                ><router-link
                  :to="{
                    name: 'labo',
                    params: { view: 'accueil' },
                  }"
                  >Decouvrir: Le labo</router-link
                >
              </a>
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
export default {
  name: "formationView",
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
