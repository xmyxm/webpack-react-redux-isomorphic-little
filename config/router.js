const api = require('../action/api/api.js')
const render = require('../dist/server/index.js')

module.exports = [
	{	//为方便node同构，所有服务集中处理，仅此一个对外api
		path: '^/api',
		method: api,
		type: ['get', 'post'],
		reg: true
	},

	{
		path: '^/home',
		method: render.default,
		type: 'get',
		reg: true
	}
	, {
		path: '^/list',
		method: render.default,
		type: 'get',
		reg: true
	}
	, {
		path: '/detail/:id',
		method: render.default,
		type: 'get',
		reg: false
	}
	, {
		path: '^/search',
		method: render.default,
		type: 'get',
		reg: true
	}
	, {
		path: '^/email',
		method: render.default,
		type: 'get',
		reg: true
	}
	, {
		path: '^/me',
		method: render.default,
		type: 'get',
		reg: true
	}
]








