<template>
  <button
    class="button is-medium is-primary is-rounded"
    :class="{ upBtn: showBtn }"
    @click="scrollToTop"
  >
    <i class="fas fa-angle-double-up"></i>
  </button>
</template>

<script>
export default {
  name: "stickyBtn",
  data() {
    return { showBtn: false };
  },
  created() {
    window.addEventListener("scroll", this.getScrollY);
  },
  methods: {
    getScrollY: function () {
      const pos = window.scrollY;

      if (pos > 600) {
        this.showBtn = true;
      } else this.showBtn = false;
    },
    scrollToTop: function () {
      scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: none;
}
</style>
