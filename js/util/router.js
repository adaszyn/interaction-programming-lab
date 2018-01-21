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
            if (window.location.hash === route) {
                element.removeAttr('hidden')
            } else {
                element.attr('hidden', true)
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
