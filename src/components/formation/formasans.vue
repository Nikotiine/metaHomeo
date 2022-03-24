<template>
  <div>
    <section class="hero is-danger is-fullheight">
      <div class="hero-head">
        <div class="">
          <p class="title" id="title">sans pre-requis</p>
          <p class="subtitle">Fullheight subtitle</p>
        </div>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            delectus ipsum ex eius perferendis ad debitis dicta maiores ea.
            Maxime quam veritatis consequuntur unde expedita nesciunt odio
            eligendi laudantium excepturi eum. Magni quasi officiis, ab
            temporibus sed sequi placeat sint, consectetur minima non aspernatur
            delectus!
          </p>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li @click="scrollToTop">
                <a>Acceuil des formations </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "formaSans",
  methods: {
    scrollToTop: function () {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    document.getElementById("title").scrollIntoView({ behavior: "smooth" });
  },
};
</script>

<style lang="scss" scoped></style>
