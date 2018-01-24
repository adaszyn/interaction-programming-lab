function renderDishItemTemplate(dish, price){
  return `
    <div class="cart-summary-item-container">
    <div class="cart-summary-item-container__border" style="background-image: url(./images/${dish.image})" >
        <h3 class="cart-summary-item-container__label">${dish.name}</h3>
    </div>
    <i class="menu-item__price">${price} SEK</i>
    </div>
  `
}

var ConfirmView = function (container, model) {
    this.container = container;
    this.model = model;
}

ConfirmView.prototype.render = function() {
  var model = this.model;
  var menu = model.getFullMenu();
  var menuGridContainer = this.container.find('#menu-container___div');
  menu.forEach(function(dish){
    var price = model.getDishPrice(dish.id)
    menuGridContainer.append(renderDishItemTemplate(dish, price));
  });
  this.container.find('#total-price___span').text(this.model.getTotalMenuPrice());
}
