<template>
  <div class="home-page">
    <Swiper class="swipers">
      <div class="right_slide">
        <img src="@/assets/right.png" alt>
      </div>
      <swiper-slide class="slide-home">
        <Header/>
        <Marketing/>
      </swiper-slide>
      <swiper-slide>
        <PointsMall/>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import Header from "../home/component/Header";
import Marketing from "../home/component/Marketing";
import PointsMall from "../points_mall/Points-mall";
export default {
  name: "Home",
  components: {
    Header,
    Marketing,
    PointsMall
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@import "@/styles/variable.less";

.home-page {
  width: 100vw;
  height: 100vh;
  .swipers {
    width: 100%;
    height: 100%;
    .right_slide {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      right: 0;
    }
  }
  .slide-home {
    display: flex;
    flex-direction: column;
  }
}
</style>
