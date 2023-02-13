import { LOADING } from '../action-types.js';

const initState = {
  loading: true,
  searchResult: {
    product_launch_data: [],
    product_trends: [{}, {}, {}, {}, {}],
    products: [],
  },
};

const search = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading,
        searchResult: action.searchResult,
      };
    default:
      return state;
  }
};

export default search;
