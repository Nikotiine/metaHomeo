<template>
  <div class="notification is-primary" :style="cssprops">
    <p>
      <strong
        >{{ config.lastName ? config.lastName : "" }}
        {{ config.firstName ? config.firstName : "" }}</strong
      >
    </p>
    <p class="subtitle">{{ message }}</p>
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
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: var(--width);
}
</style>
