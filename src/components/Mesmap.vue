<template>
  <div class="mesmp">
    <div class="baidumap" id="allmap">
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/">
        <span>数据中心</span>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_data.active : icon_data.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/Mesmap">
        <span>地图</span>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_map.active : icon_map.inactive"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: '',
      height: '',
      active: 1,
      icon_data: {
        active: require('../assets/select_data.png'),
        inactive: require('../assets/data.png')
      },
      icon_map: {
        active: require('../assets/select_map.png'),
        inactive: require('../assets/map.png')
      },
    }
  },
  mounted() {
    this.baiduMap()
  },
  methods: {
    baiduMap() {
      const map = new window.BMap.Map('allmap')
      const point = new window.BMap.Point(119.126379, 32.267463)
      map.centerAndZoom(point, 16)
      map.enableScrollWheelZoom(true)

      map.addControl(new window.BMap.NavigationControl())
      map.addControl(new window.BMap.ScaleControl())
      map.addControl(new window.BMap.OverviewMapControl())
      map.addControl(new window.BMap.MapTypeControl())
      map.disableDragging();//禁止拖拽
      //map.setMapStyle({ style: 'midnight' }) //地图风格

      const marker = new window.BMap.Marker(point)
      map.addOverlay(marker)
      // marker.setAnimation(BMAP_ANIMATION_BOUNCE)
    }
  }
}
</script>
<style scoped>
>>> .van-tabbar-item__icon img {
  height: 25px;
}

html body {
  height: 80%;
  overflow: hidden;
}

.baidumap {
  width: 100%;
  height: 96%;
  position: absolute;
  left: 0;
  top: -7%;
  right: 0;
  bottom: 0;
  margin: auto;
}

/* 去除百度地图版权那行字 和 百度logo */
.baidumap >>> .BMap_cpyCtrl {
  display: none !important;
}

.baidumap >>> .anchorBL {
  display: none !important;
}
</style>

