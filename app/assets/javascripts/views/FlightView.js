var app = app|| {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td.planeSeats': 'seatSelection',
    'click button#confirmSeat': 'confirmSeats'
  },
  render: function(){
    var flightViewTemplate = $('#flightView').html();
    var flightViewTemplater = _.template(flightViewTemplate);

    var flight = this.model.toJSON();
    app.airplanes = new app.Airplanes();
    var airplaneId = this.model.get('airplane_id');
    var columns;
    var rows;
    var view = this;
    app.airplanes.fetch().done(function(){

      columns = ((((app.airplanes.where({ id: airplaneId }))[0]).attributes).columns);
      rows = ((((app.airplanes.where({ id: airplaneId }))[0]).attributes).rows);
      flight.columns = columns;
      flight.rows = rows;
      view.$el.html( flightViewTemplater( flight ) );
    });

  },
  seatSelection: function(event){
    var $td = $(event.target);
    var seatId = $td.attr('id');
    console.log(seatId);
    $('p#seatSelected').text(seatId);
    $td.addClass('booked');
  },
  confirmSeats: function(){
    console.log('Confirm seats');
    // reservations/flights/:id1/users/:id2
      var userId = app.current_user;
      var flightId = this.model.get('id');
      var reservation = new app.Reservation({ user_id: userId , flight_id: flightId});
      reservation.save();
      app.reservations.add(reservation);
      // console.log('reservations/flights/'+ this.model.get('id')+'/users/'+ userId);
      // app.router.navigate('reservations/flights/'+ this.model.get('id')+'/users/'+ userId, true);
  }
});
