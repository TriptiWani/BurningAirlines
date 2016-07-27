var app = app || {};

app.Flights = Backbone.Collection.extend ({
  url: '/airplanes',
  model: app.Airplanes,

  initialize: function() {
    this.on('add', function () {
      console.log('A new airplane has been added to the collection');
    });
    this.on('remove', function () {
      console.log('A airplane has been removed from the collection');
    });
  }
});
