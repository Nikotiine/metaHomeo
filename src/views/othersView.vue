<template>
  <div>
    <c-gu v-if="view === 'cGu'" />
    <mentions-legales v-if="view === 'mentions-legales'" />
  </div>
</template>

<script>
import cGu from "../components/autre/cgu.vue";
import mentionsLegales from "../components/autre/mentionsLegales.vue";
export default {
  name: "otherView",
  props: ["view"],
  components: { cGu, mentionsLegales },
};
</script>

<style lang="scss" scoped></style>
