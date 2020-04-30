import Vue from 'vue'
import Vuex from 'vuex'
import home from './home.js'
import menu from "./menu";
import products from "./products";
import cart from "./cart"
import checkout from "./checkout";

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    mainCart: {}
  },
  modules: {
    home,
    menu,
    products,
    cart,
    checkout
  }
})
