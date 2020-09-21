<template>
  <header class="header">
    <div class="left">
       <img src="@/assets/jcbank.png" alt>
    </div>
    <div class="header-list">
      <div class="name">
        <p class="p_p">姓名 </p>
        <div class="touxiang">
          <div class="touxiang">
            <img src="@/assets/manager.png" alt>
          </div>
        </div>
      </div>
      <div class="information" @click="getDialog">
        <img src="@/assets/news.png" alt>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    getDialog() {
        console.log(123132)
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 44px;
  display: flex;
  margin: 24px auto 0;
  padding: 0 20px;
  .left {
    width: 80%;
    height: 40px;
    line-height: 40px;
  }
  .header-list {
    flex: 1;
    display: flex;
    .name {
      width: 99px;
      height: 60px;
      display: flex;
      position: relative;
      .p_p {
        width: 117px;
        height: 40px;
        font-size: 16px;
        border-radius: 150px;
        background: url("../../../assets/sale.png");
        line-height: 45px;
        padding-left: 10px;
      }
      .touxiang {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        position: absolute;
        top:2px;
        right: -10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .information {
      width: 34px;
      height: 34px;
      margin: 5px 0 0 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>