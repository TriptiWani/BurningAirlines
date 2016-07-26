var app = app || {};

app.Flights = Backbone.Collection.extend ({
  url: '/flights',//updated the root to url and modified the name of the collection.js to Flights
  model: app.Flight,

  initialize: function() {
    this.on('add', function () {
      console.log('A new flight has been added to the collection');
    });
    this.on('remove', function () {
      console.log('A flight has been removed from the collection');
    });
  }
});
