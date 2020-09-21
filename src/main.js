import Vue from "vue";
import "./styles/common.less";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import "./router/guard";
import "swiper/swiper-bundle.css";
import Vant from "vant";
import "vant/lib/index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import eventBus from "./utils/eventBus";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "mock") {
  // eslint-disable-next-line global-require
  const { mockXHR } = require("../mock");
  mockXHR();
}

// if (process.env.VUE_APP_ENV === 'development') {
//   // eslint-disable-next-line global-require
//   const VConsole = require('vconsole');
//   // eslint-disable-next-line no-new
//   new VConsole();
// }
Vue.use(VueAwesomeSwiper);
Vue.use(Vant);
Vue.prototype.$bus = eventBus;

function startApp() {
  // TODO 创建VUE对象
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
  console.log("after start", new Date().getTime());
}

if (process.env.VUE_APP_ENV === "production") {
  console.log("before start", new Date().getTime());
  // TODO 检查AlipayJSBridge是否已经注入
  if (window.AlipayJSBridge) {
    console.log("has AlipayJSBridge");
    startApp();
  } else {
    console.log("has no AlipayJSBridge");
    // 如果没有注入则监听注入的事件
    document.addEventListener("AlipayJSBridgeReady", startApp, false);
  }
} else {
  startApp();
}
