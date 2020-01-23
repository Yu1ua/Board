<template>
  <div class="pad-board">
    <div class="nav">
      <van-nav-bar
          title="首页"
      />
    </div>
    <div class="progress">
      <label class="time">时间</label>
      <label class="Incar">厂内车辆量</label>
      <label class="Plancar">今日计划进车场次</label>
      <label class="complete">已完成车次</label>
    </div>
    <div class="pro_data"></div>
    <div class="baidumap" id="allmap"></div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
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
.pad-board {
  height: 100%;
}

.bg {
  height: 91%;
  background-color: #08FFED;
  /* for IE */
  filter: alpha(opacity=78);
  /* CSS3 standard */
  opacity: 0.1;
}

>>> .van-nav-bar {
  background-color: #27314B !important;
  opacity: 0.7 !important;
}

>>> .van-nav-bar__title {
  color: #fff;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .progress {
    height: 36px;
    background-color: #002B56;
  }

  .time {
    position: absolute;
    color: #fff;
    padding: 1% 5%;
  }

  .Incar {
    position: absolute;
    color: #fff;
    padding: 1% 33%;
  }

  .Plancar {
    position: absolute;
    color: #fff;
    padding-top: 1%;
    right: 30%;
  }

  .complete {
    position: absolute;
    color: #fff;
    padding-top: 1%;
    right: 10%;
  }

  .pro_data {
    height: 50px;
    background-color: #002B56;
    border: 2px solid #52719B;
  }

  .baidumap {
    width: 53%;
    height: 73%;
    position: absolute;
    top: 7%;
    right: 48%;
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
}
</style>
