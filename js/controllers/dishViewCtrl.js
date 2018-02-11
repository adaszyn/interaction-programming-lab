var DishViewCtrl = function(view, model){
  this.view.onAddDishToMenu(function () {
    model.addDishToMenu(view.dishId);
  });
}
