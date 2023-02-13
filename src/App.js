import { HashRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, TextField, Grid } from '@mui/material';
import Redirect from '@src/components/app/redirect';
import ToHome from '@src/components/app/tohome';
import SearchButton from '@src/components/common/searchButton';
import Home from '@src/pages/home';
import Search from '@src/pages/search';
import actions from '@src/store/actions.js';
import './App.less';

function App(props) {
  const { dispatch, searchContext, headerSearchShow } = props;

  return (
    <HashRouter>
      <div className="App">
        <div className="header">
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <ToHome />
            </Grid>
            {headerSearchShow ? (
              <>
                <Grid item xs={8}>
                  <TextField
                    id="headerSearch"
                    sx={{
                      width: '100%',
                    }}
                    variant="outlined"
                    size={'small'}
                    value={searchContext}
                    onChange={(e) => {
                      dispatch(actions.searchContentChange(e.target.value));
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <SearchButton />
                </Grid>
              </>
            ) : null}
          </Grid>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="*" element={<Redirect to="/home" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default connect(
  (state) => {
    return {
      searchContext: state.home.searchContext,
      headerSearchShow: state.home.headerSearchShow,
    };
  },
  (dispatch) => {
    return {
      dispatch,
    };
  }
)(App);
