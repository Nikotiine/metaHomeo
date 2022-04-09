<template>
  <div v-for="prod in productsInBasket" :key="prod.id" class="m-t-10">
    <p>{{ prod.name }} => {{ prod.basket }}</p>
  </div>
</template>

<script>
export default {
  name: "commandeProduits",
  computed: {
    productsInBasket() {
      return this.$store.state.prod;
    },
  },
};
</script>

<style lang="scss" scoped></style>
