<template>
  <div class="header">
    <div class="site-branding-area">
      <div class="row">
        <div class="col-sm-3">
          <div class="logo" style="    width: 100px; height: 100px;">
            <h1>
              <a href="index.html"><img src="../assets/img/logo.png"/></a>
            </h1>
          </div>
        </div>
        <div class="col-sm-5">
          <input
            type="text"
            style="margin-top: 40px; width: 75%"
            placeholder="Search products..."
          />
          <input type="button" value="Search" />
        </div>

        <div class="col-sm-3">
          <div class="shopping-item">
            <a href="cart.html"
              >Cart : <span class="cart-amunt">100.58 €</span>
              <i class="fa fa-shopping-cart"></i>
              <span class="product-count">5</span></a
            >
          </div>
        </div>
      </div>
      <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    </div>

    <div class="mainmenu-area">
      <div class="container">
        <div class="row">
          <div class="navbar">
            <ul class="nav navbar-nav navbar-expand">
              <li class="active">
                <router-link to="/" tag="li" active-class="active" exact
                  ><a>Home</a></router-link
                >
              </li>
              <li
                @click="navigateToShop(cat.productListId)"
                v-for="cat in categories"
                :key="cat.name"
              >
                <a href="">{{ cat.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: [Array]
  },
  methods: {
    navigateToShop(id) {
      this.$router.push("/shop/" + id);
    }
  }
};
</script>

<style scoped></style>
