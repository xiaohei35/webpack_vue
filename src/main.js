// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $http from './utils/request.js'
import router from './router/index.js'
import store from './store/store.js'

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/index.js';
import {Aside,Header,Main} from 'element-ui'

Vue.config.productionTip = false
//挂载element-ui
import Element from 'element-ui';
Vue.use(Element, { size: 'small' });
Vue.prototype.$ELEMENT = { size: 'small' };

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
