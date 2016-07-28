_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};
app.router = new app.AppRouter();

$(document).ready(function(){

  app.flights = new app.Flights();
  app.reservations = new app.Reservations();
  // we dont fetch it here, need to fetch it as per the search criteria
  app.flights.fetch().done(function() {
      Backbone.history.start();
  });

  // setInterval(function() {
  //   app.reservations.fetch();
  // },1000);

});
