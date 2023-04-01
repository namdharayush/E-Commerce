const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "UPDATE_FILTER_VALUE":
      const { name, checked } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name] : checked,
        },
      };
      
    case "FILTER_PRODUCTS":
      let { all_products } = state;

      let tempFilterProduct = [...all_products];
      
      const { text , Brand } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.Brand.toLowerCase().includes(text.toLowerCase());;
          
        });
      }
      
      if (Brand) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.Brand === Brand
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
