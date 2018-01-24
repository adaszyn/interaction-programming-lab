function renderDishItemTemplate(dish){
  return `
    <div class="cart-summary-item-container">
    <div class="cart-summary-item-container__border" style="background-image: url(./images/${dish.image})" >
        <h3 class="cart-summary-item-container__label">${dish.name}</h3>
    </div>
    <i class="menu-item__price">${dish.price} SEK</i>
    </div>
  `
}

var ConfirmView = function (container, model) {
    this.container = container;
    this.model = model;
}

ConfirmView.prototype.render = function() {
  var menu = this.model.getFullMenu();
  var menuGridContainer = this.container.find('#menu-container___div');
  menu.forEach(function(dish){
    menuGridContainer.append(renderDishItemTemplate(dish));
  });
  this.container.find('#total-price___span').text(this.model.getTotalMenuPrice());
}
