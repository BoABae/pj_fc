var snsView = Backbone.View.extend({
	el: $("#content"),
	
	events: {
		'click #facebook' : 'fb_login',
		'click #twitter' : 'tw_login',
		'click #kakaostory-share-button' : 'ks_login'
	},
	initialize: function(){
		
	//facebook connect
		window.fbAsyncInit = function(){
			
			FB.init({
				appId : '933596096783836',
				cookie : true, // enable cookies to allow the server to access 
				// the session
				xfbml : true, // parse social plugins on this page
				version : 'v2.5' // use graph api version 2.5
			});
			
		};
		(function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "//connect.facebook.net/en_US/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		
		
		
		//kakao connect
			 Kakao.init('2a4508b314dd2739b8940b52f40a6654');
	 	  

	 	  (function (d, s, id) {
	 	    var js, fjs = d.getElementsByTagName(s)[0];
	 	    if (d.getElementById(id)) return;
	 	    js = d.createElement(s); js.id = id;
	 	    js.src = "//developers.kakao.com/sdk/js/kakao.story.min.js";
	 	    fjs.parentNode.insertBefore(js, fjs);
	 	  }(document, 'script', 'kakao-js-sdk'));
	 	  
	 	 //twitter connect
	 	 window.twttr = (function(d, s, id) {
	 		  var js, fjs = d.getElementsByTagName(s)[0],
	 		    t = window.twttr || {};
	 		  if (d.getElementById(id)) return t;
	 		  js = d.createElement(s);
	 		  js.id = id;
	 		  js.src = "https://platform.twitter.com/widgets.js";
	 		  fjs.parentNode.insertBefore(js, fjs);
	 		 
	 		  t._e = [];
	 		  t.ready = function(f) {
	 		    t._e.push(f);
	 		  };
	 		 
	 		  return t;
	 		}(document, "script", "twitter-wjs"));
	 	 
	 
		this.render();
	},
	render: function(){
		
		var template = _.template($("#SNS_html").html(), {});
		this.$el.html(template);
		
		
	},
	
	
	fb_login: function(){
		FB.getLoginStatus(function(response){
			 if (response.status === 'connected') {
				    console.log('Logged in.');
				    FB.ui({
					    method: 'share',
					    display: 'popup',
					    href: 'https://developers.facebook.com/docs/',
					  }, function(response){});
				  }
				  else {
				    FB.login();
				    FB.ui({
					    method: 'share',
					    display: 'popup',
					    href: 'https://developers.facebook.com/docs/',
					  }, function(response){});
				  }
				});
	},
	tw_login: function(){
		window.location.href = "http://twitter.com/login";
		
	},
	ks_login: function(){
		 Kakao.Story.share({
		        url: 'http://baro.moven.net/freecore.app#box/menu_first',
		        text:'프리코어 화이팅 :)'
		      });
	}
	
	
	
});

var snsView = new snsView();