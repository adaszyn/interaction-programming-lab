// Base constructor used as prototype
// for all other views.
function View (container, model) {
    var isSuperContructorCalled = container && model
    if (isSuperContructorCalled) {
        this._element = container; 
        this._observerId = model.addObserver(this.update.bind(this)); 
    }
}

View.prototype.hide = function (container, model) {
    this._element.css('display', 'none')
}

View.prototype.show = function () {
    this._element.css('display', "")
}

View.prototype.update = function () {
}