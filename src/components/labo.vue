<template>
  <div>
    <section class="hero is-danger is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <p class="title">Le labo</p>
          <p class="subtitle mt-5">
            Ici nous retrouverons tout ce qui concerne le labo , son utilisation
            et les techniques de dilution
          </p>
          <p class="subtitle">
            Sur chaque vignette vous pourrez decrouvrir en detail les techniquye
            utilisées
          </p>
        </div>
      </div>
      <div class="hero-body is-justify-content-space-around">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">La sauvergarde de la technique</div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">Dilution et constipation</div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/labo.jpeg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">Un labo machin truc : quesao ?</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "laboMain",
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 7%;
}
.card {
  min-width: 25%;
}
</style>
