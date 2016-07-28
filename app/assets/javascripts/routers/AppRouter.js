var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  //  'flights/:id': 'showFlightDetails',
   'flights/:id1/airplanes/:id2': 'showAirplaneAndFlightDetails'
  },
  index: function(){
    var appView = new app.AppView({collection:app.flights});
    appView.render();
  },
  showFlightDetails: function(id){
    console.log('flight');
    var flight = app.flights.get(id);
    var flightView = new app.FlightView({model:flight});
    flightView.render();
  },
  showAirplaneAndFlightDetails: function(id1,id2){
    console.log('plane&flight');
    var flight = app.flights.get(id1);
    var flightView = new app.FlightView({model:flight});
    flightView.render();

  }
});
