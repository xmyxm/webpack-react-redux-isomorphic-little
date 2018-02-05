import {HEADER_REQUEST_POSTS, HEADER_RESOLVE_POSTS, HEADER_REJECT_POSTS} from './header_action.js'

const defaultlState = {headerData: null, isFetching: true}
//首次渲染时获取数据
const Header = (state = defaultlState , action = {}) => {
    switch(action.type){
        case HEADER_REQUEST_POSTS:
            return {
                ...state,
                param:action.param
            }

        case HEADER_RESOLVE_POSTS://debugger;
            return {
                ...state,
                headerData:action.json,
                isFetching:false
            }

        case HEADER_REJECT_POSTS:
            return {
                ...state,
                isFetching:false
            }

        default:
            return state;
    }
}

export default Header

