import {LIST_REQUEST_POSTS, LIST_RESOLVE_POSTS, LIST_REJECT_POSTS, LIST_SAVE_SCROLLTOP} from './list_action.js'

const defaultlState = {listData: null, isFetching: false, dataMore: true, top : 0}
//首次渲染时获取数据
const List = (state = defaultlState , action = {}) => {
    let _data,dataMore
    switch(action.type){
        case LIST_REQUEST_POSTS:
            return {
                ...state
                ,isFetching : true
            }

        case LIST_RESOLVE_POSTS:
            _data = action.json
            if(_data.PageIndex * _data.PageSize >= _data.TotalCount){
                dataMore = false
            }else{
                dataMore = true
            }
            if(state.listData && state.listData.BlogWorkList && state.listData.BlogWorkList.length && _data.BlogWorkList){
                _data.BlogWorkList = _data.BlogWorkList = state.listData.BlogWorkList.concat(_data.BlogWorkList)
            }
            return {
                ...state,
                listData: _data,
                isFetching: false,
                dataMore: dataMore
            }

        case LIST_REJECT_POSTS:
            return {
                ...state,
                isFetching:false
            }

        case LIST_SAVE_SCROLLTOP:
            state.top = action.top
            return state

        default:
            return state
    }
}

export default List




