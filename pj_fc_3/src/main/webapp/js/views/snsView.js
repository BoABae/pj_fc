var snsView = Backbone.View.extend({
	el: $("#content"),
	
	events: {
		'click #facebook' : 'fb_login',
		'click #twitter' : 'tw_login',
		'click #kakaostory' : 'ks_login'
			
			
	},
	
	initialize: function(){
		this.render();
	},
	render: function(){
		var template = _.template($("#SNS_html").html(), {});
		this.$el.html(template);
		
	},
	
	fb_login: function(){
		window.location.href = "loginPage/facebook_login.html";
	},
	tw_login: function(){
		window.location.href = "loginPage/twitter_login.html";
	},
	ks_login: function(){
		window.location.href = "loginPage/kakao_login.html";
	}
	
	
	
});

var snsView = new snsView();