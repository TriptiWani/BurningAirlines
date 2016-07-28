var app = app || {};

app.Reservations = Backbone.Collection.extend ({
  url: '/reservations',//updated the root to url and modified the name of the collection.js to Flights
  model: app.Reservation,

  initialize: function() {
    this.on('add', function () {
      console.log('A new seat has been reserved');
    });
    this.on('remove', function () {
      console.log('A seat has been removed');
    });
  }
});
