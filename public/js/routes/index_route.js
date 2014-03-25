Mello.IndexRoute = Ember.Route.extend({
    model: function() {
        var candidates = [];

        candidates.push({
            id: 1,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            url: '',
            isFirstItem: true
        });

        return candidates;
    }
});