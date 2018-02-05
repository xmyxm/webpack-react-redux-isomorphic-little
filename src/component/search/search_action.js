import fetchCom from 'utilspath/fetchcom.js'

export const SEARCH_REQUEST_POSTS = 'SEARCH_REQUEST_POSTS';//发送请求
export const SEARCH_REJECT_POSTS = 'SEARCH_REJECT_POSTS';//失败
export const SEARCH_RESOLVE_POSTS = 'SEARCH_RESOLVE_POSTS';//成功
export const SEARCH_SAVE_SCROLLTOP = 'SEARCH_SAVE_SCROLLTOP';//记录滚动位置

//开始获取数据
export const requestPosts = (path,param) => {
  return {
    type: SEARCH_REQUEST_POSTS,
    path,
    param
  }
}

//获取数据成功
export const resolvePosts = (path, json) => {
  return {
        type: SEARCH_RESOLVE_POSTS,
        path ,
        json 
    }
}

//获取数据失败
export const rejectPosts = (path, error) => {
  return {
        type: SEARCH_REJECT_POSTS,
        path ,
        error
    }
}

//记录滚动位置
export const saveScrollTop = (height) => {
  return {
        type: SEARCH_SAVE_SCROLLTOP,
        top : height
    }
}

// 页面初次渲染时获取数据
export const fetchPosts = (param, headers) => {
    const actionName = 'search' 
    return dispatch => {
        dispatch(requestPosts(actionName, param))
        return fetchCom(actionName,'post', param, headers)
        .then(json => {
                if(json){
                    dispatch(resolvePosts(actionName, json))
                }else{
                    dispatch(rejectPosts(actionName, error))
                }
            }
        )
        .catch(error => dispatch(rejectPosts(actionName, error)))
    }
}









