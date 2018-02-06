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

    this.container = container;
    this.model = model;
}
PlannerView.prototype = new View()

PlannerView.prototype.update = function() {
    var menu = this.model.getAllDishes();
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
