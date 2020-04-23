<template>
  <div id="app">
    <app-header :categories="categories"></app-header>
    <router-view :categories="categories" />
    <app-footer :categories="categories"></app-footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {CategoriesMixin} from './mixins/Categories.js'
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  mixins: [CategoriesMixin],
  created() {
    this.getCategories();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
