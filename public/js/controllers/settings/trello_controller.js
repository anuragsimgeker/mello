Mello.SettingsTrelloController = Ember.Controller.extend({
    actions: {
        save: function() {
            var saveButton = $('#trello-settings-save');
            saveButton.text('Saving..').attr('disabled', true);
            this.get('model').save().then(function() {
                saveButton.text('Save').attr('disabled', false);
            }, function() {
                saveButton.text('Save').attr('disabled', false);
            });
        }
    }
});