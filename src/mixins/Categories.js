import axios from "axios";

export const CategoriesMixin = {
  data: function() {
    return {
      categories: []
    };
  },
  computed: {
    getCategories() {
      axios.get("/categories")
        .then(response => {
          this.categories = response.data;
          return  this.categories;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
