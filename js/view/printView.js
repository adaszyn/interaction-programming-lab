function renderPrintItemTemplate(item) {
  return `
  <div class="print-summary-item col-md-12">
    <div class="col-md-1"> </div>
    <div class="menu-item">
      <div class="print-summary-item__image col-md-1" style="background-image:url('${item.image}')">
      </div>
    </div>

    <div class="print-summary__description col-md-4 col-xs-12">
      <h1>${item.title}</h1>
      <div class="print-summary__extra_details">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </div>
    </div>

    <div class="print-summary__preparation col-md-5 col-xs-12">
      <h3>Preparation</h3>
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

PrintView.prototype = new View();

PrintView.prototype.update = function() {
  var summaryContainer = this.container.find(".print-summary");
  var container = this.container;
  summaryContainer.empty();
  var model = this.model;
  var menu = model.getFullMenu();
  container.find("span.num-of-guests").html(model.getNumberOfGuests() + " People");
  menu.then((menu) => {
    menu.forEach((dish) => {
      var html = renderPrintItemTemplate(dish);
      summaryContainer.append(html)
    });
  });
}
