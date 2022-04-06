<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Tous les utilisateurs</p>
    </div>
    <div class="hero-body is-justify-content-center">
      <table class="table">
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Adresse</th>
            <th>Email de contact</th>
            <th>Nombre de Commndes</th>
            <th>Supprimer le compte</th>
          </tr>
        </thead>
        <tbody v-for="users in allUsers" :key="users.id">
          <tr>
            <td>{{ users.id }}</td>
            <td>{{ users.lastName }}</td>
            <td>{{ users.firstName }}</td>
            <td>{{ users.adresse }} {{ users.zipCode }} {{ users.city }}</td>
            <td>
              <a :href="'mailto:' + users.email">{{ users.email }}</a>
            </td>
            <td>commandes ...</td>
            <td @click="delUser(users.id)">
              <i class="fas fa-user-minus"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="notification is-danger validateAction" v-if="confirmDel">
      <p>
        <strong>Supprimer ce compte ?</strong>
      </p>
      <div class="is-flex mt-3 is-justify-content-space-evenly">
        <button class="button is-small" @click="isConfirm">Oui</button
        ><button class="button is-small" @click="cancel">Non</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "allUsersTools",
  data() {
    return {
      allUsers: [],
      confirmDel: false,
      deletingId: null,
    };
  },
  methods: {
    delUser: function (userId) {
      this.confirmDel = !this.confirmDel;
      this.deletingId = userId;
    },
    cancel: function () {
      this.confirmDel = !this.confirmDel;
      this.deletingId = null;
    },
    isConfirm: function () {
      axios.delete("user/delete", {
        data: { id: this.deletingId },
      });
      this.confirmDel = !this.confirmDel;
    },
  },
  created() {
    axios.get("user/all").then((res) => (this.allUsers = res.data));
  },
};
</script>

<style lang="scss" scoped>
.validateAction {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
}
</style>
