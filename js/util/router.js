var ApplicationRouter = function(routesMap) {
    this.routesMap = routesMap;
}

ApplicationRouter.prototype.render = function () {
    for (var route in this.routesMap) {
        var container = this.routesMap[route];
        if (!$.isArray(container)) {
            container = [container]
        }
        container.forEach(function(element) {
            element.attr('hidden', true)
        })
    }
    
    for (var route in this.routesMap) {
        var container = this.routesMap[route];
        if (!$.isArray(container)) {
            container = [container]
        }
        container.forEach(function(element) {
            if (window.location.hash === route) {
                element.prop('hidden', false)
            }
        })
       
    }
}
ApplicationRouter.prototype.toggleView = function(route) {
    if ($(route).attr('hidden')) {
        $(route).removeAttr('hidden')
    } else {
        $(route).attr('hidden', true)

    }
}
