# catch routes
Listen for route changes and parse urls in the browser.

This is a higher level wrapper around [route-event](https://www.npmjs.com/package/route-event) that handles url parsing as well.

## install

    $ npm install @nichoth/catch-routes

## example

```js
var catchRoutes = require('../')

var { setRoute } = catchRoutes(function onRoute (url) {
    console.log('href', url.href) //  => /some/path?foo=bar
    console.log('pathname', url.pathname) //  => /some/path
    console.log('query', url.query) //  => { foo: 'bar' }
})

// navigate programmatically
setRoute('/hello')
```

