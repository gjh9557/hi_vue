// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// ctionTip = false
import router from './router'
/* eslint-disable no-new */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(router);
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render: h=> h(App)

})
