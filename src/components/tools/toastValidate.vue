<template>
  <div class="notification is-primary">
    <p>
      <strong>{{ config.lastName }} {{ config.firstName }}</strong>
    </p>
    <p class="subtitle">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "toastValidate",
  props: ["config", "message"],
};
</script>

<style lang="scss" scoped>
.notification {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
}
</style>
