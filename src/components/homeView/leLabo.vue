<template>
  <div>
    <section class="hero is-fullheight gradientBackGround">
      <div class="hero-head">
        <div class="container has-text-centered">
          <p class="title box box-shadow">Le labo</p>
          <p class="subtitle mt-6">
            Ici nous retrouverons tout ce qui concerne le labo , son utilisation
            et les techniques de dilution Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis eveniet sint at velit totam earum.
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
            <a class="button is-info is-outlined"
              ><router-link
                :to="{
                  name: 'labo',
                  params: { view: 'accueil' },
                }"
                >Decouvrir le labo</router-link
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
  name: "homeLabo",
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 7%;
}
</style>
