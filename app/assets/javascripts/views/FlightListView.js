var app = app|| {};

app.FlightListView = Backbone.View.extend({
  // el: '#flightsList',
  tagName: 'tr',
  events: {
    'click td#flight': 'showFlightDetails'
  },
  render: function(results) {
    $('#flights-table').css( "display", "inline" );

    var $flightNumber = $('<td id="flight"></td>');
    $flightNumber.text(this.model.get('number'));

    var $flightDate = $('<td></td>');
    $flightDate.text(this.model.get('date'));

    var $flightPlane = $('<td></td>');


    app.airplanes = new app.Airplanes();
    var airplaneId = this.model.get('airplane_id');
    app.airplanes.fetch().done(function(){
      $flightPlane.text((((app.airplanes.where({ id: airplaneId }))[0]).attributes).name);
    });

    var $flightOriginDestination = $('<td></td>');
    $flightOriginDestination.text(this.model.get('origin')+ ' > ' + this.model.get('destination'));

    $flightDate.appendTo(this.$el);
    $flightNumber.appendTo(this.$el);
    $flightOriginDestination.appendTo(this.$el);
    $flightPlane.appendTo(this.$el);
    // debugger;
    this.$el.appendTo('#flights');


    // this.$el.html($flightRow);
  },
  showFlightDetails: function() {
    app.router.navigate('flights/'+ this.model.get('id')+'/airplanes/'+ this.model.get('airplane_id'), true);

  }
});
