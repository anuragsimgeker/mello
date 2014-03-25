Mello.IndexView = Ember.View.extend({
    didInsertElement: function() {
        $.Metro.initAll();
    }
});