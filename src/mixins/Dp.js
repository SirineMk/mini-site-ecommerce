import axios from "axios";

export const ShopMixin = {
    data: function() {
        return {
            shop: []
        };
    },
    methods: {
        getShop(idShop) {
            axios.get("/products-lists/"+idShop)
                .then(response => {
                    this.shop = response.data;
                    console.log(this.shop)
                    return  this.shop;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
