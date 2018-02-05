import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//域名根路径无法指向当前web站点index.html页面时启用 hash 路由
//import createHistory from 'history/createHashHistory'
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from 'reduxpath/reducer';//拿到所有reducer来生成stare
import baseStyle from 'stylepath/base.less';

import Header from 'componentpath/header/header.jsx';
import loadComponent from 'componentpath/loadComponent.js';

//代码分割方案
//我抛弃了 webpack 2.x 的ensure方案 采用了webpack3.x 的 import方案，其实ensure 和 import 就是告诉 webpack 目标文件独立打包
// require.ensure([], function() {
//     var const = require('./component/me/me.jsx') //baidumap.js放在我们当前目录下
// })
const Me = loadComponent(() => import(/* webpackChunkName: "app-me" */"componentpath/me/me.jsx"));
const Home = loadComponent(() => import(/* webpackChunkName: "app-home" */"componentpath/home/home.jsx"));
const List = loadComponent(() => import(/* webpackChunkName: "app-list" */"componentpath/list/list.jsx"));
const Detail = loadComponent(() => import(/* webpackChunkName: "app-detail" */"componentpath/detail/detail.jsx"));
const Email = loadComponent(() => import(/* webpackChunkName: "app-email" */"componentpath/email/email.jsx"));
const Search = loadComponent(() => import(/* webpackChunkName: "app-search" */"componentpath/search/search.jsx"));

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const history = createHistory();
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
    //middleware.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

//初始化默认state数据
const initialState = JSON.parse((window.__REDUX_DATA__ || '{}').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'"))
window.__REDUX_DATA__ = initialState
const finalCreateStore = applyMiddleware(...middleware)(createStore)
const store = finalCreateStore(reducers, initialState)

if (module.hot) {
    const nextReducer = require('reduxpath/reducer');
    module.hot.accept('reduxpath/reducer',() => { store.replaceReducer(nextReducer)} );
}

//启用排它性路由 Switch ，保证在 Switch 标签中只会命中一个组件
//启用 Redirect 做到，当匹配不到 Switch 中的路由时重定向到默认页面：/m/index.html ， 处理路由 404 问题
//因为react-router 是包容性路由，所以 exact 则要求路径与location.pathname必须完全匹配
ReactDOM.render(
  <Provider store = {store}>
    <Router history = {history}>
        <div className = "blogbox">
            <Header/>
            <Switch>
                <Route path="/" exact component = {Home} ></Route>
                <Route path="/index.html" exact component = {Home} ></Route>
                <Route path="/m/index.html" exact component = {Home} ></Route>
                <Route path="/home" component = {Home} ></Route>
                <Route path="/list" component = {List} ></Route>
                <Route path="/search" component = {Search}></Route>
                <Route path="/detail/:id" component = {Detail} ></Route>
                <Route path="/me" component = {Me} ></Route>
                <Route path="/email" component = {Email} ></Route>
                <Redirect to="/m/index.html" />
            </Switch>
        </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)


