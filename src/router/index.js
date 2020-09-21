import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 利用webpack来引入文件
const modulesFiles = require.context('./modules', true, /\.js$/);
const routesModules = [];
modulesFiles.keys().forEach((modulePath) => {
  const module = modulesFiles(modulePath);
  if (module.default instanceof Array) {
    module.default.forEach((item) => routesModules.push(item));
  } else {
    routesModules.push(module.default);
  }
});

const router = new VueRouter({
  mode: 'hash',
  routes: [
    ...routesModules,
  ],
});

export default router;
