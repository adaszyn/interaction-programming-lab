
function renderTableItemTemplate(dish){
  return `
    <tr>
      <td>${dish.title}</td>
      <td>${dish.pricePerServing}</td>
    </tr>
  `
}

var SidebarView = function (container, model) {
    View.call(this, container, model)

    this.container = container;
    this.model = model;

    // METHODS
    this.onNumberOfGuestsChange = (callback) =>
      container.find('#num-of-guests___select').on('change', callback)
}
SidebarView.prototype = new View()

SidebarView.prototype.update = function() {
  var totalPriceElement = this.container.find('#sidebar-total-price');
  this.model.getTotalMenuPrice()
    .then((price) => {
        var totalPrice = NumberUtil.formatPrice(price)
        totalPriceElement.text(totalPrice + " SEK");
    })


  var selectMenu = this.container.find('#num-of-guests___select');
  selectMenu
    .find("option[value='"+ this.model.numberOfGuests + "']")
    .prop('selected', true);

  var menuTable = this.container.find('.selected-dishes-table');
  var menu = this.model.getFullMenuWithPrice();
  menu.then((menu) => {
    menuTable.children('tr').remove();
    $.each(menu, function(dish){
        menuTable.append(renderTableItemTemplate(menu[dish]));
      });
  })

}
