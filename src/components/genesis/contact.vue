<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body is-flex-direction-column">
        <div class="field">
          <label class="label" id="title">Votre Nom</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="name"
              :class="{ 'is-success': this.name }"
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
              placeholder="Text input"
              :class="{ 'is-success': this.firstName }"
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
              placeholder="Email input"
              v-model="email"
              :class="{ 'is-success': validEmail }"
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
          <label class="label">Sujet</label>
          <div class="control">
            <div class="select">
              <select>
                <option>votre demande concerne</option>
                <option>Une formation</option>
                <option>des renseignements sur le labo</option>
                <option>des renseignements sur l'equipe</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
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
    return { name: null, firstName: null, email: null };
  },
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
  },
  mounted() {
    document.getElementById("title").scrollIntoView({ behavior: "smooth" });
  },
};
</script>

<style lang="scss" scoped></style>
