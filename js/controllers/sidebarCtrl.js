var SidebarCtrl = function(view, model){
  view.find('#num-of-guests___select').on('change', function(){
    model.setNumberOfGuests(parseInt(this.value));
  });
}
