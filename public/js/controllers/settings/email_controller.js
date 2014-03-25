Mello.SettingsEmailController = Ember.Controller.extend({
    actions: {
        save: function() {
            var saveButton = $('#email-settings-save');
            saveButton.text('Saving..').attr('disabled', true);
            this.get('model').save().then(function() {
                saveButton.text('Save').attr('disabled', false);
            }, function() {
                saveButton.text('Save').attr('disabled', false);
            });
        },

        setEmailHostYahoo: function() {
            this.get('model').set('host', 'smtp.mail.yahoo.com');
        },

        setEmailHostGmail: function() {
            this.get('model').set('host', 'smtp.gmail.com');
        },

        setEmailPortYahoo: function() {
            this.get('model').set('port', 587);
        },

        setEmailPortGmail: function() {
            this.get('model').set('port', 587);
        }
    }
});