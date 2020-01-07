<template>
  <div id="app">
    <img src="./assets/img/顶部_左.png" class="top_left animated fadeInLeft" alt />
    <img src="./assets/img/顶部_右.png" class="top_right animated fadeInRight" alt />
    <router-view />
    <img src="./assets/img/clouds/编组 2.png" class="bottom_left animated fadeInLeft" alt />
    <img src="./assets/img/clouds/路径 30复制.png" class="bottom_center animated fadeInUp" alt />
    <img src="./assets/img/clouds/编组 16.png" class="bottom_right animated fadeInRight" alt />
  </div>
</template>

<style lang="less">
#app {
  position: relative;
  .top_right,
  .top_left {
    position: absolute;
    top: 0;
    display: inline-block;
  }
  .bottom_left,
  .bottom_center,
  .bottom_right {
    position: absolute;
    bottom: 0;
    display: inline-block;
  }

  .top_left {
    left: 0;
  }
  .top_right {
    right: 0;
  }
  .bottom_left {
    left: 0;
    width: 33.54%;
  }
  .bottom_right {
    right: 0;
    width: 48.19%;
  }
  .bottom_center {
    left: 33%;
    width: 23.82%;
    transform: translateY(-50%)
  }
}

@media screen and (max-width: 1200px) {
  .top_right,.bottom_right,.bottom_center {
    display: none;
  }
}
</style>
