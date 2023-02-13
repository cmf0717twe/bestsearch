import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function SearchButton(props) {
  const { searchContext } = props;
  const navigate = useNavigate();

  return (
    <Button
      children={
        <div className="searchButton">
          <img
            width={'16px'}
            src={
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAQlJREFUOE+l078rRlEYB/DP+0dY/Cgzi0HKxsKkDJhZLFh4s/IHKAvKZGLwhpKSpIwWZWE1GExmIz11z9t1nfuW15lu9zznc85z7vc2/HM0Kuv70MQEBnGPFk7q9ikD29gqCq/xinn0FMhCDknAEJ6LgiiMXWMMYBOr2MV6FUnADjYwisfMTkdYRC/ey/MJeMAnJmt6XcYhZnCVAz5wiaUaYBYXWMFBDohbnsYI3jJIuuBhvOSAdMQ9rGWAL5xhru4S4/0NpnBcPEdbY6VPG3O3nYCYSycp151jH3e5PFSTGAv7MY5IZSTxqdBOi2BFRtqhygGd/o5fyF+BwH8g3QAJiVZa3QLtNr8Bx9UyEcBVvoIAAAAASUVORK5CYII='
            }
            alt={'搜索'}
          />
        </div>
      }
      onClick={() => {
        navigate(`/search/${searchContext.replaceAll(' ', '+')}`);
      }}
    ></Button>
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
)(SearchButton);
