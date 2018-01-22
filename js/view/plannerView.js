function renderMenuItemTemplate(item) {
    return `
    <div class="menu-item">
        <img class="menu-item__image" src="./images/${item.image}" />
        <h3 class="menu-item__label">${item.name}</h3>
    </div>
    `
}

var PlannerView = function (container, model) {
    var menu = model.getFullMenu()
    $('#guests-number-list').val(model.getNumberOfGuests())
    var menuContainer = $('#menu-container')
    menu.forEach(function(menuItem) {
        menuContainer.append(renderMenuItemTemplate(menuItem))
    })
    // <div class="menu-item">
    //                 <img class="menu-item__image" src="./images/bakedbrie.jpg" />
    //                 <h3 class="menu-item__label">Lasagne</h3>
    //             </div>
}
 
