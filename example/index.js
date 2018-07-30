var catchRoutes = require('../')

var { setRoute } = catchRoutes(function onRoute (url) {
    console.log('href', url.href)
    console.log('pathname', url.pathname)
    console.log('query', url.query)
})

// navigate programmatically
setRoute('/hello')

