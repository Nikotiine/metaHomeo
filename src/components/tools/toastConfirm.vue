<template>
  <div class="notification box-shadow is-primary">
    <p>
      <strong>{{ message }}</strong>
    </p>
    <div class="is-flex mt-3 is-justify-content-space-evenly">
      <button class="button is-small is-rounded" @click="cancel">Non</button>
      <button class="button is-small is-rounded" @click="confirm">Oui</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "toastConfirm",
  props: ["config", "message"],
  methods: {
    confirm: function () {
      this.$emit("callBack", true);
    },
    cancel: function () {
      this.$emit("callBack", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: absolute;
  top: 84%;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
}
</style>
