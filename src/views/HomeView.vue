<template>
  <meta-homeo />
  <labo-main />
  <formation-view />
  <about-us />
</template>

<script>
// @ is an alias to /src

import laboMain from "@/components/labo.vue";
import formationView from "@/components/formations.vue";
import aboutUs from "@/components/aboutUs.vue";
import metaHomeo from "@/components/metahomeopathie.vue";

export default {
  name: "HomeView",
  components: { laboMain, formationView, aboutUs, metaHomeo },
};
</script>
<style lang="scss" scoped></style>
