function renderDishItemTemplate(dish, price){
  return `
    <div class="cart-summary-item-container">
    <div class="cart-summary-item-container__border" style="background-image: url(${dish.image})" >
        <h3 class="cart-summary-item-container__label">${dish.title}</h3>
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
  var numberOfGuestsContainer = this.container.find('span#num-of-guests');
  var menuGridContainer = this.container.find('#menu-container___div');
  var priceContainer = this.container.find('#total-price___span');
  menuGridContainer.html('');
  numberOfGuestsContainer.html(model.getNumberOfGuests() + " people");
  menu.then(menu => {
    menu.forEach(function(dish){
        var price = dish.pricePerServing;
        var formattedPrice = NumberUtil.formatPrice(price)
        menuGridContainer.append(renderDishItemTemplate(dish, formattedPrice));
      });
  }).catch(function(error){
    toastr.error('Could not retrieve confirm info :\'( \n Please try again');
  });

  this.model.getTotalMenuPrice().then((price) => {
    var formattedPrice = NumberUtil.formatPrice(price) + " SEK"
    priceContainer.text(formattedPrice);
  })
}
