<template>
  <div class="board">
    <div class="nav">
      <van-tabs>
        <van-tab title="今日计划车辆">
          <label class="Plan">28</label>
          <label class="InCar">9</label>
          <label class="OutCar">13</label>
        </van-tab>

        <van-tab title="厂内车辆">
          <label class="Plan">28</label>
          <label class="InCar">9</label>
          <label class="OutCar">13</label>
        </van-tab>

        <van-tab title="已出车辆">
          <label class="Plan">28</label>
          <label class="InCar">9</label>
          <label class="OutCar">13</label>
        </van-tab>
      </van-tabs>
    </div>
    <div class="WayBill">
      <van-button :class="[{'bill':this.width<=320}]">运单</van-button>
      <div :class="[{'way':this.width<=320}]"></div>
      <div :class="[{'borderway':this.width<=320}]"></div>
      <div :class="[{'urgent':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_one':this.width<=320}]"></div>
      <div :class="[{'urgent_one':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_two':this.width<=320}]"></div>
      <div :class="[{'urgent_two':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_three':this.width<=320}]"></div>
      <div :class="[{'urgent_three':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000535</label>
      </div>
    </div>
    <div class="InTrainsit">
      <van-button :class="[{'transit':this.width<=320}]">在途车辆</van-button>
      <div :class="[{'train':this.width<=320}]"></div>
      <div :class="[{'borderway_four':this.width<=320}]"></div>
      <div :class="[{'urgent_four':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_five':this.width<=320}]"></div>
      <div :class="[{'urgent_five':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_six':this.width<=320}]"></div>
      <div :class="[{'urgent_six':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_seven':this.width<=320}]"></div>
      <div :class="[{'urgent_seven':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000535</label>
      </div>
    </div>
    <div class="InTrainsit">
      <van-button :class="[{'Pending':this.width<=320}]">待入厂</van-button>
      <div :class="[{'pend':this.width<=320}]"></div>
      <div :class="[{'borderway_eight':this.width<=320}]"></div>
      <div :class="[{'urgent_eight':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_nine':this.width<=320}]"></div>
      <div :class="[{'urgent_nine':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_ten':this.width<=320}]"></div>
      <div :class="[{'urgent_ten':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_eleven':this.width<=320}]"></div>
      <div :class="[{'urgent_eleven':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000535</label>
      </div>
    </div>

    <div class="InTrainsit">
      <van-button :class="[{'Overweight':this.width<=320}]">过磅中</van-button>
      <div :class="[{'over':this.width<=320}]"></div>
      <div :class="[{'borderway_twelve':this.width<=320}]"></div>
      <div :class="[{'urgent_twelve':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_thirteen':this.width<=320}]"></div>
      <div :class="[{'urgent_thirteen':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_fourteen':this.width<=320}]"></div>
      <div :class="[{'urgent_fourteen':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000533</label>
      </div>
      <div :class="[{'borderway_fifteen':this.width<=320}]"></div>
      <div :class="[{'urgent_fifteen':this.width<=320}]">
        <label :class="[{'billNum':this.width<=320}]">单号GF900000535</label>
      </div>
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
      active: 0,
      icon_data: {
        active: require('../assets/select_data.png'),
        inactive: require('../assets/data.png')
      },
      icon_map: {
        active: require('../assets/select_map.png'),
        inactive: require('../assets/map.png')
      },
    }
  }
}
</script>

<style scoped>
>>> .van-tabs--line .van-tabs__wrap {
  height: 58px
}

>>> .van-tabs__line {
  background-color: #FFFF8C;
  width: 90% !important;
}

>>> .van-tabs__nav--line {
  background-color: #00BC6F;
}

>>> .van-tab__text {
  color: #ffffff;
  font-family: 黑体;
  font-size: 16px;
}

>>> .van-tabbar-item--active {
  color: #00BC6F
}

>>> .van-tabbar-item__icon img {
  height: 25px;
}

