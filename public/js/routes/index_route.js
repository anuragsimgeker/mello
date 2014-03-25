Mello.IndexRoute = Ember.Route.extend({
    model: function() {
        var candidates = [];

        candidates.push({
            id: 1,
            firstName: 'Anurag',
            lastName: 'Simgeker',
            email: 'anuragsimgeker@gmail.com',
            phone: '123',
            url: 'http://',
            isFirstItem: true
        });

        return candidates;
    }
});