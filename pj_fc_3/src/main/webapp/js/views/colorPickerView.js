
var colorP = Backbone.View.extend({
	el : $("#content"),
	
	initialize : function() {
		//this.render();
		this.render();
	},
	
	render : function() {
		var template = _.template($("#colorPicker_html").html(), {});
		this.$el.html(template);
	}

});
var cp = new colorP();
