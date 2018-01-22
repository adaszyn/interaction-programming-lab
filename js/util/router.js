var ApplicationRouter = function(routesMap) {
    this.routesMap = routesMap;
}
function parseRoute(route) {
    var splittedRoute = route.split('?')
    var paramsSubUri = splittedRoute[1] || ''; 
    return {
        url: splittedRoute[0],
        params: paramsSubUri.split('&').reduce(function(acc, argString) {
            var [key,val] = argString.split('=')
            acc[key] = val;
            return acc; 
        }, {})
    }
}
ApplicationRouter.prototype.render = function () {
    for (var route in this.routesMap) {
        var container = this.routesMap[route];
        if (!$.isArray(container)) {
            container = [container]
        }
        container.forEach(function(element) {
            element.css('display', 'none')
        })
    }
    
    for (var route in this.routesMap) {
        var container = this.routesMap[route];
        if (!$.isArray(container)) {
            container = [container]
        }
        container.forEach(function(element) {
            var parsedRoute = parseRoute(window.location.hash)
            if (parsedRoute.url === route) {
                element.css('display', "initial")
            }
        })
       
    }
}
ApplicationRouter.prototype.toggleView = function(route) {
    if ($(route).css('display') === 'none') {
        $(route).css('display', "initial")
    } else {
        $(route).css('display', 'none')

    }
}
