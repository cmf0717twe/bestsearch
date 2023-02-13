import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// createStore 用户创建仓库,applyMiddleware中间件
import { createStore, applyMiddleware } from 'redux';
// 多个reduce 合并
import rootReducers from './store/reducers/index';
// Provider 用于把 react 和 redux 进行关联，使所有的子组件都可以拿到state
import { Provider } from 'react-redux';
// 第三方插件 处理异步状态修改 使用了thunk之后 dispatch就可以接收一个函数作为参数
import thunk from 'redux-thunk';
// 下方三个为刷新保存redux数据的依赖
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default store