<template>
  <sticky-btn />
  <nav-bar :status="getStatus" :admin="isAdmin" />
  <router-view />
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>©2022 Genensis</strong> by <a>Nicolas Godin</a> <br />
        <router-link
          :to="{
            name: 'autre',
            params: { view: 'mentions-legales' },
          }"
        >
          <strong>Mentions legales</strong>
        </router-link>
      </p>
    </div>
  </footer>
</template>
<script>
// @ is an alias to /src
import stickyBtn from "@/components/sitckyBtn.vue";
import navBar from "@/components/navbar.vue";
//import Cookies from "js-cookie";
export default {
  components: { navBar, stickyBtn },
  computed: {
    getStatus() {
      return this.$store.state.user;
    },
    isAdmin() {
      return this.$store.state.admin;
    },
  },
  mounted() {},
};
</script>
<style lang="scss"></style>
