import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Header from "../components/Header.vue";
import Shop from "../views/Shop.vue";
import Product from "../views/Product";
import Cart from "../views/Cart"
import Checkout from "../views/Checkout"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      header: Header
    }
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: Shop
  },
  {
    path: "/shop/:id/:productId",
    name: "Product",
    component: Product
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
