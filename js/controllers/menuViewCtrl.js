var MenuViewCtrl = function(view, model){

  var category_input = view.find('#search-view___select');
  var search_input = view.find('#search-view___input');

  view.find('#search___btn').on('click', function(e){
    var category = category_input.val();
    var search_term = search_input.val();
    model.setSearchResults(category, search_term);
  });
}
