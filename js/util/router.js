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
            console.log(element)
            element.css('display', 'none')
        })
    }
    
    for (var route in this.routesMap) {
        var container = this.routesMap[route];
        if (!$.isArray(container)) {
            container = [container]
        }
        container.forEach(function(element) {
            if (window.location.hash === route) {
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
