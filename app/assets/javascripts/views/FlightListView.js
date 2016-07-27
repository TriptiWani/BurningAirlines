var app = app|| {};

app.FlightListView = Backbone.View.extend({
  tagName: 'tr',
  events: {
    'click td#flight': 'showFlightDetails'
  },
  render: function(results) {
    var $flightNumber = $('<td id="flight"></td>');
    $flightNumber.text(this.model.get('number'));

    var $flightDate = $('<td></td>');
    $flightDate.text(this.model.get('date'));

    var $flightPlane = $('<td></td>');
    $flightPlane.text(this.model.get('airplane_id')); //app.airplanes.where({id: airplane_id})

    var $flightOriginDestination = $('<td></td>');
    $flightOriginDestination.text(this.model.get('origin')+ ' > ' + this.model.get('destination'));


    $flightDate.appendTo(this.$el);
    $flightNumber.appendTo(this.$el);
    $flightOriginDestination.appendTo(this.$el);
    $flightPlane.appendTo(this.$el);
    this.$el.appendTo('#flights');
  },
  showFlightDetails: function() {
    console.log('Clicked');
    app.router.navigate('flights/'+ this.model.get('id'), true);
  }
});
