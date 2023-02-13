import axios from 'axios';

axios.defaults.timeout = 10000; //超时取消请求
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// axios的请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// axios的响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 用Promise封装请求
const request = function (url, params, config, method) {
  return new Promise((resolve, reject) => {
    axios[method](url, params, Object.assign({}, config)).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

const post = (url, params, config = {}) => {
  return request(url, params, config, 'post');
};

const get = (url, params, config = {}) => {
  return request(url, params, config, 'get');
};

const put = (url, params, config = {}) => {
  return request(url, params, config, 'put');
};

export { request, post, get, put };
