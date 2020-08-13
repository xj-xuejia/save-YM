<template>
  <!-- 主页开始 -->
  <div id="index">
    <!-- 右上角时间 -->
    <span id="time">时间</span>
    <!-- 时间结束 -->
    <!-- 福利入口 -->
    <span id="fuli">
      <a href="javascript:;">
        <img src="../assets/image/fuli.png" alt />
      </a>
    </span>
    <!-- 福利结束 -->
    <!-- 轮播区域 -->
    <div id="lunbo">
      <img src="../assets/image/lunbo.png" alt />
    </div>
    <!-- 轮播结束 -->
    <!-- 选项卡开始  -->
    <mt-navbar v-model="active" id="go">
      <mt-tab-item id="1">
        <img src="../assets/image/yusheng.png" sloat="icon" />
        雨声
      </mt-tab-item>
      <mt-tab-item id="2">
        <img src="../assets/image/zhuanzhu.png" sloat="icon" />
        专注
      </mt-tab-item>
      <mt-tab-item id="3">
        <img src="../assets/image/mingxiang.png" sloat="icon" />
        冥想
      </mt-tab-item>
      <mt-tab-item id="4">
        <img src="../assets/image/jianya.png" sloat="icon" />
        减压
      </mt-tab-item>
      <mt-tab-item id="5">
        <img src="../assets/image/jieyou.png" sloat="icon" />
        解忧
      </mt-tab-item>
    </mt-navbar>
    <!-- 选项卡结束 -->
    <!-- 助眠声音开始 -->
    <!-- 助眠声音结束 -->
  </div>
  <!-- 主页结束 -->
</template>

<script>
export default {
  data() {
    return {
      n: "",
      active: 1,
    };
  },
};
</script>