<template>
  <div>
    <VueMultiselect
      v-model="adresseSelected"
      :options="resultList"
      placeholder="Chercher une adresse"
      @search-change="getadress"
      track-by="label"
      label="label"
      @select="emitValue"
    >
    </VueMultiselect>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
import axios from "axios";
export default {
  name: "findAdresse",
  components: { VueMultiselect },

  data() {
    return {
      adresseSelected: "",
      resultList: [],
    };
  },
  methods: {
    getadress: function (adresse) {
      if (adresse.length > 5) {
        const noInterceptorAxios = axios.create();
        noInterceptorAxios
          .get(
            "https://api-adresse.data.gouv.fr/search/?q=" + adresse + "&limit=3"
          )
          .then((res) => {
            this.resultList = res.data.features.map((r) => {
              return {
                label: r.properties.label,
                gps: r.geometry.coordinates,
              };
            });
          });
      }
    },
    emitValue: function (value) {
      this.$emit("getSelected", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
