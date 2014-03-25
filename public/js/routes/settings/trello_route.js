Mello.SettingsTrelloRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('trello', 'settings');
    }
});