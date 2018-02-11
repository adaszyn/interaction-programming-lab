var DishViewCtrl = function(model, view){
  view.onAddDishToMenu(function () {
    model.addDishToMenu(view.dishId);
  });
}
