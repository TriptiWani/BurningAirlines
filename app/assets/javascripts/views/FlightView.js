var app = app|| {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td.planeSeats': 'seatSelection',
    'click button#confirmSeat': 'makeReservation'
  },
  render: function(){
    var flightViewTemplate = $('#flightView').html();
    var flightViewTemplater = _.template(flightViewTemplate);

    // var flight = this.model.toJSON();
    // flight.columns = 55;
    this.$el.html( flightViewTemplater( this.model.toJSON() ) );
    //
    // app.airplanes = new app.Airplanes();
    // var airplaneId = this.model.get('airplane_id');
    // app.airplanes.fetch().done(function(){
    //   $flightPlane.text((((app.airplanes.where({ id: airplaneId }))[0]).attributes).name);
    // });

  },
  seatSelection: function(){
    var seatId = $('td').attr(id);
    console.log(seatId);
  },
  makeReservation: function(){

  }
});
