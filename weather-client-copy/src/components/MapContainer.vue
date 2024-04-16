<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude; 
      const latitude = position.coords.latitude; 
      AMapLoader.load({
        key: "c8bbe677c3d25142e6618bd4b16a2817",
        version: "2.0",
        plugins: ["AMap.Scale"],
        lang: "en",
        region: "en" // 指定地图区域为英文

      }).then((AMap) => {
        map = new AMap.Map("container", {
          viewMode: "3D",
          zoom: 11,
          center: [longitude, latitude], // 使用当前位置的经度和纬度作为地图的中心点位置
        });
      }).catch((e) => {
        console.log(e);
      });
    });
  } else {
    console.log("Not supported");
  }
});

onUnmounted(() => {
  map?.destroy();
});
</script>