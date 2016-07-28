var app = app|| {};

app.AirplaneView = Backbone.View.extend({
  el: '#planeSeatsDisplay',
  render: function(){
    var airplaneViewTemplate = $('#planeView').html();
    var airplaneViewTemplater = _.template(airplaneViewTemplate);

    this.$el.html( airplaneViewTemplater( this.model.toJSON() ) );
  }
});
