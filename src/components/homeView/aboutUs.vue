<template>
  <div>
    <section class="hero is-link is-fullheight">
      <div class="hero-head">
        <div class="">
          <p class="title">Info et contact</p>
          <p class="subtitle mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            optio quisquam reprehenderit repudiandae labore consequuntur vel
            voluptatum. Explicabo sunt non tenetur omnis ipsum exercitationem!
            Facere totam ab accusantium laborum aliquid!
          </p>
        </div>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">ou nous trouver ?</p>
          <p class="subtitle mt-5">
            Cabinet Osteo rue salengro 38118 lans en vercors
          </p>
          <div class="mt-6">
            <button
              class="button is-danger is-outlined"
              @click="openModal = !openModal"
            >
              afficher sur la carte
            </button>
          </div>
        </div>
        <div class="container has-text-centered">
          <p class="title">Formulaire de contact</p>
          <div class="mt-6">
            <button class="button is-danger is-outlined">
              <router-link
                :to="{
                  name: 'aboutUs',
                  params: { view: 'contactUs' },
                }"
              >
                Nous contacter</router-link
              >
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <a class="button is-danger is-outlined"
          ><router-link
            :to="{
              name: 'aboutUs',
              params: { view: 'accueil' },
            }"
            >En savoir plus
          </router-link>
        </a>
      </div>
      <div class="modal is-active" v-if="openModal">
        <div class="modal-background" @click="openModal = !openModal"></div>
        <div class="modal-content">
          <maps-leaflet :heightMaps="75" :widthMaps="50" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mapsLeaflet from "../genesis/maps.vue";
export default {
  name: "aboutUs",
  components: { mapsLeaflet },
  data() {
    return {
      openModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 7%;
}
</style>
