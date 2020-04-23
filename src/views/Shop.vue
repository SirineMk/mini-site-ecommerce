<template>
  <div>
    <BigTitle :shopTitle="shop.name"></BigTitle>
  </div>
</template>

<script>
import BigTitle from "@/components/Shop/Header.vue";
import {ShopMixin} from '../mixins/Dp.js'
export default {
  name: "Shop",
  mixins: [ShopMixin],
  components: {
    BigTitle
  },
  created() {
    const id = this.$route.params.id;
    this.getShop(id);
    console.log(this.shop);
  }
};
</script>
<style scoped></style>
