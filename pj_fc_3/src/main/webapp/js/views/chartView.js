var ChartView = Backbone.View.extend({
	el: $("#content"),
	initialize: function(){
		this.render();
	},
	
	
	render: function(){
		var template = _.template($("#googleChart_html").html(), {});
		this.$el.html(template);
		 google.charts.load('current', {
			 'packages' : [ 'corechart' ]
			 });
		google.charts.setOnLoadCallback(this.drawChart);
		
	},
	drawChart: function(){
		var data = google.visualization.arrayToDataTable([
		                                             	 [ 'Year', 'Sales'], [ '2004', 1000],
		                                            	 [ '2005', 1170], [ '2006', 660],
		                                            	 [ '2007', 1030] ]);
		var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
		chart.draw(data, {width: 400, height: 300});
	}
	
});

var googlechart = new ChartView();