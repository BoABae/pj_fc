//main의 header
var header = Backbone.View.extend({
	el : $("#header"),

	events : {
		'click .btn_back' : 'page_back'
	},

	initialize : function() {
		this.render();
	},

	render : function() {
		var template = _.template($("#header_html").html(), {});
		this.$el.html(template);

	},
	// page back button event, temporarily
	page_back : function() {
		window.history.back();
	}

});

var hd = new header();

// main의 content부분
var Content = Backbone.View.extend({

	el : $("#content"),
	tagName: 'button',
	className: 'conBtn',
	initialize : function() {
		this.render();
	},
	render : function() {
		var template = _.template($("#content_html").html());
		this.$el.html(template);
		//why content button not work?
		$(".conBtn").css({
			"width": 50,
			"height": 50
		});
	},

});

var con = new Content();

