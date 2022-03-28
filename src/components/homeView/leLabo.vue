<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head"><p class="title is-1">Genesis Le labo</p></div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex mt-6 is-justify-content-space-between">
            <div
              class="is-flex is-justify-content-space-between box gradientBackGround max50"
            >
              <div class="mt-6">
                <p class="subtitle">
                  descrpition du labo Meta-Homeopathie Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Totam cupiditate laboriosam
                  at eum accusantium quia nobis architecto aperiam dolorum
                  reiciendis porro et tempora voluptates, labore, atque ad
                  libero ut consectetur.
                </p>
                <p class="subtitle">
                  ainsi je vous explique la methode , suivez le guide ...
                </p>
                <div class="mt-6">
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
export default {
  name: "homeLabo",
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
