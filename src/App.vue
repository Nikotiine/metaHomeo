<template>
  <nav-bar />
  <router-view />
</template>
<script>
// @ is an alias to /src

import navBar from "@/components/navbar.vue";
export default {
  components: { navBar },
};
</script>
<style lang="scss"></style>
