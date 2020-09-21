<template>
  <div class="Agency">
    <div class="wenzi">
      <div style="width:160px;display: flex;justify-content: flex-start;align-items: center;">
        <div class="line"></div>
        <div
          style="width: 152px;height: 25px;color: #362E2F;;font-family: 'PingFang SC';font-size: 18px;margin-left: 5px"
        >代办事项(1234)</div>
      </div>
      <div class="more" @click="even_more">更多></div>
    </div>
    <div class="applets-box">
      <div class="top-db">
        <div
          style="width:141px;display: flex;justify-content: flex-start;align-items: center;margin-left: 19px"
        >
          <div class="ataver">王</div>
          <div class="name-box">王晓</div>
          <div class="yx-box" style="margin-left: 6px">影响补录</div>
        </div>
        <div
          style="width: 48px;height: 22px;font-family: 'PingFang SC';font-size: 16px;color: #EC5348;margin-right: 12.5px"
        >待补录</div>
      </div>
      <div class="lines"></div>
      <div class="b-box">
        <div class="b-l-box">
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            icon="like"
            void-icon="like-o"
            void-color="#eee"
          ></van-rate>
          <div class="f-box">2019.03.24,客户在预约在小店区高新街15号,并陪同客户前往进行交易</div>
        </div>
        <div class="b-r-box">
          <img src="@/assets/juxin(5).png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.5
    };
  },
  methods: {
    even_more() {
      this.$router.push("/relenta");
    }
  }
};
</script>

<style lang="less">
.Agency {
  .wenzi {
    width: 462px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }
  .line {
    width: 3px;
    height: 16px;
    background-color: #c51729;
    border-radius: 1.5px;
  }
  .more {
    width: 45px;
    height: 25px;
    font-family: "PingFang SC";
    font-size: 16px;
    color: #c51729;
    margin-right: 12.5px;
  }
  .applets-box {
    width: 462px;
    height: 170px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px #f6f0f0;
    margin-top: 16px;
  }
  .top-db {
    width: 462px;
    height: 61.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ataver {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ec5348;
    color: white;
    font-size: 14px;
    font-family: "PingFang SC";
    text-align: center;
    line-height: 30px;
  }
  .lines {
    width: 430px;
    height: 1px;
    background-color: #362e2f;
    opacity: 10%;
    margin-left: 19px;
  }
  .b-box {
    width: 430px;
    height: 107px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 18px;
  }
  .b-l-box {
    width: 326px;
    height: 74px;
  }
  .b-r-box {
    width: 62px;
    height: 62px;
  }
  .f-box {
    width: 326px;
    height: 100%;
    font-family: "PingFang SC";
    font-size: 14px;
    color: #362e2f;
    margin-top: 16px;
  }
  .name-box {
    width: 33px;
    height: 22px;
    margin-left: 4px;
    color: #362e2f;
    font-size: 16px;
    font-family: "PingFang SC";
    text-align: center;
    line-height: 22px;
  }
  .yx-box {
    width: 66px;
    height: 22px;
    margin-left: 6px;
    text-align: center;
    line-height: 22px;
    color: #362e2f;
    font-size: 16px;
    font-family: "PingFang SC";
  }
}
</style>