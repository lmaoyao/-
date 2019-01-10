import axios from 'axios';
axios.defaults.baseURL = 'https://easy-mock.com/mock/5bf0ee4a643497494c87d281'
export const addFn = ({commit},obj) => {
    commit('add')
};
//获取轮播图
export const getBannerList = ({commit},obj) => {
    return axios.get('/bannerList')
};
//获取热门图书
export const getBookList = (params) => {
    return axios.get('/homeList')
};
//获取列表页数据
export const getListData = async ({commit},obj) => {
    let res = await axios.get('/listData')
    commit('getListData',res.data)
    console.log(res.data)
};