.nav {
  padding: 0 10px;
}

.board {
  background-color: #00BC6F;
  height: 100%;
  overflow-y: auto;
}

.Plan {
  position: absolute;
  left: 15%;
  top: 58%;
  color: #ffffff;
  font-family: 楷体;
}

.InCar {
  position: absolute;
  left: 48%;
  top: 58%;
  color: #ffffff;
  font-family: 楷体;
}

.OutCar {
  position: absolute;
  left: 82%;
  top: 58%;
  color: #ffffff;
  font-family: 楷体;
}

.way {
  position: absolute;
  left: 4%;
  top: 14%;
  width: 90%;
  height: 93px;
  line-height: 20px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0);
}

.bill {
  left: 9%;
  top: 9px;
  width: 19.8%;
  height: 24px;
  line-height: 20px;
  border-radius: 4px;
  background-color: #86E354;
  text-align: center;
  color: #ffffff;
  font-family: "Microsoft YaHei";
  font-size: 15px;
  font-weight: bold;
  z-index: 999999;
}

.billNum {
  position: absolute;
  left: 4px;
  top: -3px;
  width: 130px;
  height: 22px;
  color: rgba(16, 16, 16, 1);
  font-size: 13px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}

.borderway {
  position: absolute;
  left: 7%;
  top: 17.5%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_one {
  position: absolute;
  left: 7%;
  top: 24%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_two {
  position: absolute;
  right: 8%;
  top: 17.5%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.borderway_three {
  position: absolute;
  right: 8%;
  top: 24%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.borderway_four {
  position: absolute;
  left: 7%;
  top: 37.5%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_five {
  position: absolute;
  left: 7%;
  top: 44%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_six {
  position: absolute;
  right: 9%;
  top: 37.5%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.borderway_seven {
  position: absolute;
  right: 9%;
  top: 44%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.borderway_eight {
  position: absolute;
  left: 7%;
  top: 58%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_nine {
  position: absolute;
  left: 7%;
  top: 64%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_ten {
  position: absolute;
  right: 9%;
  top: 58%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.borderway_eleven {
  position: absolute;
  right: 9%;
  top: 64%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.borderway_twelve {
  position: absolute;
  left: 7%;
  top: 78%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_thirteen {
  position: absolute;
  left: 7%;
  top: 84%;
  width: 133px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 2px solid rgba(255, 0, 0, 1);
  z-index: 999999;
}

.borderway_fourteen {
  position: absolute;
  right: 9%;
  top: 78%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.borderway_fifteen {
  position: absolute;
  right: 9%;
  top: 84%;
  width: 130px;
  height: 27px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.urgent {
  position: absolute;
  left: 9%;
  top: 18.3%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_one {
  position: absolute;
  left: 9%;
  top: 25%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_two {
  position: absolute;
  right: 46%;
  top: 18.5%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_three {
  position: absolute;
  right: 46%;
  top: 25%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_four {
  position: absolute;
  left: 9%;
  top: 38.7%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_five {
  position: absolute;
  left: 9%;
  top: 45%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_six {
  position: absolute;
  right: 47%;
  top: 38.8%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_seven {
  position: absolute;
  right: 47%;
  top: 45%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_eight {
  position: absolute;
  left: 9%;
  top: 59%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_nine {
  position: absolute;
  left: 9%;
  top: 65%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_ten {
  position: absolute;
  right: 47%;
  top: 59%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_eleven {
  position: absolute;
  right: 47%;
  top: 65%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_twelve {
  position: absolute;
  left: 9%;
  top: 79%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_thirteen {
  position: absolute;
  left: 9%;
  top: 85%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_fourteen {
  position: absolute;
  right: 47%;
  top: 79%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.urgent_fifteen {
  position: absolute;
  right: 47%;
  top: 85%;
  width: 3px;
  height: 15px;
  line-height: 20px;
  background-color: rgba(255, 0, 0, 1);
  text-align: center;
  border: 1px solid rgba(255, 0, 0, 1);
}

.transit {
  position: absolute;
  left: 9%;
  top: 32%;
  width: 29%;
  height: 24px;
  line-height: 20px;
  border-radius: 4px;
  background-color: #86E354;
  text-align: center;
  color: #ffffff;
  font-family: "Microsoft YaHei";
  font-size: 15px;
  font-weight: bold;
  z-index: 999999;
}

.train {
  position: absolute;
  left: 4%;
  top: 34%;
  width: 90%;
  height: 93px;
  line-height: 20px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0);
}

.pend {
  position: absolute;
  left: 4%;
  top: 54%;
  width: 90%;
  height: 97px;
  line-height: 20px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0);
}

.Pending {
  position: absolute;
  left: 9%;
  top: 52%;
  width: 28%;
  height: 24px;
  line-height: 20px;
  border-radius: 4px;
  background-color: #86E354;
  text-align: center;
  color: #ffffff;
  font-family: "Microsoft YaHei";
  font-size: 15px;
  font-weight: bold;
  z-index: 999999;
}

.Overweight {
  position: absolute;
  left: 9%;
  top: 72%;
  width: 28%;
  height: 24px;
  line-height: 20px;
  border-radius: 4px;
  background-color: #86E354;
  text-align: center;
  color: #ffffff;
  font-family: "Microsoft YaHei";
  font-size: 15px;
  font-weight: bold;
  z-index: 999999;
}

.over {
  position: absolute;
  left: 4%;
  top: 73%;
  width: 90%;
  height: 97px;
  line-height: 20px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0);
}

@media screen and (min-width: 375px) {
  .bill {
    left: 9%;
    top: 10px;
    width: 19.8%;
    height: 24px;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }

  .way {
    position: absolute;
    left: 4%;
    top: 12%;
    width: 90%;
    height: 97px;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .Overweight {
    position: absolute;
    left: 9%;
    top: 71%;
    width: 28%;
    height: 24px;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }

  .borderway {
    position: absolute;
    left: 7%;
    top: 15.5%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
  }

  .borderway_one {
    position: absolute;
    left: 7%;
    top: 21%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_two {
    position: absolute;
    right: 9%;
    top: 15.5%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_three {
    position: absolute;
    right: 9%;
    top: 21%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_four {
    position: absolute;
    left: 7%;
    top: 37.5%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_five {
    position: absolute;
    left: 7%;
    top: 43%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_six {
    position: absolute;
    right: 9%;
    top: 37.5%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_seven {
    position: absolute;
    right: 9%;
    top: 43%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_eight {
    position: absolute;
    left: 7%;
    top: 57%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_nine {
    position: absolute;
    left: 7%;
    top: 63%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_ten {
    position: absolute;
    right: 9%;
    top: 57%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_eleven {
    position: absolute;
    right: 9%;
    top: 63%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_twelve {
    position: absolute;
    left: 7%;
    top: 76%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_thirteen {
    position: absolute;
    left: 7%;
    top: 82%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_fourteen {
    position: absolute;
    right: 9%;
    top: 76%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_fifteen {
    position: absolute;
    right: 9%;
    top: 82%;
    width: 149px;
    height: 27px;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .urgent {
    position: absolute;
    left: 9%;
    top: 16.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_one {
    position: absolute;
    left: 9%;
    top: 22%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_two {
    position: absolute;
    right: 46%;
    top: 16.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_three {
    position: absolute;
    right: 46%;
    top: 22%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_four {
    position: absolute;
    left: 9%;
    top: 38.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_five {
    position: absolute;
    left: 9%;
    top: 44%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_six {
    position: absolute;
    right: 46%;
    top: 38.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_seven {
    position: absolute;
    right: 46%;
    top: 44%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_eight {
    position: absolute;
    left: 9%;
    top: 58%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_nine {
    position: absolute;
    left: 9%;
    top: 64%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_ten {
    position: absolute;
    right: 46%;
    top: 58%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_eleven {
    position: absolute;
    right: 46%;
    top: 64%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_twelve {
    position: absolute;
    left: 9%;
    top: 77%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_thirteen {
    position: absolute;
    left: 9%;
    top: 83%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_fourteen {
    position: absolute;
    right: 46%;
    top: 77%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_fifteen {
    position: absolute;
    right: 46%;
    top: 83%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .billNum {
    position: absolute;
    left: 4px;
    top: -3px;
    width: 130px;
    height: 22px;
    color: rgba(16, 16, 16, 1);
    font-size: 15px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }

  .transit {
    position: absolute;
    left: 9%;
    top: 32.5%;
    width: 29%;
    height: 24px;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }
}

@media screen and (min-width: 414px) {
  .bill {
    position: absolute;
    left: 9%;
    top: 10%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }

  .transit {
    position: absolute;
    left: 9%;
    top: 31%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }

  .Pending {
    position: absolute;
    left: 9%;
    top: 50%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }

  .Overweight {
    position: absolute;
    left: 9%;
    top: 70%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }

  .way {
    position: absolute;
    left: 4%;
    top: 12%;
    width: 376px;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .train {
    position: absolute;
    left: 4%;
    top: 33%;
    width: 376px;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .pend {
    position: absolute;
    left: 4%;
    top: 52%;
    width: 376px;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .over {
    position: absolute;
    left: 4%;
    top: 72%;
    width: 376px;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .borderway {
    position: absolute;
    left: 7%;
    top: 15%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_one {
    position: absolute;
    left: 7%;
    top: 21%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_two {
    position: absolute;
    right: 11%;
    top: 14.5%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_three {
    position: absolute;
    right: 11%;
    top: 21%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_four {
    position: absolute;
    left: 7%;
    top: 36%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_five {
    position: absolute;
    left: 7%;
    top: 42%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_six {
    position: absolute;
    right: 11%;
    top: 36%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_seven {
    position: absolute;
    right: 11%;
    top: 42%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_eight {
    position: absolute;
    left: 7%;
    top: 55%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_nine {
    position: absolute;
    left: 7%;
    top: 61%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_ten {
    position: absolute;
    right: 11%;
    top: 55%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_eleven {
    position: absolute;
    right: 11%;
    top: 61%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_twelve {
    position: absolute;
    left: 7%;
    top: 75%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_thirteen {
    position: absolute;
    left: 7%;
    top: 81%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_fourteen {
    position: absolute;
    right: 11%;
    top: 75%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_fifteen {
    position: absolute;
    right: 11%;
    top: 81%;
    width: 149px;
    height: 5%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .urgent {
    position: absolute;
    left: 9%;
    top: 16.5%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_one {
    position: absolute;
    left: 9%;
    top: 22.7%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_two {
    position: absolute;
    right: 44%;
    top: 16%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_three {
    position: absolute;
    right: 44%;
    top: 22.5%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_four {
    position: absolute;
    left: 9%;
    top: 37.3%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_five {
    position: absolute;
    left: 9%;
    top: 43.7%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_six {
    position: absolute;
    right: 44%;
    top: 43.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_seven {
    position: absolute;
    right: 44%;
    top: 37.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_eight {
    position: absolute;
    left: 9%;
    top: 56.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_nine {
    position: absolute;
    left: 9%;
    top: 62.5%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_ten {
    position: absolute;
    right: 44%;
    top: 56.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_eleven {
    position: absolute;
    right: 44%;
    top: 62.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_twelve {
    position: absolute;
    left: 9%;
    top: 76.5%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_thirteen {
    position: absolute;
    left: 9%;
    top: 82.5%;;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_fourteen {
    position: absolute;
    right: 44%;
    top: 76.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_fifteen {
    position: absolute;
    right: 44%;
    top: 82.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .billNum {
    position: absolute;
    left: 6px;
    top: -2px;
    width: 130px;
    height: 22px;
    color: rgba(16, 16, 16, 1);
    font-size: 15px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
}

@media screen and (min-height: 812px) {
  .bill {
    position: absolute;
    left: 9%;
    top: 9.8%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;
  }

  .transit {
    position: absolute;
    left: 9%;
    top: 30.8%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;

  }

  .Pending {
    position: absolute;
    left: 9%;
    top: 51.8%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;

  }

  .Overweight {
    position: absolute;
    left: 9%;
    top: 72.8%;
    width: 28%;
    height: 4%;
    line-height: 20px;
    border-radius: 4px;
    background-color: #86E354;
    text-align: center;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    z-index: 999999;

  }

  .way {
    position: absolute;
    left: 4%;
    top: 12%;
    width: 90%;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .train {
    position: absolute;
    left: 4%;
    top: 33%;
    width: 90%;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .pend {
    position: absolute;
    left: 4%;
    top: 54%;
    width: 90%;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .over {
    position: absolute;
    left: 4%;
    top: 75%;
    width: 90%;
    height: 16%;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .borderway {
    position: absolute;
    left: 7%;
    top: 15.5%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_one {
    position: absolute;
    left: 7%;
    top: 22%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_two {
    position: absolute;
    right: 9%;
    top: 15.5%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_three {
    position: absolute;
    right: 9%;
    top: 22%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_four {
    position: absolute;
    left: 7%;
    top: 36.5%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_five {
    position: absolute;
    left: 7%;
    top: 43%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_six {
    position: absolute;
    right: 9%;
    top: 36.5%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_seven {
    position: absolute;
    right: 9%;
    top: 43%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_eight {
    position: absolute;
    left: 7%;
    top: 57%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_nine {
    position: absolute;
    left: 7%;
    top: 64%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_ten {
    position: absolute;
    right: 9%;
    top: 57%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_eleven {
    position: absolute;
    right: 9%;
    top: 64%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_twelve {
    position: absolute;
    left: 7%;
    top: 78%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_thirteen {
    position: absolute;
    left: 7%;
    top: 84%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 2px solid rgba(255, 0, 0, 1);
    z-index: 999999;
  }

  .borderway_fourteen {
    position: absolute;
    right: 9%;
    top: 78%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .borderway_fifteen {
    position: absolute;
    right: 9%;
    top: 84%;
    width: 149px;
    height: 4%;
    line-height: 20px;
    border-radius: 5px 5px 5px 5px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .urgent {
    position: absolute;
    left: 9%;
    top: 16.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_one {
    position: absolute;
    left: 9%;
    top: 23%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_two {
    position: absolute;
    right: 46%;
    top: 16.5%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_three {
    position: absolute;
    right: 46%;
    top: 23%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_four {
    position: absolute;
    left: 9%;
    top: 37.7%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_five {
    position: absolute;
    left: 9%;
    top: 44%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_six {
    position: absolute;
    right: 46%;
    top: 37.8%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_seven {
    position: absolute;
    right: 46%;
    top: 44.2%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_eight {
    position: absolute;
    left: 9%;
    top: 58%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_nine {
    position: absolute;
    left: 9%;
    top: 65%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_ten {
    position: absolute;
    right: 46%;
    top: 58%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_eleven {
    position: absolute;
    right: 46%;
    top: 65%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_twelve {
    position: absolute;
    left: 9%;
    top: 79%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_thirteen {
    position: absolute;
    left: 9%;
    top: 85%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_fourteen {
    position: absolute;
    right: 46%;
    top: 79%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .urgent_fifteen {
    position: absolute;
    right: 46%;
    top: 85%;
    width: 3px;
    height: 15px;
    line-height: 20px;
    background-color: rgba(255, 0, 0, 1);
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 1);
  }

  .billNum {
    position: absolute;
    left: 4px;
    top: -3px;
    width: 130px;
    height: 22px;
    color: rgba(16, 16, 16, 1);
    font-size: 15px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
}
</style>
