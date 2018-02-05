const fetchData = require('../utils/fetchdata.js')

async function search(ctx) {
    const index = ctx.query.PageIndex
    const size = 10
    const key = ctx.query.key
    const url = `http://qqweb.top/API/BlogApi/Query?PageIndex=${index}&key=${key}&PageSize=${size}`
    const data = await fetchData(url)
    ctx.body = data
    return data
}

module.exports = search




