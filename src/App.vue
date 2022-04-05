<template>
  <sticky-btn />
  <nav-bar :status="getStatus" :admin="isAdmin" />
  <router-view />
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
