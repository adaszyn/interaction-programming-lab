var DishViewCtrl = function(view, model){
  view.on('click', '> button.ingredients-table___button', function(e){
    model.addDishToMenu(this.data('dish-id'));
  });
}
