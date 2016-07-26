var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'showDetails'
  },
  index: function(){
    var appView = new app.AppView({collection:app.flights});
    appView.render();
  },
  showDetails: function(id){
    console.log(id);
    var flight = app.flights.get(id);//this line is giving error
    var flightView = new app.FlightView({model:flight});
    flightView.render();
  },
});
