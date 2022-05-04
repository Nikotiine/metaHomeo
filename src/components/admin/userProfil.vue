<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="'data:image/png;base64,' + avatarUrl" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ profil[0].lastName }} {{ profil[0].firstName }}
          </p>
          <p class="subtitle is-6 mt-4">{{ profil[0].email }}</p>
          <p class="subtitle">{{ profil[0].userAdress.adressePro }}</p>
        </div>
      </div>

      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userProfil",
  data() {
    return {
      avatarUrl: null,
    };
  },
  props: ["profil"],
  created() {
    axios.get("user/avatar/" + this.profil[0].id).then((res) => {
      const avatar = res.data.avatar.data;
      this.avatarUrl = window.btoa(
        String.fromCharCode(...new Uint8Array(avatar))
      );
    });
  },
};
</script>

<style lang="scss" scoped></style>
