import {REQUEST_POSTS, RESOLVE_POSTS, REJECT_POSTS} from '../action/fetch-action.js'

const defaultlState = {'Json': {},'istrue':false, 'isFetching': false};
//首次渲染时获取数据
const fetchData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case REQUEST_POSTS:
            return {'Json':{},'isFetching':true,'param':action.param};
        case RESOLVE_POSTS://debugger;
            return Object.assign({}, state, {'Json':action.json,'istrue':true,'isFetching':false});//请求成功,返回一个新的state
        case REJECT_POSTS:
            return Object.assign({}, state, {'Json': {},'istrue':false,'isFetching':false});//请求失败，返回一个新的state
        default:
            return state;
    }
}

export default fetchData;

