const fetchData = require('../utils/fetchdata.js')

async function header(ctx) {
    const url = 'http://qqweb.top/API/BlogApi/AdminUser'
    const data = await fetchData(url)
    ctx.body = data
    return data
}

module.exports = header














