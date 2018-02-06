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
ApplicationRouter.prototype.update = function () {
    for (var route in this.routesMap) {
        var views = this.routesMap[route];
        if (!$.isArray(views)) {
            views = [views]
        }
        views.forEach(function(view) {
            if (view instanceof View) {
                view.hide();
            } else {
                view.css('display', "none")
            }
        })
    }
    
    for (var route in this.routesMap) {
        var views = this.routesMap[route];
        if (!$.isArray(views)) {
            views = [views]
        }
        views.forEach(function(view) {
            var parsedRoute = parseRoute(window.location.hash)

            if (parsedRoute.url === route) {
                if (view instanceof View) {
                    view.show();
                } else {
                    view.css('display', "")
                }
            }
        })
       
    }
}
ApplicationRouter.prototype.toggleElement = function(element) {
    if (element.css('display') === 'none') {
        element.css('display', "")
    } else {
        element.css('display', 'none')

    }
}
