<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <p class="title">Les formations</p>
          <p class="subtitle mt-6">
            Ici nous retrouverons tout ce qui concerne les froamtions , Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sed molestias
            ipsam consequatur minus ad at qui assumenda porro quaerat quasi..
          </p>

          <p class="subtitle mt-6">
            ici on parle de la technique Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt, natus.
          </p>

          <p class="subtitle mt-6">
            ici on parle des diliutions Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt, natus.
          </p>

          <p class="subtitle mt-6">
            ici on parle du la labo associatif Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt, natus.
          </p>
          <div class="mt-6">
            <a class="button is-link is-outlined"
              ><router-link
                :to="{
                  name: 'formations',
                  params: { view: 'accueil' },
                }"
                >Decouvrir les froamtions</router-link
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
  name: "formationView",
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 7%;
}
.card {
  max-width: 30%;
}
</style>
