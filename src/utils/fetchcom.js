import FormData from 'form-data'
import { paramToStr } from 'utilspath/url-data.js'
import fetch from 'isomorphic-fetch'
import api from '../../action/api/api.js'

// 页面初次渲染时获取数据
const fetchCom = (actionName, type, param = {}, context) => {
    if(typeof global == 'object' && global.global === global){
        context.query.actionname = actionName
        for (let key in param) {
            if (param.hasOwnProperty(key)) { //filter,只输出man的私有属性
                context.query[key] = param[key]
            }
        }
        return new Promise(function(resolve, reject) {
                const data = api(context)
                if(data){
                    resolve(data)
                }else{
                    reject()
                }
            })
    }else{
        let options = {},url = 'api'
        param.actionname = actionName
        if (type == 'post' && param) {
            options.method = 'POST'
            let data = {}
            for (let key in param) {
                if (param.hasOwnProperty(key)) {
                    data[key] = param[key]
                }
            }
            options.headers = {
                'Content-Type':'application/json; charset=utf-8'
            },
            options.body = JSON.stringify(data)
        } else {
            url = param ? url + '?' + paramToStr(param) : url
            options.method = 'GET'
        }
        return Request(url, options)
    }    
}

const Request = (url, options) => {
    return fetch(url, options)
        .then(function (res) {
            if(res.ok){
                return Promise.resolve(res.json().then(
                    json => { return json }
                ))
            }
        }).catch(err => { console.log('fetchCom 请求 error, 代码异常:' + err ) })
}

export default fetchCom





