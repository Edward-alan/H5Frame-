<template>
  <div id="points">
    <Header></Header>
    <div class="main-box">
      <div class="Scanning">
        <div class="scann" @click="opents">
          <img src="@/assets/yuyin3-3.png" alt>
        </div>
        <div class="scann" @click="dilts">
          <!--点击客户识别显示影藏-->
          <!-- <img :src="this.i == 0 ? srcs : nosrc" alt> -->
          <img src="@/assets/yuyin3-4.png" alt="">
        </div>
      </div>
      <div class="left-m-box">
        <div class="h">
          <img src="@/assets/5-5.png" alt>
        </div>
        <div v-if="flag" class="login" @click="logindata">
          <img src="@/assets/shop.png" alt>
        </div>
        <div v-else class="show-login" @click="glances">积分余额***></div>
        <Tab></Tab>
      </div>
      <div class="right-m-box">
        <Applets></Applets>
        <Agency></Agency>
      </div>
    </div>
    <Ldialog ref="login"></Ldialog>
    <!-- 语音功能 -->
    <!-- <Speech type="confirm" :showstate="speechShow">
      <div slot="text" class="VoiceOver">
        <div class="eatchs">
          <p>你可以这样说</p>
          <div class="cancel" @click="cancelOffs"></div>
        </div>
        <div class="voiceMan">
          <p style="font-size:26px;">"客户号开立"</p>
          <p style="font-size:22px;">"新综合业务"</p>
          <p style="font-size:16px;">"流程状态查询"</p>
          <p style="font-size:12px;">"积分卡开卡"</p>
          <p style="font-size:20px;">......</p>
        </div>
        <div class="articleVoice"></div>
      </div>
    </Speech> -->
  </div>
</template>

<script>
import Tab from "../points_mall/component/tab";
import Applets from "../points_mall/component/Applets";
import Header from "../points_mall/component/Header";
import Agency from "../points_mall/component/Agency";
import Ldialog from "../points_mall/component/Login-dialog";
// import Speech from "../points_mall/component/";
export default {
  components: {
    Tab,
    Applets,
    Header,
    Agency,
    Ldialog,
    // Speech
  },
  data() {
    return {
      flag: true,
      speechShow: false,
      srcs: require("@/assets/scan1.png"),
      nosrc: require("@/assets/voice1.png")
    };
  },
  methods: {
    logindata() {
      this.$refs.login.xianshi();
      this.flag = false;
    },
    glances() {
      this.$router.push("./member");
    },
    opents() {
    //   this.speechShow = true;
      console.log(123);
    },
    dilts() {
      //客户识别
    //   if (this.i == 0) {
    //     this.showc = true;
    //   } else {
    //     this.successFuShow = true;
    //     console.log(this.Idata);
    //   }
    console.log('客户识别')
    }
  }
};
</script>

<style  lang="less">
#points {
  .main-box {
    width: 1024px;
    height: 100%;
    background-color: #fbf9f9;
    padding-top: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .Scanning {
      width: 65px;
      height: 140px;
      position: fixed;
      top: 88px;
      left: 147%;
      z-index: 99;
      .scann {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .left-m-box {
    width: 492px;
    height: 100%;
    border-radius: 5px;
    position: relative;
  }
  .h {
    width: 492px;
    height: 249px;
    background-color: #c41528;
    border-radius: 12px;
    margin-left: 20px;
  }
  .login {
    width: 112px;
    height: 34px;
    position: absolute;
    left: 120px;
    top: 185px;
  }
  .right-m-box {
    width: 462px;
    height: 100%;
    border-radius: 5px;
    margin-right: 20px;
  }
  .show-login {
    width: 166px;
    height: 34px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 #f6f0f0;
    font-size: 20px;
    font-family: "PingFang SC";
    color: #ec5348;
    position: absolute;
    left: 62px;
    top: 197px;
    text-align: center;
    line-height: 34px;
    background: #fff;
  }
}
</style>