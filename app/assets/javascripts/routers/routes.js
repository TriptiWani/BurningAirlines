var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'search',
    'flight/:id': 'flightDetails',
  },
  search: function () {
    // debugger;
    console.log("something");
    var searchView = new app.SearchView({collection: app.flights});
    searchView.render();
  },
  flightDetails: function(id) {
    // debugger;
    console.log("something else");
    var flightView = new app.FlightView();
    flightView.render();
  }
});
