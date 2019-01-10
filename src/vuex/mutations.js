export const add  = (state,obj) => {
    state.count++
};
//列表页获取数据
export const getListData = (state,data) => {
    state.listData = data
};
//列表页删除
export const remove = (state,obj) => {
    state.listData = state.listData.filter(e=>e!==obj)
};
//列表页收藏
export const collect = (state,obj) => {
    state.collectData.push(obj)
};
//收藏页删除
export const removeCollect = (state,obj) => {
    state.collectData = state.collectData.filter(e=>e!==obj)
};
//添加页添加
export const addBook = (state,obj) => {
    state.listData.unshift(obj)
};
