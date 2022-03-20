<template>
  <div>
    <section class="hero is-succes is-fullheight">
      <div class="hero-head">
        <div class="">
          <p class="title">Les formations</p>
          <p class="subtitle mt-5">
            Ici nous proposons 2 types de formations differentes
          </p>
        </div>
      </div>
      <div class="hero-body is-justify-content-space-around">
        <div class="card">
          <div class="card-content">
            <p class="title">
              Une formation d'un an sans pre-requis Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est ducimus cum fugit accusantium
              inventore! Eveniet. blabla
            </p>
            <p class="subtitle">Niko simon</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                Voir des details
                <a>details</a>
              </span>
            </p>
          </footer>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="title">
              Une formation pour les proffessionelels de la sante Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Est ducimus cum fugit
              accusantium inventore! Eveniet.
            </p>
            <p class="subtitle">Niko simon</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                Voir des les details
                <a>Details</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
      <div class="mb-6">
        <a class="button is-info is-outlined"
          ><router-link to="/formations">Decouvrir les formations</router-link>
        </a>
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
