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
          <p class="subtitle is-6">
            adresse pro: {{ profil[0].userAdress.adressePro }} <br />
            adresse perso :
            {{
              profil[0].userAdress.adressePerso
                ? profil[0].userAdress.adressePerso
                : "non renseignée"
            }}
          </p>
          <p class="subtitle is-6">
            abonne newsletter
            {{ profil[0].newsletter?.registered ? "oui" : "non" }} <br />
            diffusion publique :
            {{ profil[0].publicAuthorisation ? "oui" : "non" }}
          </p>
        </div>
      </div>

      <div class="content">
        <p>
          Commandes
          <span class="icon has-text-info" @click="showOrders = !showOrders"
            ><i
              :class="{
                'fas fa-arrow-alt-circle-down': !showOrders,
                'fas fa-arrow-alt-circle-up': showOrders,
              }"
            ></i
          ></span>
        </p>
        <Transition>
          <div v-if="showOrders" class="mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th>N° de commande</th>
                  <th>Date</th>
                  <th>Montant</th>
                  <th>status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody v-for="order in listOfOrder" :key="order.id">
                <tr>
                  <td>{{ order.id }}</td>
                  <td>{{ order.createdAt }}</td>
                  <td>{{ order.total }}</td>
                  <td>
                    {{
                      order.inProgress ? "En cours de traitement" : "Expedié"
                    }}
                  </td>
                  <td>
                    <span
                      class="has-text-info cursor"
                      @click="showOderDetail(order.id)"
                      ><i class="fas fa-eye cursor"></i
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table></div
        ></Transition>
        <Transition>
          <div v-if="showDetail" class="mt-4">
            <p>
              Details
              <span class="icon has-text-info" @click="showDetail = !showDetail"
                ><i class="fas fa-times-circle"></i
              ></span>
            </p>
            <table class="table mt-5">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>smallBox</th>
                  <th>BigBox</th>
                  <th>Prix par produit</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="items in order.productInOrders"
                  :key="items.productId"
                >
                  <td>{{ items.name }}</td>
                  <td>{{ items.smallBox }}</td>
                  <td>{{ items.bigBox }}</td>
                  <td>{{ items.totalS + items.totalB }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                  <th>{{ order.total }}</th>
                </tr>
                <tr>
                  <th>status</th>
                  <th></th>
                  <th></th>
                  <th>
                    {{
                      order.inProgress
                        ? "en cours de traitement"
                        : "Commande expedié"
                    }}
                  </th>
                </tr>
              </tfoot>
            </table>
          </div></Transition
        >
      </div>
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
      order: null,
      showOrders: false,
      showDetail: false,
    };
  },
  props: ["profil", "listOfOrder"],
  methods: {
    showOderDetail: function (orderId) {
      this.orderID = orderId;
      axios.get("orders/one/" + orderId).then((res) => {
        this.order = res.data;
        // this.showOrders = !this.showOrders;
        this.showDetail = true;
      });
    },
  },
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
