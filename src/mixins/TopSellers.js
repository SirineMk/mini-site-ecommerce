import axios from "axios";

export const TopSellersMixin = {
    data: function() {
        return {
            topSellers: []
        };
    },
    computed: {
        getTopSellers() {
            axios.get("/top-sellers-products")
                .then(response => {
                    this.topSellers = response.data;
                    return  this.topSellers;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
