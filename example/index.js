var catchRoutes = require('../')

var { setRoute } = catchRoutes(function onRoute (url) {
    console.log('href', url.href) //  => /some/path?foo=bar
    console.log('pathname', url.pathname) //  => /some/path
    console.log('query', url.query) //  => { foo: 'bar' }
})

// navigate programmatically
setRoute('/hello')

