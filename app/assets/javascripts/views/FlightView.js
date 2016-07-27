var app = app|| {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td.planeSeats': 'seatSelection',
    'click button#confirmSeat': 'makeReservation'
  },
  render: function(){
    var flightViewTemplate = $('#flightView').html();
    console.log(flightViewTemplate);
    var flightViewTemplater = _.template(flightViewTemplate);

    this.$el.html( flightViewTemplater( this.model.toJSON() ) );
  },
  seatSelection: function(){
    var seatId = $('td').attr(id);
    console.log(seatId);
  },
  makeReservation: function(){

  }
});
