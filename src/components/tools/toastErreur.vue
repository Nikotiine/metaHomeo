<template>
  <div class="notification is-danger">
    <p class="title">
      <strong>{{ message }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "toastErreur",
  props: ["message"],
};
</script>

<style lang="scss" scoped>
.notification {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  width: 45%;
}
</style>
