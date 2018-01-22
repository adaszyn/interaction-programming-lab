// 'ingredients':[{
//     'name':'active dry yeast',
//     'quantity':0.5,
//     'unit':'g',
//     'price':4
//     },{
function renderIngredientsRow(ingredient) {
  return `<tr>
        <td>${ingredient.quantity} ${ingredient.unit}</td>
        <td>${ingredient.name}</td>
        <td>${ingredient.price}</td>
    </tr>`;
}
function renderIngredients(menuItem) {
  var totalPrice = menuItem.ingredients.reduce(
    (sum, ingredient) => sum + ingredient.price, 0
  );
  var ingredientCells = menuItem.ingredients.reduce(
    (html, ingredient) => html + renderIngredientsRow(ingredient) + "\n",
    ""
  );
  return `
    <table class="table">
    <tbody>
      ${ingredientCells}
        <tr>
            <td>
                <button type="button" class="btn btn-secondary btn-md">Add to cart</button>
            </td>
            <td></td>
            <td>SEK ${totalPrice}</td>
        </tr>

    </tbody>
</table>`;
}
function renderDishView(menuItem) {
  return `
    <div class="row">
    <div class="col-md-6 col-xs-12">
        <h1>${menuItem.name}</h1>
        <img class="" src="./images/${menuItem.image}" />
        <p>
            ${menuItem.description}
        </p>
        <a href="#plannerView">
            <button type="button" class="btn btn-secondary btn-md">back to search</button>
        </a>
        <h1>PREPARATION</h1>

    </div>
    <div class="col-md-6 col-xs-12">
        Ingredients for 3 people
       ${renderIngredients(menuItem)}
    </div>
</div>`;
}
var DishView = function(container, model) {
    this.container = container;
    this.model = model;
};

DishView.prototype.render = function() {
    var routeParams = parseRoute(window.location.hash);
    var dish = this.model.getDish(routeParams.params.id);
    if (dish) {
      this.container.html(renderDishView(dish));
    }
}