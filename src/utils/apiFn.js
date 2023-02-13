import api from './api.js';
import { post } from './request';
import store from '@src/index.js';
import { LOADING } from '@src/store/action-types.js';

const apiFn = {
  async search(searchContext) {
    store.dispatch({
      type: LOADING,
      loading: true,
      searchResult: {
        product_launch_data: [],
        product_trends: [{}, {}, {}, {}, {}],
        products: [],
      },
    });

    const res = await post(api.keywordSearch, {
      login_token: 'INTERVIEW_SIMPLY2021',
      search_phrase: searchContext,
    });

    if (res.status === 'OK') {
      store.dispatch({
        type: LOADING,
        loading: false,
        searchResult: res.data,
      });
    }
    console.log(res);
  },
};

export default apiFn;
