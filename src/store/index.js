import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

Vue.use(Vuex);

// 利用webpack来引入文件
const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((module, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const $module = { ...module };
  const value = modulesFiles(modulePath);
  $module[moduleName] = value.default;
  return $module;
}, {});

const store = new Vuex.Store({
  modules,
  getters,
});

export default store;
