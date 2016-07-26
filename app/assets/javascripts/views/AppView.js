var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#main', //This div has not yet been created

    render: function() {
        var content = $('#appView').html();

        this.$el.html(content);

        this.collection.each(function(flight) {
            var flightListView = new app.FlightListView({ model: flight });
            flightListView.render();
        });
    }
});
