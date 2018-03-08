// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex'
import axios from 'axios'
import ECharts from 'vue-echarts/components/ECharts'
import ElementUI from 'element-ui'
import './mock/mock'
import 'element-ui/lib/theme-default/index.css'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import '../static/js/dark'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.component('chart', ECharts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
