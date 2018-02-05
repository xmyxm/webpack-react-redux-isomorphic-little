const header = require('../header.js')
const list = require('../list.js')
const detail = require('../detail.js')
const search = require('../search.js')

function api(ctx) {
	switch (ctx.query.actionname) {
		case 'header': return header(ctx); break;
		case 'list': return list(ctx); break;
		case 'detail': return detail(ctx); break;
		case 'search': return search(ctx); break;
	}
}

module.exports = api




