function renderMenuItemTemplate(item) {
    return `
    <a href="#dishView?id=${item.id}">
        <div class="menu-item">
        <img class="menu-item__image" src="./images/${item.image}" />
        <h3 class="menu-item__label">${item.name}</h3>
        </div>
    </a>
    `
}

var PlannerView = function (container, model) {
    this.container = container;
    this.model = model;
    // <div class="menu-item">
    //                 <img class="menu-item__image" src="./images/bakedbrie.jpg" />
    //                 <h3 class="menu-item__label">Lasagne</h3>
    //             </div>
}

PlannerView.prototype.render = function() {
    var menu = this.model.getFullMenu()
    var menuContainer = $('#menu-container');
    this.container.find('#guests-number-list')
        .val(this.model.getNumberOfGuests())
    menu.forEach(function(menuItem) {
        menuContainer.append(renderMenuItemTemplate(menuItem))
    })
}
