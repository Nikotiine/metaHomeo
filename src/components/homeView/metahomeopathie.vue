<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title is-1">Genesis Meta-Homeopathie</p>
          <p class="subtitle">
            Depuis 10 ans j'utilise la methode Meta-Homeopathie Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Totam cupiditate
            laboriosam at eum accusantium quia nobis architecto aperiam dolorum
            reiciendis porro et tempora voluptates, labore, atque ad libero ut
            consectetur.
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
    </section>
  </div>
</template>

<script>
export default {
  name: "metaHomeo",
};
</script>

<style lang="scss" scoped>
.title:not(.is-spaced) + .subtitle {
  margin-top: 10rem;
}
</style>
