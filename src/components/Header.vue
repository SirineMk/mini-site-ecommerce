<template>
<div class="header">
    <div class="site-branding-area">
<div class="row">
                <div class="col-sm-4">
                    <div class="logo" style="    width: 100px; height: 100px;">
                         <h1><a href="index.html"><img src="img/logo.png"></a></h1>
                    </div>
                </div>
                   <div class="col-sm-4">
                            <input type="text" style="margin-top: 30px" placeholder="Search products...">
                            <input type="button" value="Search">
                   </div>
                    
                <div class="col-sm-4">

                    <div class="shopping-item">
                       <a href="cart.html" >Cart :  <span class="cart-amunt">100.58 €</span> <i class="fa fa-shopping-cart"></i> <span class="product-count">5</span></a>
                    </div>
                </div>
            </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </div>

    <div class="mainmenu-area">

    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>