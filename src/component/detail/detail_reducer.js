import {DETAIL_REQUEST_POSTS, DETAIL_RESOLVE_POSTS, DETAIL_REJECT_POSTS} from './detail_action.js'

const defaultlState = {detailData: null, isFetching: true, param: null};
//首次渲染时获取数据
const Detail = (state = defaultlState , action = {}) => {
    switch(action.type){
        case DETAIL_REQUEST_POSTS:
            return {
                ...state, 
                param : action.param
            }

        case DETAIL_RESOLVE_POSTS://debugger;
            return {
                ...state, 
                isFetching: false,
                detailData: action.json
            }

        case DETAIL_REJECT_POSTS:
            return {
                ...state,
                isFetching:false
            }

        default:
            return state
    }
}

export default Detail

