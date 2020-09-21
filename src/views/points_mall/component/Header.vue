<template>
  <div class="id-box">
    <div v-if="newsFlag == true">
      <div style="height: 31px;width: 1024px;"></div>
      <header class="h-boxs">
        <div class="lefts-h-box" @click="lefts_Point">
          <img src="@/assets/goback.png" alt>
        </div>
        <div class="fonts-box">商品详情</div>
      </header>
    </div>
    <div v-else>
      <div style="height: 24px;width: 1024px;"></div>
      <header class="h-box">
        <div class="left-h-box">
         <img src="@/assets/logo (1).png" alt="">
        </div>
        <div class="right-h-box" @click="getDialog">
          <img style="width:29px;height: 29px; " src="@/assets/1.png" alt="你的图片消失了">
        </div>
      </header>
    </div>
    <Dialog ref="xs"></Dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog";
export default {
  props: ["newsFlag"],
  components: {
    Dialog
  },
  data() {
    return {};
  },
  methods: {
    getDialog() {
      this.$refs.xs.show();
    },
    lefts_Point() {
      this.$router.push('/home')
    }
  }
};
</script>

<style lang="less">
.id-box {
  .h-box {
    width: 1024px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
  }
  .h-boxs {
    width: 1024px;
    height: 44px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3px;
  }
  .left-h-box {
    width: 146px;
    height: 44px;
    margin-left: 20px;
    font-size: 18px;
  }

  .right-h-box {
    width: 34px;
    height: 34px;
    margin-right: 20px;
    margin-top: 5px;
  }
  .lefts-h-box {
    margin-left: 20px;
    width: 26px;
    height: 26px;
  }
  .fonts-box {
    width: 86px;
    height: 30px;
    font-family: "PingFang SC";
    color: #362e2f;
    font-size: 22px;
    letter-spacing: -0.73px;
    margin-left: 455px;
  }
}
</style>