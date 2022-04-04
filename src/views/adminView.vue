<template>
  <div>
    <form-new-user v-if="view === 'nouveau-membre'" />
    <espace-admin v-if="view === 'accueil'" />
  </div>
</template>

<script>
import formNewUser from "../components/admin/formNewUser.vue";
import espaceAdmin from "../components/admin/espaceAdmin.vue";
export default {
  name: "adminView",
  props: ["view"],
  components: { formNewUser, espaceAdmin },
};
</script>

<style lang="scss" scoped></style>
