_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};
app.router = new app.AppRouter();

$(document).ready(function(){

  app.flights = new app.Flights();
  // we dont fetch it here, need to fetch it as per the search criteria
  app.flights.fetch().done(function() {
      Backbone.history.start();
  });

});
