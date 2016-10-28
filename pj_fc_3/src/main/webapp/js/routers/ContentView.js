var ContentView = Backbone.View.extend({

	/*
	 * Initialize with the template-id
	 */
	initialize: function(options) {
		this.template = options.template;
		console.log(this.template);
	},

	/*
	 * Get the template content and render it into a new div-element
	 */
	render: function() {
		var content = $(this.template).html();
		$(this.el).html(content);
		console.log(content);
		return this;
	}

});