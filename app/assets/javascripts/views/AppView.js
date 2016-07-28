var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#main',
    events: {
      'click button': 'searchFlights',
    },
    initialize: function () {
    console.log( "A new view has been initialized" );
    },
    searchFlights: function(){



      var origin = $('#origin').val();
      var destination = $('#destination').val();
      var content = $('#resultsView').html();
      // debugger;
      this.$el.html(content);
      results = this.collection.where({origin: origin, destination: destination});
      results.forEach(function(flight) {
        console.log('flight from colllection in appView:render()', flight);
          var flightListView = new app.FlightListView({ model: flight });
          flightListView.render();
      });

    },
    render: function() {
        var content = $('#appView').html();
        this.$el.html(content);
        var origins = [];
        var destinations =[];
        this.collection.models.forEach(function(f){
          destinations.push(f.attributes.destination);
          origins.push(f.attributes.origin);
        });

        var $selectOrigin = this.$el.find('#origin');
        _.uniq(origins).forEach(function(origin){
          var $option = $('<option></option>');
          $option.text(origin);
          $option.appendTo($selectOrigin);
        });
        var $selectDestination = this.$el.find('#destination');
        _.uniq(destinations).forEach(function(destination){
          var $option = $('<option></option>');
          $option.text(destination);
          $option.appendTo($selectDestination);
        });
    }
});
