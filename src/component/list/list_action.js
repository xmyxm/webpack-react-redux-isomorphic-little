import fetchCom from 'utilspath/fetchcom.js'

export const LIST_REQUEST_POSTS = 'LIST_REQUEST_POSTS';//发送请求
export const LIST_REJECT_POSTS = 'LIST_REJECT_POSTS';//失败
export const LIST_RESOLVE_POSTS = 'LIST_RESOLVE_POSTS';//成功
export const LIST_SAVE_SCROLLTOP = 'LIST_SAVE_SCROLLTOP';//记录滚动位置

//开始获取数据
export const requestPosts = (path,param) => {
  return {
    type: LIST_REQUEST_POSTS,
    path,
    param
  }
}

//获取数据成功
export const resolvePosts = (path, json) => {
  return {
        type: LIST_RESOLVE_POSTS,
        path ,
        json 
    }
}

//获取数据失败
export const rejectPosts = (path, error) => {
  return {
        type: LIST_REJECT_POSTS,
        path ,
        error
    }
}

//记录滚动位置
export const saveScrollTop = (height) => {
  return {
        type: LIST_SAVE_SCROLLTOP,
        top : height
    }
}

// 页面初次渲染时获取数据
export const fetchPosts = (param, context) => {
    const actionName = 'list' 
    return dispatch => {
        dispatch(requestPosts(actionName, param))
        return fetchCom(actionName,'get', param, context)
        .then(json => {
                if(json && json.BlogWorkList){
                    for (let i = 0, l = json.BlogWorkList.length; i < l; i++) {
                            json.BlogWorkList[i].Content = encodeURIComponent(json.BlogWorkList[i].Content);
                            json.BlogWorkList[i].Tag = encodeURIComponent(json.BlogWorkList[i].Tag);
                            json.BlogWorkList[i].Title = encodeURIComponent(json.BlogWorkList[i].Title);
                        }
                    dispatch(resolvePosts(actionName, json))
                }else{
                    dispatch(rejectPosts(actionName, error))
                }
            }
        )
        .catch(error => dispatch(rejectPosts(actionName, error)))
    }
}














