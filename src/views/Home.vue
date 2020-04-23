<template>
  <div class="home">
    <header></header>
    <Carousel></Carousel>
    <PromoArea></PromoArea>
    <BrandsArea :categories="categories"></BrandsArea>
    <div class="product-widget-area">
      <div class="zigzag-bottom"></div>
      <div class="container" style="margin-left: 0px; margin-right: 0px">
        <div class="row">
          <div class="col-md-4"  >
            <TopSellers></TopSellers>
          </div>
          <div class="col-md-4">
            <RecentlyViewed></RecentlyViewed>
          </div>
          <div class="col-md-4">
            <TopNew></TopNew>
          </div>
        </div>
      </div>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Home/HelloWorld.vue";
import Carousel from "@/components/Home/Carousel.vue";
import PromoArea from "@/components/Home/PromoArea.vue";
import BrandsArea from "@/components/Home/BrandsArea.vue";
import TopSellers from "@/components/Home/TopSellers.vue";
import RecentlyViewed from "@/components/Home/RecentlyViewed.vue";
import TopNew from "@/components/Home/TopNew.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Carousel,
    PromoArea,
    BrandsArea,
    TopSellers,
    RecentlyViewed,
    TopNew
  },
  props:{
    categories: []
  }
};
</script>
