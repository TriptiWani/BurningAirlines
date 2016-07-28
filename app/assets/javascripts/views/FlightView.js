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
  seatSelection: function(){
    var seatId = $('td').attr(id);
    console.log(seatId);
  },
  makeReservation: function(){

  }
});
