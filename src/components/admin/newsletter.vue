<template>
  <section class="hero is-fullheight">
    <div class="hero-head m-t-10">
      <p class="title">Ecris la bonne parole</p>
    </div>
    <div class="hero-body is-flex is-justify-content-center">
      <div class="box box-shadow min-width-60">
        <label class="label">Sujet</label>
        <input
          class="input is-link"
          type="text"
          placeholder="Sujet"
          v-model="sujet"
        />
        <label class="label">Message</label>
        <textarea
          class="textarea"
          placeholder="Chaque bien que tu detiens"
          v-model="message"
        ></textarea>
        <div
          class="buttons is-justify-content-flex-end mt-6"
          v-if="!newsletterIsSend"
        >
          <router-link
            class="button is-info is-outlined"
            :to="{
              name: 'espace-admin',
              params: { view: 'accueil' },
            }"
          >
            annuler </router-link
          ><button class="button is-primary" @click="send">Envoyer</button>
        </div>
        <toast-validate
          class="mt-6"
          v-if="newsletterIsSend"
          :css="cssProps"
          :message="validateMessage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import toastValidate from "../tools/toastValidate.vue";
import axios from "axios";
export default {
  name: "newsLetter",
  components: { toastValidate },
  data() {
    return {
      sujet: "",
      message: "",
      validateMessage: "Newsletter bien envoyé a tes disciples",
      cssProps: {
        width: "100%",
        top: "20%",
        position: "relative",
      },
      newsletterIsSend: false,
    };
  },
  methods: {
    send: function () {
      axios
        .post("user/newsletter", {
          sujet: this.sujet,
          message: this.message,
        })
        .then((res) => {
          if (res.data) {
            this.newsletterIsSend = !this.newsletterIsSend;
            setTimeout(() => {
              this.$router.push({
                name: "espace-admin",
                params: { view: "accueil" },
              });
            }, 2000);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
