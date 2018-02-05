import fetchCom from 'utilspath/fetchcom.js'

export const HEADER_REQUEST_POSTS = 'HEADER_REQUEST_POSTS';//发送请求
export const HEADER_REJECT_POSTS = 'HEADER_REJECT_POSTS';//失败
export const HEADER_RESOLVE_POSTS = 'HEADER_RESOLVE_POSTS';//成功

//开始获取数据
export const requestPosts = (path,param) => {
  return {
    type: HEADER_REQUEST_POSTS,
    path,
    param
  }
}

//获取数据成功
export const resolvePosts = (path, json) => {
  return {
        type: HEADER_RESOLVE_POSTS,
        path ,
        json 
    }
}

//获取数据失败
export const rejectPosts = (path, error) => {
  return {
        type: HEADER_REJECT_POSTS,
        path ,
        error
    }
}

// 页面初次渲染时获取数据
export const fetchPosts = (param, context) => {
    const actionName = 'header' 
    return dispatch => {
        dispatch(requestPosts(actionName, param))
        return fetchCom(actionName,'get', null, context)
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













