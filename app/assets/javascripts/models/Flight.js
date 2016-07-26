var app = app || {};

app.Flight = Backbone.Model.extend ({
  urlRoot: '/flights',

  initialize: function () {
    console.log( "A new flight has been created");
  },

  defaults: {
    origin: "Sydney",
    destination: "London"
  },
});
