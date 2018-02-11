function renderMenuItemTemplate(item) {
    return `
    <a href="#dish?id=${item.id}" class="menu-item-container">
        <div class="menu-item">
          <div class="menu-item__image" style="background-image: url('./images/${item.image}')">
              <h3 class="menu-item__label">${item.name}</h3>
          </div>
        </div>
    </a>
    `
}

var PlannerView = function (container, model) {
    View.call(this, container, model)

    var self = this;
    this.container = container;
    this.model = model;
    this.selectedDishType = container.find('#search-view___select').val()
    this.searchTerm = container.find('#search-view___input').val()

    container.find('#search-view___input').on('input', function (event) {
        self.searchTerm = event.target.value;
    })

    container.find('#search-view___select').on('change', function (event) {
        self.selectedDishType = event.target.value;
    })

    this.onSearchSubmit = (callback) =>
        container.find('#search___btn-dinner').on('click', callback);
}
PlannerView.prototype = new View()

PlannerView.prototype.update = function() {
    var menu = this.model.getSearchResults();
    var menuContainer = this.container.find('#menu-container');
    menuContainer.html('');
    this.container.find('#guests-number-list')
        .val(this.model.getNumberOfGuests())

    menu.forEach(function(menuItem) {
        menuContainer.append(renderMenuItemTemplate(menuItem))
    })
    if(window.innerWidth < 480){
      $('.sidebar').hide()
    }
}
