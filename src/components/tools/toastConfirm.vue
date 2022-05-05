<template>
  <div class="notification box-shadow is-primary" :style="cssProps">
    <p>
      <strong>{{ message }}</strong>
    </p>
    <div class="is-flex mt-3 is-justify-content-space-evenly">
      <button
        class="button is-small is-rounded is-danger is-light"
        @click="cancel"
      >
        Non
      </button>
      <button
        class="button is-small is-rounded is-primary is-light"
        @click="confirm"
      >
        Oui
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "toastConfirm",
  props: ["config", "message", "css"],
  methods: {
    confirm: function () {
      this.$emit("callBack", true);
    },
    cancel: function () {
      this.$emit("callBack", false);
    },
  },
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
