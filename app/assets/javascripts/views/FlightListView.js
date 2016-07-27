var app = app|| {};

app.FlightListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click button': 'searchFlights'
  },
  render: function() {
    this.$el.text(this.model.get('number'));
    this.$el.appendTo('#flights');
  },
  searchFlights: function() {
    // write the search function here
    app.router.navigate('flights/'+ this.model.get('id'),true);
  }
});
