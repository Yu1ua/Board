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
      <div class="Pro">
          <label class="date">20190920</label>
          <label class="Innum">8</label>
          <label class="planNum">32</label>
          <label class="completeNum">12</label>
      </div>
    <div class="pro_data"></div>
    <div class="baidumap" id="allmap"></div>
      <div class="cards">
          <van-tabs type="card">
              <van-tab title="鲁Q399AV" >
                  <p style="padding: .6rem 1rem;">交货单号：810233444</p>
                  <p style="padding: .5rem 1rem;">正在装货（EO装车A站）</p>
                  <p style="padding: .5rem 1rem;">物料名称：环氧乙烷</p>
                  <p style="padding: .5rem 1rem;">交货数量：28.00T</p>
              </van-tab>
              <van-tab title="EO装车A站">正在装货（EO装车A站）</van-tab>
              <van-tab title="15:10>15:46">交货数量：28.00T</van-tab>
          </van-tabs>
      </div>
      <div class="button">
          <van-button class="Pri" plain type="primary">苏A12253</van-button>
          <van-button class="Dan" color="#1AAD19">苏M1233K</van-button>
          <van-button class="Dan" color="#1AAD19">苏A5685A</van-button>
          <van-button class="Dan" type="info">沪A8H891</van-button>
          <van-button class="Dan" color="#1AAD19">沪C89099</van-button>
          <van-button class="Dan" color="#FFE152">00256325</van-button>
      </div>
      <div class="button_o">
          <van-button class="Pri_o" plain type="primary">待出厂</van-button>
          <van-button class="Dan_o" plain type="primary">装站点</van-button>
          <van-button class="Dan_o" plain type="primary">过磅中</van-button>
          <van-button class="Dan_o" plain type="primary">待入厂</van-button>
          <van-button class="Dan_o" plain type="primary">在途车辆</van-button>
          <van-button class="Dan_o" plain type="primary">单据处理</van-button>
      </div>
      <div class="button_t">
          <van-button class="Pri_t"  plain color="#08FFED">待出厂</van-button>
          <van-button class="Dan_t" plain type="primary">装站点</van-button>
          <van-button class="Dan_t" plain type="primary">过磅中</van-button>
          <van-button class="Dan_t" plain type="primary">待入厂</van-button>
          <van-button class="Dan_t" plain type="primary">在途车辆</van-button>
          <van-button class="Dan_t" plain type="primary">单据处理</van-button>
      </div>
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
  width: 100%;
    overflow: hidden;
}

.bg {
  height: 100%;
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
  font-size: 1.2rem;
}

>>> .van-tabs__nav--card .van-tab.van-tab--active {
    color: #fff;
    background-color: #5019fa;
    z-index: 999;
}

>>> .van-tabs__nav--card .van-tab {
    color: #5019fa;
    line-height: 28px;
    border-right: 1px solid #5019fa;
    z-index: 999;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .progress {
    height: 36px;
    background-color: #002B56;
    font-size: 1.2rem;
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
.Pro{
    position: absolute;
    top: 6rem;
    color: #fff;
    font-size: 1.5rem;
}
.date{
    text-align: center;
    padding: 0 1rem;
}
.Innum{
    text-align: center;
    padding: 0 9rem;
}
.planNum{
    text-align: center;
}
.completeNum{
    text-align: center;
    padding: 0 10.5rem;
}
  .baidumap {
    width: 53%;
    height: 65%;
    position: absolute;
    top: -5%;
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
  .cards{
      height: 20rem;
      width: 21rem;
      position: absolute;
      top: 10rem;
      left: 26rem;
      background-color: #e6e6e6;
  }
  .button{
      position: absolute;
      top: 57rem;
      /*left: 1rem;*/
  }
   .Pri{
       width: 7rem;
       margin: 0 .2rem 0 1rem;
   }
   .Dan{
       width: 7rem;
       margin: 0 .2rem;
   }
    .button_o{
        position: absolute;
        top: 60rem;
        /*left: 1rem;*/
    }
    .Pri_o{
        width: 7rem;
        margin: 0 .2rem 0 1rem;
    }
    .Dan_o{
        width: 7rem;
        margin: 0 .2rem;
    }
    .button_t{
        position: absolute;
        top: 54rem;
        /*left: 1rem;*/
    }
    .Pri_t{
        width: 7rem;
        margin: 0 .2rem 0 1rem;
    }
    .Dan_t{
        width: 7rem;
        margin: 0 .2rem;
    }
}
</style>
