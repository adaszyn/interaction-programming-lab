$(function() {
  //We instantiate our model
  var model = new DinnerModel();

  // And create the instance of ExampleView
  var views = [
    new IntroView($("#introView"), model),
    new PlannerView($("#plannerView"), model),
    new MenuView($("#menuView"), model),
    new SidebarView($("#sidebarView"), model),
    new DishView($("#dishView"), model)
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
      $("#menu-toggle-button")
    ],
    "#dishView": [
      $("#sidebarView"),
      $("#dishView"),
      $("#menu-toggle-button")
    ],
    "#confirmView": [
      $("#confirmView")
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
