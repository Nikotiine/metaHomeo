<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <div class="">
          <p class="title m-t-10" id="title">Formulaire de contact</p>
          <p class="subtitle"></p>
        </div>
      </div>
      <div class="hero-body is-flex-direction-column">
        <div class="box box-shadow">
          <div class="field">
            <label class="label">Votre Nom</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                placeholder="Indiquez votre nom"
                v-model="lastName"
                :class="{ isValidField: this.lastName }"
              />
              <span
                class="icon is-small is-left"
                :class="{ 'has-text-info': this.lastName }"
              >
                <i class="fas fa-user"></i>
              </span>
              <span
                class="icon is-small is-right has-text-success"
                v-if="this.lastName"
              >
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Votre Prenom</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                placeholder="Indiquez votre prenom"
                :class="{ isValidField: this.firstName }"
                v-model="firstName"
              />
              <span
                class="icon is-small is-left"
                :class="{ 'has-text-info': this.firstName }"
              >
                <i class="fas fa-user"></i>
              </span>
              <span
                class="icon is-small is-right has-text-success"
                v-if="this.firstName"
              >
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="Indiquez votre Email"
                v-model="email"
                :class="{ isValidField: validEmail }"
              />
              <span
                class="icon is-small is-left"
                :class="{ 'has-text-info': validEmail }"
              >
                <i class="fas fa-envelope"></i>
              </span>
              <span
                class="icon is-small is-right has-text-success"
                v-if="validEmail"
              >
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Votre demande concerne</label>

            <div class="control blockRadio">
              <label class="radio py-1">
                <input
                  type="radio"
                  name="demande"
                  v-model="sujet"
                  value="Une formation"
                />
                Une formation
              </label>
              <label class="radio py-1 ml-0">
                <input
                  type="radio"
                  name="demande"
                  v-model="sujet"
                  value="Des Infos sur le labo"
                />
                Des infos sur le labo </label
              ><label class="radio py-1 ml-0">
                <input
                  type="radio"
                  name="demande"
                  v-model="sujet"
                  value="Un autre Sujet"
                />
                autre
              </label>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Message"
                v-model="message"
              ></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="cgu" />
                Je suis d'accord avec
                <a href="#">les CGU</a>
              </label>
            </div>
          </div>

          <div
            class="field is-grouped is-justify-content-center"
            v-if="!formIsSend"
          >
            <div class="control">
              <button class="button is-link is-outlined" @click="cancel">
                Annuler
              </button>
            </div>
            <div class="control">
              <button
                class="button is-link"
                :disabled="!fieldIsValid"
                @click="send"
              >
                Valider
              </button>
            </div>
          </div>
          <toast-validate
            v-if="formIsSend"
            :message="toastMessage"
            :css="cssProps"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import toastValidate from "../tools/toastValidate.vue";
import axios from "axios";
export default {
  name: "contactUs",
  components: { toastValidate },
  data() {
    return {
      formIsSend: false,
      lastName: null,
      message: "",
      firstName: null,
      email: null,
      cgu: false,
      sujet: false,
      toastMessage: "Formulaire envoyé",
      cssProps: {
        width: "80%",
        top: "20%",
        position: "relative",
      },
    };
  },
  methods: {
    cancel: function () {
      scrollTo(0, 0);
      this.$router.push({
        name: "aboutUs",
        params: { view: "accueil" },
      });
    },
    send: function () {
      const noInterceptorAxios = axios.create();
      noInterceptorAxios
        .post("public/contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          sujet: this.sujet,
          message: this.message,
        })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            this.formIsSend = !this.formIsSend;
            setTimeout(() => {
              this.formIsSend = !this.formIsSend;
              this.$router.push({
                name: "aboutUs",
                params: { view: "accueil" },
              });
            }, 2000);
          } else {
            alert("pas ok");
          }
        });
    },
  },
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    fieldIsValid: function () {
      if (
        !this.lastName ||
        !this.firstName ||
        !this.validEmail ||
        !this.cgu ||
        !this.sujet
      ) {
        return false;
      } else return true;
    },
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 50%;
}

.blockRadio {
  display: flex;
  align-items: flex-start;
  margin-left: 40%;

  flex-direction: column;
}
</style>
