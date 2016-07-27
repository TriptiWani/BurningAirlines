var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#main', //This div has not yet been created
    events: {
      'click button': 'searchFlights'
    },
    initialize: function () {
    console.log( "A new view has been initialized" );
    },
    searchFlights: function(){
      var origin = $('#origin').val();
      var destination = $('#destination').val();
      console.log('Origin: '+origin);
      console.log('Dest: '+destination);
      console.log(this.collection);
    },
    render: function() {
        var content = $('#appView').html();
        console.log(this.collection);
        this.$el.html(content);
        this.collection.each(function(flight) {
            var flightListView = new app.FlightListView({ model: flight });
            flightListView.render();
        });
    }
});
