<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "historiqueCommandes",
  data() {
    return {
      listOfOrder: null,
    };
  },
  created() {
    axios.get("orders/myOrders").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped></style>
