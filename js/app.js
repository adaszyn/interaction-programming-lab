$(function() {
	//We instantiate our model
	var model = new DinnerModel();
    
	// And create the instance of ExampleView
	var introView = new IntroView($("#introView"), model);
	var plannerView = new PlannerView($("#plannerView"), model);
	var plannerView = new MenuView($("#menuView"), model);
	var plannerView = new SidebarView($("#sidebarView"), model);
    window.renderViews = function() {
        introView.render()
        plannerView.render()
    };
    var router = new ApplicationRouter({
        '': $("#introView"),
        '#plannerView': [$("#sidebarView"), $("#menuView")],
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