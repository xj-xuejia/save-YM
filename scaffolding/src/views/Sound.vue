<template>
  <div id="pingbao">
    <div>
      <!-- 声音页面导航信息开始 -->
      <div id="first">声音</div>
      <img class="play" src="../../public/resource/music_red.png" alt />
      <!-- 声音页面导航信息结束 -->
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
    <!-- 面板区域开始 -->
    <div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1" style="border:2px solid red">
          <img class="tu" src="../../public/resource/music_gray.png" alt />
          <!-- 歌曲名 -->
          <span class="musicname">都市夜雨</span>
          <br />
          <!-- 名字 -->
          <span class="biaoqian">冥想放空</span>
          <img class="push" src="../../public/resource/play.png" alt />
          <hr />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <p>ABCDE</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <p>中华人民共和国</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <p>This a test</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <p>This a one</p>
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
<style>
/* 顶部选项卡容器 */
.mint-navbar {
  padding: 0 2rem 0;
  color: grey;
  width: 88%;
  margin: 0 0 0 -0.3em;
}
/*声音页面导航信息 */
#first {
  margin-left: 1rem;
  margin-top: 2rem;
  font-size: 30px;
  font-weight: bold;
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
  margin: 0 auto;
}
/* 顶部选项卡位置调整 */
.mint-navbar {
  padding: 0 !important;
}

/* 顶部选项卡字体样式调整 */
.mint-tab-item-label {
  padding-bottom: 8px;
  font-size: 15px !important;
}
/* 顶部播放键位置 */
.play {
  position: absolute;
  top: 18px;
  right: 1em;
}
/* 音乐图 */
.tu {
  margin-top: 3px;
  float: left;
  width: 51px;
  clear: both;
}
/* 标签 */
.biaoqian {
  float: left;
  margin-left: -91px;
  margin-top: 16px;
  color: gray;
  font-size: 10px;
  padding: 3px;
  border: 1px solid gray;
}
/* 歌曲名字 */
.musicname {
  margin-left: 20px;
  font-size: 23px;
  float: left;
}
/* 音乐控制键 */
.push {
  width: 8%;
  float: right;
  margin-right: 5px;
  margin-top: -6px;
}
hr {
  clear: both;
  margin: 43px 5px 0 50px;
}
</style>