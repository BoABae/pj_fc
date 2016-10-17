var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;

		this.conView = new ContentView({template: '#content_html'});
		this.cssView = new ContentView({template: '#cssEdit_html'});
		this.mView = new ContentView({template: '#map_html'});
		this.snsView = new ContentView({template: '#SNS_html'});
		
	},

	routes: {
		"": "content_html",
		"content_html": "content_html",
		"cssEdit_html": "cssEdit_html",
		"map_html": "map_html",
		"SNS_html": "SNS_html"
		
	},

	currentView: null,

	switchView: function(view) {
		if (this.currentView) {
			// Detach the old view
			this.currentView.remove();
		}
		// Move the view element into the DOM (replacing the old content)
		this.el.html(view.el);
		// Render view after it is in the DOM (styles are applied)
		view.render();
		this.currentView = view;
	},

	content_html: function() {
		this.switchView(this.conView);
	},
	
	cssEdit_html: function() {
		this.switchView(this.cssView);
	},
	map_html: function(){
		this.switchView(this.mView);
		
	},
	SNS_html: function(){
		this.switchView(this.snsView);
	}

});


var router = new ApplicationRouter();
