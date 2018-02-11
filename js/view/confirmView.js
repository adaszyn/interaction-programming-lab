function renderDishItemTemplate(dish, price){
  return `
    <div class="cart-summary-item-container">
    <div class="cart-summary-item-container__border" style="background-image: url(./images/${dish.image})" >
        <h3 class="cart-summary-item-container__label">${dish.name}</h3>
    </div>
    <b class="cart-summary-item-price">${price} SEK</b>
    </div>
  `
}

var ConfirmView = function (container, model) {
    View.call(this, container, model)

    this.container = container;
    this.model = model;
}
ConfirmView.prototype = new View()

ConfirmView.prototype.update = function() {
  var model = this.model;
  var menu = model.getFullMenu();
  var menuGridContainer = this.container.find('#menu-container___div');
  menu.forEach(function(dish){
    var price = model.getDishPricePerPerson(dish.id)
    var formattedPrice = NumberUtil.formatPrice(price)
    menuGridContainer.append(renderDishItemTemplate(dish, formattedPrice));
  });
  var price = this.model.getTotalMenuPrice()
  var formattedPrice = NumberUtil.formatPrice(price) + " SEK"
  this.container.find('#total-price___span').text(formattedPrice);
}
