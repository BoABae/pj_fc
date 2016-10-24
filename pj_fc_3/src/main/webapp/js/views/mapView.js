$(function(){
	var mapContainer = document.getElementById('map'),
	mapOption={
		center : new daum.maps.LatLng(37.404337, 127.106141),
		level : 3
	};
	
	var map = new daum.maps.Map(mapContainer, mapOption);
	

});



var mapView = Backbone.View.extend({
	el : $("#content"),

	events : {
		'click #search' : 'search'
	},

	initialize : function() {
		this.render();

	},

	render : function() {
		var template = _.template($("#map_html").html(), {});
		this.$el.html(template);
	},

	search : function() {
		var ad = document.getElementById("address").value;
		var geocoder = new daum.maps.services.Geocoder();

		geocoder.addr2coord(ad, function(status, result) {
			if (status === daum.maps.services.Status.OK) {
				var coords = new daum.maps.LatLng(result.addr[0].lat,
						result.addr[0].lng);
				console.log(coords);
				console.log("success");
				
				
			} else {
			}

		});
	}

});

var mv = new mapView();
