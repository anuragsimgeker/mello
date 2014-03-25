Mello.ApplicationRoute = Ember.Route.extend({
    setupController: function(controller) {
        // Preloading models
        this.store.find('trello', 'settings');
        this.store.find('email', 'settings');
    }
});