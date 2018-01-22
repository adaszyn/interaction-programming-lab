
var SidebarView = function (container, model) {
    var totalPriceElement = $('#sidebar-total-price')
    totalPriceElement.text(model.getTotalMenuPrice() + " SEK") 
}
SidebarView.prototype.render = function() {
    
}
