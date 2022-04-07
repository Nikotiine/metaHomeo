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
            <td @click="delUser(users.id, users.lastName, users.firstName)">
              <i class="fas fa-user-minus"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Transition>
      <toast-confirm
        v-if="confirmDel"
        @callBack="callBackToast"
        :message="message"
    /></Transition>
    <Transition>
      <toast-validate
        v-if="userDelete"
        :message="isDeleted"
        :config="deletingUser"
    /></Transition>
  </section>
</template>

<script>
import toastValidate from "../tools/toastValidate.vue";
import toastConfirm from "../tools/toastConfirm.vue";
import axios from "axios";
export default {
  name: "allUsersTools",
  components: { toastConfirm, toastValidate },
  data() {
    return {
      isDeleted: "",
      deletingUser: {},
      userDelete: false,
      message: "Supprimer cet utilisateur ?",
      allUsers: [],
      confirmDel: false,
      deletingId: null,
    };
  },
  methods: {
    callBackToast: function (res) {
      if (!res) {
        this.confirmDel = !this.confirmDel;
        this.deletingId = null;
      } else {
        this.isConfirm();
      }
    },
    delUser: function (userId, first, last) {
      this.confirmDel = !this.confirmDel;
      this.deletingUser = { firstName: first, lastName: last };
      this.deletingId = userId;
    },

    isConfirm: function () {
      axios
        .delete("user/delete", {
          data: { id: this.deletingId },
        })
        .then((res) => {
          if (res.data.data === 1) {
            this.isDeleted = "a ete supprimé de la base de donnée";
            this.userDelete = !this.userDelete;
            setTimeout(() => {
              this.userDelete = !this.userDelete;
              location.reload();
            }, 2000);
          } else {
            this.isDeleted = "a deja ete supprimé de la base de donnée";
            this.userDelete = !this.userDelete;
            setTimeout(() => {
              this.userDelete = !this.userDelete;
              location.reload();
            }, 2000);
          }
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
.v-enter-active {
  transition: opacity 0.8s ease;
}
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
