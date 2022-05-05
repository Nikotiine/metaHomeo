<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <p class="title m-t-10">Tous les utilisateurs</p>
      <router-link
        class="button is-info is-outlined is-rounded"
        :to="{
          name: 'espace-admin',
          params: { view: 'nouveau-membre' },
        }"
      >
        Ajouter
      </router-link>
    </div>
    <div class="hero-body is-justify-content-center">
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Adresse pro</th>

            <th>Email de contact</th>
            <th>newletter</th>
            <th>profil publique</th>
            <th>admin ?</th>

            <th>Details</th>
            <th>Supprimer le compte</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="users in allUsers" :key="users.id">
            <td>{{ users.lastName }}</td>
            <td>{{ users.firstName }}</td>
            <td>{{ users.userAdress?.adressePro }}</td>

            <td>
              <a :href="'mailto:' + users.email">{{ users.email }}</a>
            </td>

            <td>{{ users.newsletter?.registered ? "oui" : "non" }}</td>
            <td>{{ users.publicAuthorisation ? "oui" : "non" }}</td>
            <td>{{ users.admin ? "oui" : "non" }}</td>

            <td @click="UserProfil(users.id)">
              <span class="icon has-text-info cursor">
                <i class="fas fa-eye"></i
              ></span>
            </td>
            <td @click="delUser(users.id, users.lastName, users.firstName)">
              <span class="icon has-text-danger cursor"
                ><i class="fas fa-user-minus"></i
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal is-active" v-if="showUserProfil">
      <div
        class="modal-background"
        @click="showUserProfil = !showUserProfil"
      ></div>
      <div class="modal-content">
        <user-profil :profil="user" :listOfOrder="listOfOrder" />
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    <Transition>
      <toast-confirm
        v-if="confirmDel"
        @callBack="callBackToast"
        :message="message"
        :css="cssProps"
    /></Transition>
    <Transition>
      <toast-validate v-if="userDelete" :message="isDeleted" :css="cssProps"
    /></Transition>
  </section>
</template>

<script>
import toastValidate from "../tools/toastValidate.vue";
import toastConfirm from "../tools/toastConfirm.vue";
import userProfil from "./userProfil.vue";
import axios from "axios";
export default {
  name: "allUsersTools",
  components: { toastConfirm, toastValidate, userProfil },
  data() {
    return {
      listOfOrder: null,
      showUserProfil: false,
      user: null,
      isDeleted: "",
      deletingUser: {},
      userDelete: false,
      message: "Supprimer cet utilisateur ?",
      allUsers: [],
      registereds: [],
      confirmDel: false,
      deletingId: null,
      newsletter: null,
      cssProps: {
        width: "50%",
        top: "50%",
        position: "fixed",
      },
    };
  },
  methods: {
    UserProfil: function (id) {
      this.user = this.allUsers.filter((user) => user.id === id);
      axios.get("orders/myOrders/" + this.user[0].id).then((res) => {
        this.listOfOrder = res.data;
      });
      this.showUserProfil = !this.showUserProfil;
    },
    // loadAvatar(id) {
    //   axios.get("user/avatar/" + id).then((res) => {
    //     const avatar = res.data.avatar.data;
    //     this.avatarUrl = window.btoa(
    //       String.fromCharCode(...new Uint8Array(avatar))
    //     );
    //   });
    // },
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
            this.isDeleted = `${this.deletingUser.firstName} ${this.deletingUser.lastName} a eté supprimé de la base de donnée`;
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
    axios.get("user/all").then((res) => {
      console.log(res.data);
      this.allUsers = res.data;
    });
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
