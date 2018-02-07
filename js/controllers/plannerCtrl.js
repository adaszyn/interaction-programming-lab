var PlannerCtrl = function (model, view) {
    this.model = model
    this.view = view;

    this.view.onSearchSubmit(function () {
        model.setSearchResults(view.selectedDishType, view.searchTerm);        
    })
}
