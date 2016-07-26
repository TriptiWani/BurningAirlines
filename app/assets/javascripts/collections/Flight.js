var app = app || {};

app.Flights = Backbone.Collection.extend ({
  root: '/flights',
  defaults: app.Flight,

  initialize: function() {
    this.on('add', function () {
      console.log('A new flight has been added to the collection');
    });
    this.on('remove', function () {
      console.log('A flight has been removed from the collection');
    });
  }
});
