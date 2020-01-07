<template>
  <div class="homeBox">
    <!-- 遮挡层 -->
    <div class="barrier" v-if="isTwisted">
      <!-- 扭蛋机 -->
      <twistedEggMachine
        @closeDraw="closeDraw"
        @openCountDown="openCountDown"
        @triggerBrotherMethod="triggerBrotherMethods"
        @updatedWinner="updatedWinners"
        @updatedDraw="updatedDraw"
        :thisDraw="thisDraw"
      ></twistedEggMachine>
    </div>
    <!-- 倒计时 -->
    <div class="countdownBox" v-if="isCountdown">
      <countdown @closeCountDown="closeCountDown" @openResults="openResults"></countdown>
    </div>
    <!-- 中奖结果 -->
    <div class="resultsBox" v-show="isResults">
      <results ref="result" @closeResults="closeResults" class="animated bounceIn"></results>
    </div>
    <div class="home w">
      <!-- 四抽奖 -->
      <div class="drawBox">
        <draw ref="draw" @openDraw="openDraw" @showSun="showSun"></draw>
      </div>
      <!-- 获奖名单 -->
      <div class="winnersBox">
        <winners ref="winners"></winners>
      </div>
      <img src="../assets/img/发财.png" class="fc" alt="麻将">
    </div>
  </div>
</template>

<script>
import twistedEggMachine from "../components/twistedEggMachine/twistedEggMachine.vue";
import winners from "../components/winners/winners.vue";
import draw from "../components/draw/draw.vue";
import countdown from "../components/countdown/countdown.vue";
import results from "../components/results/results.vue";

import {
  storageAward,
  storagePeople,
  winnersName
} from "../assets/js/award.js";

export default {
  name: "home",
  data() {
    return {
      isTwisted: false,
      isCountdown: false,
      isResults: false,
      thisDraw: ""
    };
  },
  components: {
    twistedEggMachine,
    winners,
    draw,
    countdown,
    results
  },
  methods: {
    // 开启抽奖
    openDraw(val) {
      this.thisDraw = val;
      this.isTwisted = true;
    },
    closeDraw() {
      this.isTwisted = false;
    },
    // 开启倒计时
    openCountDown() {
      this.isCountdown = true;
    },
    closeCountDown() {
      this.isCountdown = false;
    },
    // 开启结果
    openResults() {
      this.isResults = true;
    },
    closeResults() {
      this.isResults = false;
    },
    // 获奖人
    triggerBrotherMethods(val) {
      this.$refs.result.getNameOrAward(val);
    },
    // 更新获奖名单
    updatedWinners() {
      this.$refs.winners.getPrizeName();
    },
    // 更新抽奖
    updatedDraw() {
      this.$refs.draw.getTransparency();
    },
    // 展示阳光奖
    showSun(){
      this.$refs.winners.getSunPrize()
    }
  },
  created() {
    storageAward();
    storagePeople();
    winnersName();
  }
};
</script>

<style scoped lang="less">
.homeBox {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  .barrier {
    width: 100%;
    height: 100%;
    background-color: rgba(36, 36, 36, 0.79);
    position: absolute;
    z-index: 3;
  }
  .countdownBox,
  .resultsBox {
    width: 100%;
    height: 100%;
    background-color: rgba(36, 36, 36, 0.79);
    position: absolute;
    z-index: 4;
  }
}
.home {
  position: relative;
  height: 100%;
  .winnersBox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -119px;
  }
  .drawBox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  .fc{
    position: absolute;
    width: 24.51%;
    left: 27px;
    bottom: 0;
  }
}
</style>
