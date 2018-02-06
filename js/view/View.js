// Base constructor used as prototype
// for all other views.
function View (container, model) {
    this._element = container;    
}

View.prototype.hide = function (container, model) {
    this._element.css('display', 'none')
}

View.prototype.show = function () {
    this._element.css('display', "")
}

View.prototype.update = function () {
}