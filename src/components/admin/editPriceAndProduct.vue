<template>
  <form class="box box-shadow m-t-10 mx-auto" v-on:submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Nouveau Prix</label>

      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="number"
          placeholder="prix"
          v-model="prix"
        /><span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right has-text-success">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Taille SmallBox</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="number"
          placeholder="smallBox"
          v-model="smallbox"
        /><span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right has-text-success">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Taille BigBox</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="number"
          placeholder="smallBox"
          v-model="bigbox"
        /><span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right has-text-success">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="buttons is-justify-content-flex-end mt-6">
      <button class="button is-primary" @click="this.$emit('cancel')">
        annuler</button
      ><button class="button is-primary" @click="send">Enregistrer</button>
    </div>
  </form>
  <Transition>
    <toast-validate
      :message="messageConfirm"
      v-if="productIssave"
      :css="cssProps"
  /></Transition>
</template>

<script>
import axios from "axios";
import toastValidate from "../tools/toastValidate.vue";
export default {
  name: "editPriceAndQuantity",
  components: { toastValidate },
  props: ["price", "small", "big"],
  data() {
    return {
      prix: this.price,
      bigbox: this.big,
      smallbox: this.small,
      cssProps: {
        width: "100%",
        position: "absolute",
        top: "83%",
      },
      productIssave: false,

      messageConfirm: "Prix et quantites modifiés ",
    };
  },
  methods: {
    send: function () {
      axios
        .put("/products/price/edit", {
          price: this.prix,
          small: this.smallbox,
          big: this.bigbox,
        })
        .then((res) => {
          console.log(res);

          this.productIssave = !this.productIssave;
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    },
  },
  computed: {},
  created() {},
};
</script>

<style lang="scss" scoped></style>
