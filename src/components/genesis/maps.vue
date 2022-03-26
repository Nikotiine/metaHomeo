<template>
  <div :style="{ height: heightMaps + 'vh', width: widthMaps + 'vw' }">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="cabinet">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-control-layers />
      <!-- TODO v-for marker -->
      <!-- <l-marker v-if="marker.cab" :lat-lng="marker.geoCab" draggable>
        <l-tooltip> Le cabinet </l-tooltip>
      </l-marker> -->

      <l-marker
        v-for="marker in markers"
        :lat-lng="marker.geoloc"
        :key="marker.id"
        draggable
      >
        <l-tooltip>{{ marker.name }} </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import { latLng } from "leaflet";

import {
  LMap,
  // LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  // LPopup,
  //   LPolyline,
  //   LPolygon,
  //   LRectangle,
} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    // LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    // LPopup,
    // LPolyline,
    // LPolygon,
    // LRectangle,
  },
  name: "mapsLeaflet",
  props: ["heightMaps", "widthMaps", "markers"],
  data() {
    return {
      zoom: 15,
      center: latLng(47.41322, -1.219482),

      url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
      cabinet: latLng(45.128078, 5.589974),
      hotel: latLng(45.127699, 5.589008),
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
