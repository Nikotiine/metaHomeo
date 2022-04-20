<template>
  <div class="notification is-danger" :style="cssProps">
    <p class="title">
      <strong>{{ message }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "toastErreur",
  props: ["message", "css"],
  computed: {
    cssProps() {
      return {
        "--width": this.css.width,
        "--top": this.css.top,
        "--position": this.css.position,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: var(--position);
  top: var(--top);
  left: 50%;
  transform: translateX(-50%);
  width: var(--width);
}
</style>
