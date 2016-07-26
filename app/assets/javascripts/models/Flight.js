var app = app || {};

app.Flight = Backbone.Model.extend ({
  urlRoot: '/flights',
  defaults: {
    origin: "Sydney",
    destination: "London"
  }
});
