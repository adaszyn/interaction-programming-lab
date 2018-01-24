function renderDishItemTemplate(dish){
  return `
    <div class="col-md-4 col-xs-12">
        <img class="confirm-view-item___image" src="./images/>${dish.image}" />
        <h3 class="confirm-view-item___label">${dish.name}</h3>
        <i class="menu-item__price">${dish.price} SEK</i>
    </div>
  `
}

var ConfirmView = function (container, model) {
    this.container = container;
    this.model = model;
}

ConfirmView.prototype.render = function() {
  var self = this;
  var menu = this.model.getFullMenu();
  var menuGridContainer = this.container.find('#menu-container___div');
  $.each(menu, function(dish){
    menuGridContainer.append(renderDishItemTemplate(dish));
  });
  this.container.find('#total-price___span').text(self.model.getTotalMenuPrice());
}
