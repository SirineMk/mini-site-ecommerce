import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//importing style files
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import './assets/css/style.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
