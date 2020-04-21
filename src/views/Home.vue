<template>
  <div class="home">
    <header></header>
    <Carousel></Carousel>
    <PromoArea></PromoArea>
    <BrandsArea></BrandsArea>
    <div class="product-widget-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
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
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'
import PromoArea from '@/components/PromoArea.vue'
import BrandsArea from '@/components/BrandsArea.vue'
import TopSellers from '@/components/TopSellers.vue'
import RecentlyViewed from '@/components/RecentlyViewed.vue'
import TopNew from '@/components/TopNew.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel,
    PromoArea,
    BrandsArea,
    TopSellers,
    RecentlyViewed,
    TopNew
  }
}
</script>
