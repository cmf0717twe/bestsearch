import { HEADERSEARCHSHOW, SEARCHCONTEXT } from '../action-types.js';

const initState = {
  headerSearchShow: false,
  searchContext: null,
};

const home = (state = initState, action) => {
  switch (action.type) {
    case SEARCHCONTEXT:
      return {
        ...state,
        searchContext: action.value,
      };
    case HEADERSEARCHSHOW:
      return {
        ...state,
        headerSearchShow: action.value,
      };
    default:
      return state;
  }
};

export default home;
