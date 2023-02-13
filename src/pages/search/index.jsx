import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';
import SearchResult from '@src/components/search/searchResult';
import apiFn from '@src/utils/apiFn.js';
import actions from '@src/store/actions';

function Search(props) {
  const { dispatch, searchResult } = props;

  useEffect(() => {
    // 从地址栏获取搜索内容
    const searchContext = window.location.hash
      .split('/')
      .slice(2)
      .join('/')
      .replaceAll('+', ' ');

    dispatch(actions.searchContentChange(searchContext));

    // 显示导航栏的搜索框
    dispatch(actions.headerSearchChange(true));

    apiFn.search(searchContext);
  }, []);

  return (
    <div className="searchResult">
      <Grid container spacing={2} style={{ margin: '40px 0 20px 0' }}>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <span>Related product trends</span>
        </Grid>
      </Grid>
      <div style={{ width: '60%',transform:'translate(30%, 0)' }}>
        <Grid  container spacing={2}>
          {searchResult.product_trends.map((item, index) => {
            return (
              <Grid item xs={3} key={item.name || index}>
                <SearchResult data={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      searchResult: state.search.searchResult,
    };
  },
  (dispatch) => {
    return {
      dispatch,
    };
  }
)(Search);
