function renderMenuItemTemplate(item) {
    return `
    <a href="#dishView?id=${item.id}" class="menu-item-container">
        <div class="menu-item col-md-3 col-xs-12">
          <div class="menu-item__image" style="background-image: url('./images/${item.image}')" />
          <h3 class="menu-item__label">${item.name}</h3>
        </div>
    </a>
    `
}

var PlannerView = function (container, model) {
    this.container = container;
    this.model = model;
}

PlannerView.prototype.render = function() {
    var menu = this.model.getFullMenu()
    var menuContainer = $('#menu-container');
    this.container.find('#guests-number-list')
        .val(this.model.getNumberOfGuests())
    menu.forEach(function(menuItem) {
        menuContainer.append(renderMenuItemTemplate(menuItem))
    })
    if(window.innerWidth < 480){
      $('.sidebar').hide()
    }
}
