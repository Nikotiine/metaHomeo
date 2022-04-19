<template>
  <div class="notification is-primary" :style="cssprops">
    <p>
      <strong>{{ message }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "toastValidate",
  props: ["config", "message", "css"],
  computed: {
    cssprops() {
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
