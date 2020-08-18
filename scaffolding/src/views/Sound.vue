<template>
  <div>
    <div class="top">
      <!-- 声音页面导航信息开始 -->
      <div id="first">声音</div>
      <img class="play" src="../../public/resource/music_red.png" alt />
      <!-- 顶部选项卡开始 -->
      <mt-navbar v-model="active">
        <mt-tab-item id="1">雨声</mt-tab-item>
        <mt-tab-item id="2">白噪音</mt-tab-item>
        <mt-tab-item id="3">耳语</mt-tab-item>
        <mt-tab-item id="4">轻音乐</mt-tab-item>
        <mt-tab-item id="5">混合音</mt-tab-item>
      </mt-navbar>
      <!-- 顶部选项卡结束 -->
    </div>
    <!-- 声音页面导航信息结束 -->
    <!-- 面板区域开始 -->
    <div id="poser">
      <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="1">
          <div v-for="(v,k) of 50" :key="k">
            <img class="tu" src="../../public/resource/music_gray.png" alt />
            <!-- 歌曲名 -->
            <span class="musicname">都市夜雨</span>
            <br />
            <!-- 名字 -->
            <span class="biaoqian">冥想放空</span>
            <img class="push" src="../../public/resource/play.png" alt />
            <hr />
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div v-for="(v,k) of 50" :key="k">
            <img class="tu" src="../../public/resource/music_gray.png" alt />
            <!-- 歌曲名 -->
            <span class="musicname">都市夜雨</span>
            <br />
            <!-- 名字 -->
            <span class="biaoqian">冥想放空</span>
            <img class="push" src="../../public/resource/play.png" alt />
            <hr />
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div v-for="(v,k) of 50" :key="k">
            <img class="tu" src="../../public/resource/music_gray.png" alt />
            <!-- 歌曲名 -->
            <span class="musicname">都市夜雨</span>
            <br />
            <!-- 名字 -->
            <span class="biaoqian">冥想放空</span>
            <img class="push" src="../../public/resource/play.png" alt />
            <hr />
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <div v-for="(v,k) of 50" :key="k">
            <img class="tu" src="../../public/resource/music_gray.png" alt />
            <!-- 歌曲名 -->
            <span class="musicname">都市夜雨</span>
            <br />
            <!-- 名字 -->
            <span class="biaoqian">冥想放空</span>
            <img class="push" src="../../public/resource/play.png" alt />
            <hr />
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <div v-for="(v,k) of 50" :key="k">
            <img class="tu" src="../../public/resource/music_gray.png" alt />
            <!-- 歌曲名 -->
            <span class="musicname">都市夜雨</span>
            <br />
            <!-- 名字 -->
            <span class="biaoqian">冥想放空</span>
            <img class="push" src="../../public/resource/play.png" alt />
            <hr />
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 面板区域结束 -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //默认被选定的顶部选项卡及面板的ID
      active: "1",
    };
  },
};
</script>
<style scoped>
/*声音页面导航信息 */
#first {
  /* position: fixed; */
  margin-left: 1rem;
  margin-top: 2rem;
  font-size: 24px;
  font-weight: bold;
}
/* 顶部区域规划 */
#poser {
  margin-top: 2rem;
}
/* 顶部固定栏区域信息 */
.top {
  background-color: #fff;
  width: 100%;
  position: fixed;
  z-index: 10;
  margin-top: -2rem;
}
/* 顶部选项卡容器 */
.mint-navbar {
  clear: both;
  color: grey;
  margin: 0 0.6rem 0 -0.6em;
}
/* 顶部选项卡触发信息 */
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0px !important;
  color: #000 !important;
  font-weight: bold;
}
/* 顶部选项卡触发信息下划线 */
.mint-navbar .mint-tab-item.is-selected::after {
  content: "";
  display: block;
  width: 26px;
  height: 3px;
  background-color: red;
  margin: 0.2rem auto 0;
}
/* 顶部选项卡位置调整 */
.mint-navbar {
  padding: 0 !important;
}

/* 顶部选项卡字体样式调整 */
.mint-tab-item-label .mint-tab-item {
  font-size: 20px !important;
}
/* 顶部播放键位置 */
.play {
  float: right;
  margin-bottom: 0.6rem;
  margin-top: -2rem;
  margin-right: 1rem;
}
/* 音乐图 */
.tu {
  margin: 0.4rem;
  float: left;
  width: 3.5rem;
  clear: both;
}
/* 标签 */
.biaoqian {
  float: left;
  margin: -0.5rem 0 0 0.2rem;
  color: gray;
  font-size: 10px;
  border: 1px solid gray;
  display: block;
}
/* 歌曲名字 */
.musicname {
  font-weight: bold;
  padding: 1rem 1rem 0 1rem;
  display: block;
}
/* 音乐控制键 */
.push {
  width: 2rem;
  float: right;
  margin-right: 1.4rem;
  margin-top: -2rem;
}
/* 面板区域分支实名间隔 */
hr {
  clear: both;
  margin: 1rem 0 0 5rem;
}
/* 顶部选项卡区域与面板区域之间间隙位置 */
.mint-tab-container-item {
  margin-top: 6.3rem;
}
</style>