const fetchData = require('../utils/fetchdata.js')

async function detail(ctx) {
    const id = ctx.query.id
    const url = `http://qqweb.top/API/BlogApi/Detail?id=${id}`
    const data = await fetchData(url)
    ctx.body = data
    return data
}


module.exports = detail


