<template>
  <sticky-btn />
  <nav-bar />
  <router-view />
</template>
<script>
// @ is an alias to /src
import stickyBtn from "@/components/sitckyBtn.vue";
import navBar from "@/components/navbar.vue";
export default {
  components: { navBar, stickyBtn },
};
</script>
<style lang="scss"></style>
