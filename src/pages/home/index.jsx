import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid } from '@mui/material';
import SearchButton from '@src/components/common/searchButton';
import actions from '@src/store/actions.js';
import './index.less';

function Home(props) {
  const { dispatch, searchContext } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // 监听键盘事件
    document.addEventListener('keyup', enter);
    // 隐藏导航栏的搜索框
    dispatch(actions.headerSearchChange(false));
    // 移除键盘事件
    return () => {
      document.removeEventListener('keyup', enter);
    };
  }, []);

  const search = () => {
    navigate(`/search/${searchContext.replaceAll(' ', '+')}`);
  };

  const enter = (e) => {
    if (e.code !== 'Enter') return;
    search();
  };

  return (
    <div>
      <div className="homeHeader">Search Trends</div>
      <div className="searchArea">
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <TextField
              id="search"
              sx={{ width: '100%' }}
              label="Search for new products in 961K stores"
              variant="outlined"
              size={'small'}
              onChange={(e) => {
                dispatch(actions.searchContentChange(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <SearchButton />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      searchContext: state.home.searchContext,
    };
  },
  (dispatch) => {
    return {
      dispatch,
    };
  }
)(Home);
