



var mapView = Backbone.View.extend({
	
	el : $("#content"),
	events: {
		'click #search' : 'search'
	},
	initialize : function() {
		var self = this;
		
		this.render();
	},
	render : function() {
		var template = _.template($("#map_html").html(), {});
		this.$el.html(template);
		var map = new daum.maps.Map(document.getElementById('map'),
				this.mapOptions);
		var zoomControl = new daum.maps.ZoomControl();
		map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

	},
	mapOptions : {
		center : new daum.maps.LatLng(37.404337, 127.106141), // 지도의 중심좌표
		level : 3
	},
	search: function(){
		var map = new daum.maps.Map(document.getElementById('map'),
				this.mapOptions);
		var geocoder = new daum.maps.services.Geocoder();
		var ad = document.getElementById("address").value;
		geocoder.addr2coord(ad, function(status, result){
			if(status === daum.maps.services.Status.OK){
				var coords = new daum.maps.LatLng(result.addr[0].lat,
						result.addr[0].lng);
				
				var marker = new daum.maps.Marker({
					map : map,
					position : coords,
					draggable : true
				});
				map.setCenter(coords);
			
			}else{
				console.log("잘못된 주소입니다");
			}
		});
	},
	
	
});

var mv = new mapView();


/*
 $(function(){
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		mapOption = {
			center : new daum.maps.LatLng(37.404337, 127.106141), // 지도의 중심좌표
			level : 3
		// 지도의 확대 레벨
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

			} else {
			}

		});
	},

});

*/
