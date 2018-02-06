$(function() {
  var model = new DinnerModel();

  model.addDishToMenu(1)
  model.addDishToMenu(2)
  model.addDishToMenu(3)
  model.addDishToMenu(100)
  model.addDishToMenu(101)

  var views = {
    intro: new IntroView($("#introView"), model),
    planner: new PlannerView($("#plannerView"), model),
    menu: new MenuView($("#menuView"), model),
    sidebar: new SidebarView($("#sidebarView"), model),
    dish: new DishView($("#dishView"), model),
    confirm: new ConfirmView($("#confirmView"), model)
  };
  window.updateViews = function() {
    for (let viewKey in views) {
        if (views.hasOwnProperty(viewKey)) {
            views[viewKey].update()
        }
    }
  };
  var router = new ApplicationRouter({
    "": views.intro,
    "#planner": [
      views.sidebar,
      views.menu,
      $("#menu-toggle-button"),
      $("#main-view-container"),
    ],
    "#dish": [
      views.sidebar,
      views.dish,
      $("#menu-toggle-button"),
      $("#main-view-container"),
    ],
    "#confirm": [
      views.confirm,
    ]
  });
  $("#menu-toggle-button").on("click", function() {
    router.toggleElement($("#sidebarView"));
  });
  router.update();
  window.updateViews()
  window.onhashchange = function() {
    updateViews()
    router.update();
  };
});
