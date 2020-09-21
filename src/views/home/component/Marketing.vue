<template>
  <div class="wraps">
    <!-- <van-swipe class="swiper" vertical :autoplay="3000" :duration="500">
      <van-swipe-item>
        <img src="@/assets/2.png" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/5.png" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/1-3.png" alt>
      </van-swipe-item>
    </van-swipe> -->
    <div class="wrapper">
      <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <dl class="dls">
          <div class="phoenix">
            <img src="@/assets/phoenix.png" alt>
          </div>
          <dt>
            <img src="@/assets/3.png" alt>
          </dt>
          <dd>
            <h4>惠农存</h4>
            <p>专门针对村镇银行客户的一款存款产品</p>
            <button class="particulars" @click="details">查看详情</button>
          </dd>
        </dl>
        <dl class="dls">
          <div class="phoenix">
            <img src="@/assets/phoenix.png" alt>
          </div>
          <dt>
            <img src="@/assets/3.png" alt>
          </dt>
          <dd>
            <h4>惠存钱</h4>
            <p>季得利，年终利，放心 存，月得利</p>
            <button class="particulars" @click="details">查看详情</button>
          </dd>
        </dl>
        <dl class="dls">
          <div class="phoenix">
            <img src="@/assets/phoenix.png" alt>
          </div>
          <dt>
            <img src="@/assets/3.png" alt>
          </dt>
          <dd>
            <h4>立得利</h4>
            <p>季得利，年终利，放心 存，月得利</p>
            <button class="particulars" @click="details">查看详情</button>
          </dd>
        </dl>
      </van-pull-refresh> -->
      <!-- 输入身份证客户号识别 -->
      <!-- <Popout type="confirm" @took="okfall" @tocancel="cancelfall" :showstate="showc"> -->
      <!-- 客户识别身份识别 -->
      <!-- <span slot="tlt">确认</span>
        <div slot="text" class="texts">
          <p class="textPps">客户识别</p>
          <div class="inputer">
            <div class="xiuxiunv">
              <img src="@/assets/nv1.png" alt>
            </div>
            <input type="text" placeholder="身份证/客户号/客户名称" v-model="place">
            <div class="image">
              <img src="@/assets/4.png" alt>
            </div>
          </div>
        </div>
      </Popout>-->
      <!--客户识别身份识别  -->
      <!-- <Customer type="confirm" @tookOK="tookOK" @tocancelfa="tocancelfa" :showstate="customerShow"> -->
      <!-- 客户识别身份识别 -->
      <!-- <span slot="tlt">确认</span>
        <div slot="text" class="texts">
          <div class="identification">
            <p class="textApp">客户识别</p>
            <div class="cha" @click="callOff">
              <img src="@/assets/6.png" alt>
            </div>
          </div>
          <Table/>
        </div>
      </Customer>-->
      <!--客户识别成功状态下的客户识别 -->
      <!-- <Successfu
        type="confirm"
        @notFood="notFoods"
        @calendar="calendars"
        @prosperity="prosperitys"
        @ontinue="ontinues"
        :showstate="successFuShow"
      >
        <div slot="text" class="texts">
          <div class="Canceled" @click="tocaOOf">
            <img src="@/assets/6.png" alt>
          </div>
          <div class="client_information">
            <ul class="uls-clien">
              <li>
                <p>姓名:</p>
                <span>张欣欣</span>
              </li>
              <li>
                <p>客户号:</p>
                <span>161200252</span>
              </li>
              <li>
                <p>所属机构:</p>
                <span>晋城银行王村北街小微支行</span>
              </li>
              <li>
                <p>主联系人:</p>
                <span>客户经理(0500)</span>
              </li>
            </ul>
          </div>
        </div>
      </Successfu>-->
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

      <div class="Scanning">
        <!-- <div class="scann" @click="opent">
          <img src="@/assets/yuyin1.png" alt>
        </div> -->
        <div class="scann" @click="dilts">
          <!--点击客户识别显示影藏-->
          <img :src="this.i == 0 ? srcs : nosrc" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Popout from "@/components/popout";
