var OnRoute = require('route-event')
var url = require('url')
var qs = require('querystringify')

// can pass in `onRoute` for testing
function RouteEvent (cb, opts) {
    opts = opts || {}
    onRoute = opts.onRoute || OnRoute()

    onRoute(function (href) {
        var parsed = url.parse(href)

        cb({
            href: parsed.href,
            pathname: parsed.pathname,
            query: qs.parse(parsed.query || '')
        })
    })

    return onRoute
}

module.exports = RouteEvent

