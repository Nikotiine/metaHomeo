<template>
  <main>
    <div class="block">
      <a href="#">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect class="block__element" height="60" width="320" />
        </svg>
        <router-link
          class="block__element--modifier"
          v-for="bouton in btnName"
          :key="bouton.id"
          :to="bouton.router"
        >
          {{ bouton.name }}
        </router-link>
      </a>
    </div>
  </main>
</template>

<script>
export default {
  name: "buttonNeon",
  props: ["btnName"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$neonblue: rgb(123, 185, 248);
@mixin dash($array, $offset, $width) {
  stroke-dasharray: $array;
  stroke-dashoffset: $offset;
  stroke-width: $width;
}
.block {
  padding-top: 60px;
  position: relative;
  margin: 0 auto;
  width: 320px;

  &:hover &__element {
    @include dash(760, 0, 4px);
  }

  &__element {
    fill: transparent;
    stroke: $neonblue;
    border-bottom: 5px solid $neonblue;

    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
    @include dash(140 540, -474, 10px);

    &--modifier {
      position: relative;
      text-align: center;
      font-size: 1.8rem;
      line-height: 32px;
      letter-spacing: 8px;
      color: black;
      top: -48px;
    }
  }
}
</style>
