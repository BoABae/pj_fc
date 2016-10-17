
/*
$(document).ready(function() {
	$("#slider").slider();
	
	var SliderModel = Backbone.Model.extend({});
	
	var SliderView = Backbone.View.extend({
		el : $("#slider"), // Specifies the DOM element which this view handles
		
		events : {
			"slidechange" : "updateVal"  
		},
		
		updateVal : function() {
			console.log('SliderView.updateVal');
			var val = this.$el.slider("option", "value");
			this.model.set({slidervalue : val});
		}
		
	});
	
	var ValueView = Backbone.View.extend({
		initialize: function(args) {
			_.bindAll(this, 'updateValue');
			
			console.log('ValueView.initialize');
			this.model.bind('change:slidervalue', this.updateValue);
			console.log(this);
		},
		
		updateValue: function() {
			
			console.log('ValueView.updateValue');
			
			var value = this.model.get('slidervalue');
			console.log(value);
			$("#sliderVal").val(value);
		}
	});
	
	var sliderModel = new SliderModel;
	var sliderView = new SliderView({model : sliderModel});
	var valView = new ValueView({model : sliderModel});
});

*/