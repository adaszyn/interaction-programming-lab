function renderMenuItemTemplate(item) {
  return `
  <div id="print-summary">
    <div class="menu-item col-md-1 col-xs-12">
      <div class="menu-item___image" style="background-image url('${item.image}')">
      </div>
    </div>

    <div class="print-summary__description col-md-5 col-xs-12">
      ${item.title}
    </div>

    <div class="print-summary__preparation cold-md-6 col-xs-12">
      ${item.instructions}
    </div>
  </div>
  `;
}


var PrintView = function (container, model) {
    View.call(this, container, model)

    this.container = container;
    this.model = model;
}

PrintView.prototype = new View()

PrintView.prototype.update = function() {
  var container = this.container;
  var model = this.model;
  var menu = model.getFullMenu();
  console.log(menu);
  menu.then((menu) => {
    menu.forEach((dish) => {
      var html = renderMenuItemTemplate(dish);
      console.log(html);
      container.append(html)
    });
  });
}
