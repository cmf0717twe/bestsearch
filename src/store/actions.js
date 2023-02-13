import { SEARCHCONTEXT, HEADERSEARCHSHOW, LOADING } from './action-types.js';

export default {
  // 搜索内容改变
  searchContentChange(string) {
    return {
      type: SEARCHCONTEXT,
      value: string,
    };
  },
  // 导航栏搜索框展示状态改变
  headerSearchChange(boolean) {
    return {
      type: HEADERSEARCHSHOW,
      value: boolean,
    };
  },
  // 改变详情页Loading状态
  loadingChange(boolean) {
    return {
      type: LOADING,
      value: boolean,
    };
  },
};
