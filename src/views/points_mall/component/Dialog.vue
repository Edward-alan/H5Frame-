<template>
  <div class="d-box" >
    <van-dialog
      class="xianshiOff"
      :style="{left:left}"
      v-model="xianshi"
      width="988px"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <div class="hs-box">
        <div class="box-l">
          <div class="font-l-box">消息列表</div>
          <div class="font-r-box">一键已读</div>
        </div>
        <div class="img-box" @click="quxiao">
          <img src="@/assets/6.png" alt>
        </div>
      </div>
      <div class="hr-box"></div>
      <ul class="cxk-box">
        <li
          v-for="(item,index) of data "
          @click="choose(item.flag)"
          :class="{change:index == val}"
          :key="index"
          class="li-box"
        >
          <div :class="{changes:index == val}" class="font-color">{{item.nr}}</div>
          <div class="tp-box" v-show="index == val">
            <img src="@/assets/info.png" alt>
          </div>
        </li>
      </ul>
      <div class="bottom-box">
        <div class="card-box">
          <div class="top-font">您提交的客户王健鹏的现场开卡已通过！</div>
          <div class="middle-font">客户号：1610007814</div>
          <div class="bottom-font">卡号：62303966100283516</div>
          <div class="i-box">
            <div style="width: 34px;height: 34px;">
              <img src="@/assets/new.png" alt>
            </div>
            <span
              style="font-size: 14px;color: #362E2F;font-family: 'PingFang SC';letter-spacing: -0.47px;display: inline-block;margin-top: 14px"
            >2019-04-09</span>
          </div>
        </div>
        <div class="card-box">
          <div class="top-font">您提交的客户王健鹏的现场开卡已通过！</div>
          <div class="middle-font">客户号：1610007814</div>
          <div class="bottom-font">卡号：62303966100283516</div>
        </div>
        <div class="card-box">
          <div class="top-font">您提交的客户王健鹏的现场开卡已通过！</div>
          <div class="middle-font">客户号：1610007814</div>
          <div class="bottom-font">卡号：62303966100283516</div>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
      left:'150%',
      xianshi: false,
      data: [
        { nr: "客户号开立", flag: "0", info: "30" },
        { nr: "现场开卡", flag: "1", info: "30" },
        { nr: "网银签约", flag: "2", info: "30" },
        { nr: "智多薪签约", flag: "3", info: "30" },
        { nr: "积分开卡", flag: "4", info: "30" }
      ],
      val: ""
    };
  },
  methods: {
    show() {
      this.xianshi = true;
      console.log(1);
    },
    choose(e) {
      this.val = e;
    },
    quxiao() {
      this.xianshi = false;
    }
  }
};
</script>

<style lang="less">
.d-box {
  .van-overlay{
    left:100%;
  }
 
  .hs-box {
    width: 926px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
  }
  .box-l {
    width: 225px;
    height: 32px;
    display: flex;
    justify-content: space-around;
    align-items: start;
    text-align: center;
    margin-left: 32px;
  }
  .font-l-box {
    width: 133px;
    height: 42px;
    font-family: "PingFang SC";
    font-size: 30px;
    color: #121111;
    line-height: 42px;
  }
  .font-r-box {
    width: 92px;
    height: 30px;
    color: #c51729;
    font-size: 22px;
    font-family: "PingFang SC";
    margin-top: 12px;
  }
  .img-box {
    width: 60px;
    height: 60px;
  }
  .hr-box {
    width: 924px;
    height: 1px;
    background-color: #362e2f;
    margin-top: 23px;
    margin-left: 32px;
    opacity: 10%;
  }
  .cxk-box {
    width: 924px;
    height: 52px;
    margin-top: 19px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 32px;
  }
  .li-box {
    width: 181px;
    height: 52px;
    border-radius: 6px 6px 0px 0px;
    background-color: #d9cece;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .font-color {
    width: 123px;
    height: 28px;
    font-size: 20px;
    font-family: "PingFang SC";
    color: white;
    text-align: center;
    line-height: 28px;
    margin-top: 13px;
    z-index: 1;
  }
  .change {
    background-color: white;
    box-shadow: 0 -1px 6px 0 rgba(141, 135, 135, 0.17);
  }
  .changes {
    color: #c51729;
  }
  .tp-box {
    width: 34px;
    height: 34px;
    margin-right: 21px;
    position: absolute;
    top: 2px;
    left: 142px;
  }
  .bottom-box {
    width: 924px;
    height: 100%;
    box-shadow: 0px 2px 12px 0px rgba(141, 135, 135, 0.17);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 32px;
    background-color: white;
  }
  .card-box {
    width: 292px;
    height: 140px;
    box-shadow: 0px 2px 12px 0px rgba(141, 135, 135, 0.17);
    border-radius: 4px;
    background-color: white;
  }
  .top-font {
    width: 290px;
    height: 21px;
    letter-spacing: -0.5px;
    color: #362e2f;
    font-size: 15px;
    line-height: 21px;
    margin-left: 20px;
    margin-top: 20px;
    font-family: "PingFang SC";
  }
  .middle-font {
    width: 183px;
    height: 21px;
    letter-spacing: -0.5px;
    color: #362e2f;
    font-size: 15px;
    line-height: 21px;
    margin-left: 20px;
    margin-top: 5px;
    font-family: "PingFang SC";
  }
  .bottom-font {
    width: 237px;
    height: 21px;
    letter-spacing: -0.5px;
    color: #362e2f;
    font-size: 15px;
    line-height: 21px;
    margin-left: 20px;
    margin-top: 4px;
    font-family: "PingFang SC";
  }
  .i-box {
    width: 176px;
    height: 34px;
    margin-left: 164px;
    margin-top: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>