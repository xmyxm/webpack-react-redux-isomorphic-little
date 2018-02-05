import {SEARCH_REQUEST_POSTS, SEARCH_RESOLVE_POSTS, SEARCH_REJECT_POSTS, SEARCH_SAVE_SCROLLTOP} from './search_action.js'

const defaultlState = {searchData: null, top : 0, isFetching: false, dataMore: true, param: null}
//首次渲染时获取数据
const Search = (state = defaultlState , action = {}) => {
    let _data,dataMore
    switch(action.type){
        case SEARCH_REQUEST_POSTS:
            return {
                ...state,
                isFetching:true,
                param:action.param
            }
        case SEARCH_RESOLVE_POSTS://debugger;
            _data = action.json
            if(_data.PageIndex * _data.PageSize >= _data.TotalCount){
                dataMore = false
            }else{
                dataMore = true
            }
            if(_data.PageIndex != 1 && state.searchData && state.searchData.BlogWorkList && state.searchData.BlogWorkList.length){
                _data.BlogWorkList = state.searchData.BlogWorkList.concat(_data.BlogWorkList)
            }
            return {
                ...state,
                searchData: _data,
                isFetching: false,
                dataMore: dataMore
            }

        case SEARCH_REJECT_POSTS:
            return {
                ...state,
                isFetching:false
            }

        case SEARCH_SAVE_SCROLLTOP:
            state.top = action.top
            return state

        default:
            return state;
    }
}

export default Search

