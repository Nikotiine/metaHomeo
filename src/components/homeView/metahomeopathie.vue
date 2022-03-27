<template>
  <div>
    <section class="hero is-fullheight gradientBackGround">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title is-1 box box-shadow">Genesis Meta-Homeopathie</p>
          <div class="is-flex is-justify-content-space-between">
            <figure class="image is-128x128">
              <img class="is-rounded" src="../../assets/bracelet.jpeg" />
            </figure>
            <figure class="image is-128x128">
              <img class="is-rounded" src="../../assets/staff.png" />
            </figure>
            <figure class="image is-128x128">
              <img class="is-rounded" src="../../assets/bracelet2.jpeg" />
            </figure>
          </div>
          <div class="box box-shadow mt-6">
            <p class="subtitle">
              Depuis 10 ans j'utilise la methode Meta-Homeopathie Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Totam cupiditate
              laboriosam at eum accusantium quia nobis architecto aperiam
              dolorum reiciendis porro et tempora voluptates, labore, atque ad
              libero ut consectetur.
            </p>
            <p class="subtitle">
              ainsi je vous explique la methode , suivez le guide ...
            </p>
            <div class="mt-6">
              <a class="button is-info is-outlined"
                ><router-link to="/metahomeopathie"
                  >Decouvrir: La methode</router-link
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "metaHomeo",
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 7%;
}
</style>
