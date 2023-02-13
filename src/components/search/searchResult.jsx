import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Skeleton } from '@mui/material';
import * as echarts from 'echarts';
import './searchResult.less';

function SearchResult(props) {
  const { loading, data } = props;

  useEffect(() => {
    if (document.getElementById(data.name)) {
      const myChart = echarts.init(document.getElementById(data.name));
      const echartsData = [];
      let max = 0;

      for (let i in data.search_msv) {
        const object = {};
        object.name = data.search_msv[i].date;
        object.value = data.search_msv[i].sv;
        if (data.search_msv[i].sv > max) max = data.search_msv[i].sv;
        echartsData.push(object);
      }

      myChart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false,
        },
        yAxis: {
          type: 'value',
          show: false,
          max: Math.ceil(max * 1.01),
        },
        series: [
          {
            data: echartsData,
            type: 'line',
            areaStyle: {},
            symbol: 'none',
          },
        ],
      });
    }
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <Skeleton width="70%" />
          <Skeleton width="30%" />
          <Skeleton
            width="100%"
            height="170px"
            sx={{ transform: 'scale(1, 0.9)' }}
          />
        </>
      ) : (
        <div className="echartsArea">
          <div>{data.name.replaceAll('hat', 'Hat')}</div>
          <div className="littleTitle">{`Growth ${data.growth}%`}</div>
          <div id={data.name} style={{ height: '170px' }}></div>
          <div className="bottomText">
            {`${
              new Date(data.search_msv[0].date).toDateString().split(' ')[1]
            } ${
              new Date(data.search_msv[0].date).toDateString().split(' ')[3]
            } - ${
              new Date(data.search_msv[data.search_msv.length - 1].date)
                .toDateString()
                .split(' ')[1]
            } ${
              new Date(data.search_msv[data.search_msv.length - 1].date)
                .toDateString()
                .split(' ')[3]
            }`}
          </div>
        </div>
      )}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      loading: state.search.loading,
    };
  },
  (dispatch) => {
    return {
      dispatch,
    };
  }
)(SearchResult);
