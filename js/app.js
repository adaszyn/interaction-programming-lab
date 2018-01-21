$(function() {
	//We instantiate our model
	var model = new DinnerModel();
    
	// And create the instance of ExampleView
	var introView = new IntroView($("#introView"));
	var plannerView = new PlannerView($("#plannerView"));
	var plannerView = new MenuView($("#menuView"));
	var plannerView = new SidebarView($("#sidebarView"));
    window.renderViews = function() {
        introView.render()
        plannerView.render()
    };
    var router = new ApplicationRouter({
        '': $("#introView"),
        '#plannerView': [$("#sidebarView"), $("#menuView")],
    })
    $('#menu-toggle-button')
        .on('click', function() {
            router.toggleView('#sidebarView')
        })
    router.render()
    window.onhashchange = router.render.bind(router);
  
});