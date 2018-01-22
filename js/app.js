$(function() {
	//We instantiate our model
	var model = new DinnerModel();
    
	// And create the instance of ExampleView
	var introView = new IntroView($("#introView"), model);
	var plannerView = new PlannerView($("#plannerView"), model);
	var menuView = new MenuView($("#menuView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishView = new DishView($("#dishView"), model);
    window.renderViews = function() {
        introView.render()
        plannerView.render()
    };
    var router = new ApplicationRouter({
        '': $("#introView"),
        '#plannerView': [$("#sidebarView"), $("#menuView"), $('#menu-toggle-button')],
        '#dishView': [$("#sidebarView"), $("#dishView")],
        '#confirmView': [$("#confirmView")],
    })
    $('#menu-toggle-button')
        .on('click', function() {
            router.toggleView('#sidebarView')
        })
    router.render()
    window.onhashchange = router.render.bind(router);
  
});