// import Table from "@/components/Tables/table";
// import Customer from "@/components/customer/customer";
// import Speech from "@/components/speech/speech";
// import BScroll from "better-scroll";
// import Successfu from "@/components/successfu/successfu";
export default {
  name: "Marketing",
  props: {},
  components: {
    // Popout,
    // Table,
    // Speech,
    // Successfu,
    // Customer
  },
  data() {
    return {
      isLoading: false,
      showc: false,
      customerShow: false,
      speechShow: false,
      successFuShow: false,
      place: "",
      Idata: "",
      arrs: [],
      i: 0,
      // srcs: require("@/assets/scan1.png"),
      // nosrc: require("@/assets/voice1.png")
    };
  },
  computed: {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    dilts() {
      //客户识别
      if (this.i == 0) {
        this.showc = true;
        console.log(12131);
      } else {
        this.successFuShow = true;
        console.log(this.Idata);
      }
    },
    //客户号识别取消提示
    // cancelfall() {

    //   this.showc = false;
    //   this.place = "";
    // },
    // tookOK() {
    //   this.customerShow = false;
    //   var data1 = JSON.parse(sessionStorage.getItem("key"));
    //   this.Idata = data1;
    //   if (this.Idata.nambers == "") {
    //     this.i = 0;
    //   } else {
    //     this.i = 1;
    //   }
    // },
    // okfall() {
    //   //确认
    //   var arr = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    //   var name = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,5}$/;
    //   if (
    //     this.place == "" ||
    //     (!arr.test(this.place) && !name.test(this.place))
    //   ) {
    //     Toast("识别证件类型或拍照方式不正确");
    //   } else {
    //     this.place = "";
    //     this.showc = false;
    //     this.customerShow = true;
    //     console.log("调接口");
    //   }
    // },
    // tocancelfa() {
    //   this.customerShow = false;
    // },
    // callOff() {
    //   this.customerShow = false;
    //   this.showc = false;
    // },
    details() {
      // this.$router.push("/details");
      console.log("跳转详情");
    },
    opent() {
      this.speechShow = true;
    },
    // cancelOffs() {
    //   this.speechShow = false;
    // },
    // tocaOOf() {
    //   this.successFuShow = false;
    // },
    // notFoods() {
    //   console.log("不是我的菜");
    // },
    // calendars() {
    //   console.log("再接再历");
    // },
    // prosperitys() {
    //   console.log("成功");
    // },
    // ontinues() {
    //   console.log("继续");
    // }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wraps {
  width: 984px;
  height: 1150px;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  border-radius: 13px;
  .swiper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    /deep/ .van-swipe__indicators {
      width: 30px;
      height: 160px;

      i {
        width: 6px;
        height: 30px;
        border-radius: 100px;
        margin: 5px 10px;
        background: #fff;
        border: 1px solid #fff;
      }
    }
  }
  .wrapper {
    width: 283px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 30px;
    display: flex;
    flex-direction: column;
    /deep/ .van-pull-refresh {
      overflow: visible;
    }
    .dls {
      height: 194px;
      background: #fff;
      margin: 20px auto;
      display: flex;
      border-radius: 10px;
      position: relative;

      .phoenix {
        width: 62px;
        height: 62px;
        z-index: 100;
        position: absolute;
        top: -15px;
        right: -18px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      dt {
        width: 98px;
        height: 162px;
        margin: 16px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        // flex: 1;
        width: 137px;

        h4 {
          margin: 30px 0 0 0;
          font-size: 18px;
        }
        p {
          margin: 30px 0 0 0;
          color: rgba(175, 175, 175, 0.884);
          font-size: 12px;
        }
        .particulars {
          width: 76px;
          height: 24px;
          border-radius: 30px;
          border: 1px solid #c92435;
          color: #c92435;
          background: #fff;
          text-align: center;
          margin: 33px 0 0 60px;
          font-size: 11px;
        }
      }
    }
    .texts {
      .textPps {
        text-align: center;
        font-size: 28px;
        margin: 20px 0 50px 0;
        font-weight: normal;
      }
      .identification {
        width: 94%;
        height: 60px;
        display: flex;
        line-height: 50px;
        margin: 0 auto;
        justify-content: space-between;
        border-bottom: 1px solid rgba(211, 211, 211, 0.623);
        .textApp {
          text-align: left;
          font-size: 24px;
          font-weight: normal;
          margin-left: 15px;
        }
        .cha {
          width: 40px;
          height: 40px;
          margin-right: 15px;
          margin-top: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .inputer {
      width: 516px;
      height: 68px;
      margin: 0 auto;
      display: flex;
      border: 1px solid #362e2f;
      position: relative;
      border-radius: 6px;
      .image {
        width: 54px;
        height: 54px;
        margin: 7px 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .xiuxiunv {
        width: 100px;
        height: 70px;
        position: absolute;
        top: -65px;
        left: 10px;
        z-index: -1;
      }
      input {
        width: 86%;
        height: 100%;
        outline: none;
        border: 0;
        font-size: 20px;
        font-weight: 100;
        padding-left: 15px;
        border-radius: 6px;
      }
    }
    .Scanning {
      width: 65px;
      height: 140px;
      position: fixed;
      top: 110px;
      left: 59%;
      .scann {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .eatchs {
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: space-between;
      font-weight: normal;
      p {
        font-size: 22px;
        line-height: 48px;
        padding-left: 20px;
        font-weight: normal;
      }
      .cancel {
        width: 48px;
        height: 48px;
        // background: url("../../assets/cancel.png");
        margin-right: 20px;
      }
    }
    .voiceMan {
      width: 50%;
      height: 200px;
      margin: 37px auto 6px;
      text-align: center;
      font-weight: normal;
      p {
        width: 155px;
        line-height: 37px;
        margin: 0 auto;
      }
    }
    .articleVoice {
      width: 100%;
      height: 77px;
      // background: url("../../assets/yuyin1.png");
    }
    .Canceled {
      width: 98%;
      height: 40px;
      text-align: right;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .client_information {
      width: 809px;
      height: 162px;
      background: rgb(231, 220, 221);
      margin: 19px auto 0;
      .uls-clien {
        width: 809px;
        height: 162px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
          width: 300px;
          line-height: 76px;
          display: flex;
          font-size: 22px;
          font-weight: normal;
          p {
            color: rgb(173, 171, 171);
            width: 94px;
            text-align: right;
          }
          span {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>