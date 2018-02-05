import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../src/redux/reducer';
import { layout } from './layout.js';
import router from './router.js';

const initialState = {}
const middleware = [thunk]
const finalCreateStore = applyMiddleware(...middleware)(createStore)
const routers = Object.keys(router)

export default async function (ctx) {
  let url = ctx.url.toLowerCase()
  let commponentAry
  let status = routers.some(item => {
    if ((new RegExp(item)).test(url)) {
      commponentAry = router[item]
      return true
    }
  })

  if (!status) {
    return ctx.body = '当前url地址不匹配';
  }

  const serverStart = Date.now()

  const store = finalCreateStore(reducers, initialState)
  let reqQueue = []
  commponentAry.forEach(item => {
    if (item.serverRender) reqQueue.push(item.serverRender(store, ctx.query, ctx))
  })
  await Promise.all(reqQueue)

  const serverTime = Date.now() - serverStart

  const renderStart = Date.now()

  const initData = store.getState()
  const html = layout(renderToString(
    <Provider store={store}>
      <MemoryRouter location={ctx.url}>
        <div className="blogbox">
          {
            commponentAry.map((Item, index)=> {
              return <Item key = {index} />
            })
          }
        </div>
      </MemoryRouter>
    </Provider>
  ), initData);

  const renderTime = Date.now() - renderStart

  console.log(`访问url地址：${ctx.url} 数据请求耗时: ${serverTime}ms 渲染耗时: ${renderTime}ms`)
  ctx.set('Content-Type','text/html');
  ctx.body = html;
}






