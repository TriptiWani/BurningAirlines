var app = app|| {};

app.FlightListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'searchFlights'
  },
  render: function() {
    this.$el.text(this.model.get('number'));
    this.$el.appendTo('#flights');
  },
  searchFlights: function() {
    // write the search function here
    console.log('You clicked a flight',this.model.get('id'));
    app.router.navigate('flights/'+ this.model.get('id'),true);
  }
});
