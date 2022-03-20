<template>
  <meta-homeo />
  <le-labo />
  <formation-view />
  <about-us />
</template>

<script>
// @ is an alias to /src

import leLabo from "@/components/homeView/leLabo.vue";
import formationView from "@/components/homeView/formations.vue";
import aboutUs from "@/components/homeView/aboutUs.vue";
import metaHomeo from "@/components/homeView/metahomeopathie.vue";

export default {
  name: "HomeView",
  components: { leLabo, formationView, aboutUs, metaHomeo },
};
</script>
<style lang="scss" scoped></style>
