<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <div class="">
          <p class="title" id="title">Formulaire de contact</p>
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
                v-model="name"
                :class="{ isValidField: this.name }"
              />
              <span
                class="icon is-small is-left"
                :class="{ 'has-text-info': this.name }"
              >
                <i class="fas fa-user"></i>
              </span>
              <span
                class="icon is-small is-right has-text-success"
                v-if="this.name"
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
                  value="formation"
                />
                Une formation
              </label>
              <label class="radio py-1 ml-0">
                <input
                  type="radio"
                  name="demande"
                  v-model="sujet"
                  value="infoLabo"
                />
                Des infos sur le labo </label
              ><label class="radio py-1 ml-0">
                <input
                  type="radio"
                  name="demande"
                  v-model="sujet"
                  value="autre"
                />
                autre
              </label>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Message"></textarea>
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

          <div class="field is-grouped is-justify-content-center">
            <div class="control">
              <button class="button is-link is-outlined" @click="cancel">
                Annuler
              </button>
            </div>
            <div class="control">
              <button class="button is-link" :disabled="!fieldIsValid">
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contactUs",
  data() {
    return {
      name: null,
      firstName: null,
      email: null,
      cgu: false,
      sujet: false,
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
  },
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    fieldIsValid: function () {
      if (
        !this.name ||
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
.title {
  margin-top: 10%;
}
.box {
  width: 35%;
}
.isValidField {
  border: 2px groove #68e6f6ab;
}
.blockRadio {
  display: flex;
  align-items: flex-start;
  margin-left: 40%;

  flex-direction: column;
}
</style>
