
function renderTableItemTemplate(dish){
  return `
    <tr>
      <td>${dish.dish.name}</td>
      <td>${dish.price}</td>
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
  var totalPrice = NumberUtil.formatPrice(this.model.getTotalMenuPrice())
  totalPriceElement.text(totalPrice + " SEK");

  var selectMenu = this.container.find('#num-of-guests___select');
  selectMenu
    .find("option[value='"+ this.model.numberOfGuests + "']")
    .prop('selected', true);

  var menuTable = this.container.find('.selected-dishes-table');
  menuTable.children('tr').remove();
  var menu = this.model.getFullMenuWithPrice();
  $.each(menu, function(dish){
    console.log();
    menuTable.append(renderTableItemTemplate(menu[dish]));
  });
}
