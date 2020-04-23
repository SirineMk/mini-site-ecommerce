import axios from "axios";

export const TopNewMixin = {
    data: function() {
        return {
            topNew: []
        };
    },
    computed: {
        getTopNew() {
            axios.get("/top-new-products")
                .then(response => {
                    this.topNew = response.data;
                    return  this.topNew;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
