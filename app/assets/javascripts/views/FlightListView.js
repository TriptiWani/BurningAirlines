var app = app|| {};

app.FlightListView = Backbone.View.extend({
  tagName: 'tr',
  events: {
    'click button': 'searchFlights'
  },
  render: function(results) {
    var $flightNumber = $('<td></td>');
    $flightNumber.text(this.model.get('number'));

    var $flightDate = $('<td></td>');
    $flightDate.text(this.model.get('date'));

    var $flightPlane = $('<td></td>');
    $flightPlane.text(this.model.get('airplane_id'));

    var $flightOriginDestination = $('<td></td>');
    $flightOriginDestination.text(this.model.get('origin')+ ' > ' + this.model.get('destination'));


    $flightDate.appendTo('#flights');
    $flightNumber.appendTo('#flights');
    $flightOriginDestination.appendTo('#flights');
    $flightPlane.appendTo('#flights');


    // this.$el.text(this.model.get('number'));
    // this.$el.appendTo('#flights');
  },
  searchFlights: function() {
    app.router.navigate('flights/'+ this.model.get('id'),true);
  }
});
