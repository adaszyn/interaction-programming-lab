// 'ingredients':[{
//     'name':'active dry yeast',
//     'quantity':0.5,
//     'unit':'g',
//     'price':4
//     },{
function renderIngredientsRow(ingredient, numberOfGuests) {
  var quantity = ingredient.quantity * numberOfGuests;
  var price = ingredient.price * numberOfGuests;
  return `<tr>
        <td>${quantity} ${ingredient.unit}</td>
        <td>${ingredient.name}</td>
        <td>${price}</td>
    </tr>`;
}
function renderIngredients(menuItem, numberOfGuests) {
  var totalPrice = menuItem.ingredients.reduce(
    (sum, ingredient) => sum + (ingredient.price * numberOfGuests), 0
  );
  var ingredientCells = menuItem.ingredients.reduce(
    (html, ingredient) => html + renderIngredientsRow(ingredient, numberOfGuests) + "\n",
    ""
  );
  return `
    <table class="table">
    <tbody>
      ${ingredientCells}
        <tr>
            <td>
              <a href="#planner">
                <button type="button" class="ingredients-table__button btn btn-secondary btn-md" data-dish-id="${menuItem.id}">Add to cart</button>
              </a>
            </td>
            <td></td>
            <td>SEK ${totalPrice}</td>
        </tr>

    </tbody>
</table>`;
}
function renderDishView(menuItem, numberOfGuests) {
  return `
    <div class="col-md-6 col-xs-12">
        <h1>${menuItem.name}</h1>
        <img class="dish-preview-img" src="./images/${menuItem.image}" />
        <p>
            ${menuItem.description}
        </p>
        <a href="#planner">
            <button type="button" class="dnp-btn btn btn-secondary btn-md">Back to search</button>
        </a>
        <h1>PREPARATION</h1>

    </div>
    <div class="ingredients-table col-md-6 col-xs-12">
        <h3 class="ingredients-table__header">
            Ingredients for ${numberOfGuests} people
        </h3>
       ${renderIngredients(menuItem, numberOfGuests)}
   </div>`;
}

var DishView = function(container, model) {
    View.call(this, container, model)
    this.container = container;
    this.model = model;
};
DishView.prototype = new View()

DishView.prototype.update = function() {
    var routeParams = parseRoute(window.location.hash);
    var dish = this.model.getDish(routeParams.params.id);
    if (dish) {
      this.container.html(renderDishView(dish, this.model.getNumberOfGuests()));
    }
    if(window.innerWidth < 480){
      $('.sidebar').hide()
    }
}
