<template>
  <div class="single-product-widget">
    <h2 class="product-wid-title">Top New</h2>
    <a href="#" class="wid-view-more">View All</a>
    <div class="single-wid-product" v-for = "product in topNew" :key="product">
      <a href="single-product.html">
        <img :src = "require('../../assets/img/'+ product.imageName)" alt class="product-thumb" />
      </a>
      <h2>
        <a href="single-product.html">{{product.name}}}</a>
      </h2>
      <div class="product-wid-rating">
        <span v-for=" star in product.review" :key="star">
        <i class="fa fa-star"></i>
        </span>
        <span v-for=" star in (5-product.review)" :key="star">
        <i class="fa fa-star" style="color: gray"></i>
        </span>
      </div>
      <div class="product-wid-price">
        <ins>${{product.price.toFixed(2)}}</ins>
        <del>${{prixBarre(product.price, product.discountRate).toFixed(2)}}</del>
      </div>
    </div>
  </div>
</template>

<script>
  import {TopNewMixin} from '../../mixins/TopNew.js'
  export default {
    mixins: [TopNewMixin],
    created() {
      this.getTopNew();
    },
    methods: {
      prixBarre(price, discount) {
        return price * (1+ (discount/100));
      }
    }
  };
</script>