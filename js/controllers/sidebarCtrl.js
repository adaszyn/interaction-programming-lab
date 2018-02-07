var SidebarCtrl = function(model, view){
  view.onNumberOfGuestsChange(function(event){
    var value = event.target.value;
    model.setNumberOfGuests(parseInt(this.value));
  });
}
