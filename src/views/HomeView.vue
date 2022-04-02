<template>
  <meta-homeo @nextView="next" />

  <le-labo @nextView="next" id="lab" />
  <formation-view @nextView="next" />
  <about-us />
</template>

<script>
// @ is an alias to /src
//import sitckyBtn from "@/components/sitckyBtn.vue";
import leLabo from "@/components/homeView/leLabo.vue";
import formationView from "@/components/homeView/formations.vue";
import aboutUs from "@/components/homeView/aboutUs.vue";
import metaHomeo from "@/components/homeView/metahomeopathie.vue";

export default {
  name: "HomeView",
  components: { leLabo, formationView, aboutUs, metaHomeo },
  data() {
    return {
      showBtn: false,
    };
  },
  methods: {
    next: function (id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      console.log(id);
    },
    // scrollToTop: function () {
    //   scrollTo(0, 0);
    // },
    // getScrollY: function () {
    //   const pos = window.scrollY;

    //   if (pos > 637) {
    //     this.showBtn = true;
    //   } else this.showBtn = false;
    // },
  },
  mounted() {
    scrollTo(0, 0);
  },
  created() {
    // window.addEventListener("scroll", this.getScrollY);
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
