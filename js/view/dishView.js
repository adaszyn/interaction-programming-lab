function renderMenuItemTemplate(item) {
    return `
    <div class="menu-item">
        <img class="menu-item__image" src="./images/${item.image}" />
        <h3 class="menu-item__label">${item.name}</h3>
    </div>
    `
}

var DishView = function (container, dish) {
    container.find('#guests-number-list').val()
    
    // <div class="menu-item">
    //                 <img class="menu-item__image" src="./images/bakedbrie.jpg" />
    //                 <h3 class="menu-item__label">Lasagne</h3>
    //             </div>
}
