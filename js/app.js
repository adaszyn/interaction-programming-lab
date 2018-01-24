$(function() {
  var model = new DinnerModel();

  model.addDishToMenu(1)
  model.addDishToMenu(2)
  model.addDishToMenu(3)
  model.addDishToMenu(100)
  model.addDishToMenu(101)
  
  var views = [
    new IntroView($("#introView"), model),
    new PlannerView($("#plannerView"), model),
    new MenuView($("#menuView"), model),
    new SidebarView($("#sidebarView"), model),
    new DishView($("#dishView"), model),
    new ConfirmView($("#confirmView"), model)
  ];
  window.renderViews = function() {
    views.forEach(function(view) {
        view.render()
    })
  };
  var router = new ApplicationRouter({
    "": $("#introView"),
    "#plannerView": [
      $("#sidebarView"),
      $("#menuView"),
      $("#menu-toggle-button"),
      $("#main-view-container"),
    ],
    "#dishView": [
      $("#sidebarView"),
      $("#dishView"),
      $("#menu-toggle-button"),
      $("#main-view-container"),
    ],
    "#confirmView": [
      $("#confirmView"),
    ]
  });
  $("#menu-toggle-button").on("click", function() {
    router.toggleView("#sidebarView");
  });
  router.render();
  window.renderViews()
  window.onhashchange = function() {
    renderViews()
    router.render();
  };
});
