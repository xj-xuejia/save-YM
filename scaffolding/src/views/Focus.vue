<template>
  <div>
    <div class="fop">
      <!-- 主题名开始 -->
      <div class="fbt">专注</div>
    </div>
    <!-- 主题名结束 -->
    <div class="pp">
      <!-- 副主题图开始 -->
      <router-link to="/me">
        <img
          class="fbg"
          src="../../public/resource/Pettyw160_90/pic_org_04cdce1e-3d0c-4751-8cb7-f73753f39a6b.jpg"
          alt
        />
        <!-- 副主题图结束 -->
      </router-link>
      <!-- 小模块选项开始 -->
      <div class="dd">
        <router-link class="mk" to="/me">
          <div class="mkbox">
            <!-- 小模块选项图 -->
            <img class="mkimg" src="../../public/resource/Mediumz140_140/109951164207707525.jpg" alt />
            <!-- 小模块选项主题介绍 -->
            <h3>灯下执笔</h3>
          </div>
        </router-link>
        <router-link class="mk" to="/sound">
          <div class="mkbox">
            <img class="mkimg" src="../../public/resource/Mediumz140_140/109951164766852562.jpg" alt />
            <h3>咖啡厅</h3>
          </div>
        </router-link>
        <router-link class="mk" to="/me">
          <div class="mkbox">
            <img class="mkimg" src="../../public/resource/Mediumz140_140/109951164858702235.jpg" alt />
            <h3>自习室</h3>
          </div>
        </router-link>
        <router-link class="mk" to="/sound">
          <div class="mkbox">
            <img class="mkimg" src="../../public/resource/Mediumz140_140/109951164940992975.jpg" alt />
            <h3>通勤路上</h3>
          </div>
        </router-link>
        <router-link class="mk" to="/me">
          <div class="mkbox">
            <img class="mkimg" src="../../public/resource/Mediumz140_140/109951165096324064.jpg" alt />
            <h3>图书馆</h3>
          </div>
        </router-link>
         <!-- 小模块选结束 -->
      </div>
    </div>
  </div>
</template>
<style  scoped>
/* 主标题字体样式 */
.fbt {
  margin: 3rem 1rem 1.4rem;
  font-size: 24px;
  font-weight: bold;
}
/* 主标题位置样式 */
.fop {
  background-color: #fff;
  width: 100%;
  position: fixed;
  z-index: 10;
  margin-top: -6rem;
}
/* 非主标题内容规划 */
.pp {
  margin: 5rem 1rem;
}
/* 副主题图样式 */
.fbg {
  width: 100%;
}
/* 模块综合样式 */
.mk {
  width: 50%;
  text-decoration: none;
  color:black;
}
/* 小模块布局方式 */
.dd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* 小模块图片 */
.mkimg {
  width: 100%;
}
/* 小模块盒子样式 */
.mkbox {
  padding: 0.5rem;
}
</style>