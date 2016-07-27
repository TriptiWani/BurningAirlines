var app = app|| {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  render: function(){
    var flightViewTemplate = $('#flightView').html();
    console.log(flightViewTemplate);
    var flightViewTemplater = _.template(flightViewTemplate);

    this.$el.html( flightViewTemplater( this.model.toJSON() ) );
  }
});
