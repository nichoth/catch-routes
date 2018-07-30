var catchRoutes = require('../')

catchRoutes(function onRoute (url) {
    console.log('href', url.href)
    console.log('pathname', url.pathname)
    console.log('query', url.query)
})

