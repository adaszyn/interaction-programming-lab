
function renderTableItemTemplate(dish){
  return `
    <tr>
      <td>${dish.name}</td>
      <td>${dish.price}</td>
    </tr>
  `
}

var SidebarView = function (container, model) {
    this.container = container;
    this.model = model;
}

SidebarView.prototype.render = function() {
  var totalPriceElement = this.container.find('#sidebar-total-price');
  totalPriceElement.text(this.model.getTotalMenuPrice() + " SEK");

  var selectMenu = this.container.find('#num-of-guests___select');
  selectMenu
    .find("option[value='"+ this.model.numberOfGuests + "']")
    .prop('selected', true);

  var selectedDishesTable = this.container.find('#selected-dishes___table');
  var selectedDishes = this.model.getFullMenu();
  $.each(selectedDishes, function(dish){
    selectedDishesTable.append(renderTableItemTemplate(dish));
  });
}
