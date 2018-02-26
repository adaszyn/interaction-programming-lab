
function renderTableItemTemplate(dish){
  return `
    <tr class="dish-row">
      <td>${dish.title}</td>
      <td>${dish.totalPriceForAllGuests}</td>
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
  var self = this;

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

  var menuTable = this.container.find('.selected-dishes-table > tbody');
  var menu = this.model.getFullMenuWithPrice();
  var numberOfGuests = this.model.getNumberOfGuests();

  this.container.find('.selected-dishes-table').append(getSpinnerMarkup());
  menu.then((menu) => {
    self.container.find('.spinner').remove();
    menuTable.children('tr').remove();
    $.each(menu, function(id){
      var dish = menu[id];
      dish.totalPriceForAllGuests = dish.pricePerServing * numberOfGuests ;
      menuTable.append(renderTableItemTemplate(dish));
    });
  })
  .catch(function(error){
    self.container.find('.spinner').remove();
    toastr.error('Could not retrieve sidebar info :\'( \n Please try again');
  })
}
