import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookie'
import Paginate from 'vuejs-paginate'

//importing style files
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import './assets/css/style.css';

import 'bootstrap';

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.component('paginate', Paginate);
export const eventBus = new Vue();

axios.defaults.baseURL = 'http://localhost:3000';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
