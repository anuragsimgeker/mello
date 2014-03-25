Mello.IndexController = Ember.Controller.extend({

    needs: ["settingsEmail", "settingsTrello"],

    actions: {

        addCandidate: function() {
            var model = this.get('model'),
                length = model.length;
            this.get('model').pushObject({
                id: ++length,
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                url: '',
                tasksRunning: false,
                isTrelloSuccess: false,
                isEmailSuccess: false,
                isTrelloError: false,
                isEmailError: false,
                trelloCardUrl: null
            });
        },

        removeCandidate: function(model) {
            if (this.get('model').indexOf(model) === 0) { // Don't remove the only candidate
                return;
            }
            this.get('model').removeObject(model);
        },

        runTasks: function() {


            var postData = {},
                store = this.store,
                isTrelloModelLoaded = store.recordIsLoaded(Mello.Trello, 'settings'),
                isEmailModelLoaded = store.recordIsLoaded(Mello.Email, 'settings');

            jQuery('button#runTasks').attr('disabled', true);
            jQuery('button.candidate-add').attr('disabled', true);
            jQuery('button#resetForm').removeClass('hidden');

            this.get('model').forEach(function(candidate) {

                Ember.set(candidate, 'tasksRunning', true);
                Ember.set(candidate, 'emailRunning', false);
                Ember.set(candidate, 'trelloRunning', false);

                postData = {
                    firstName: candidate.firstName,
                    lastName: candidate.lastName,
                    email: candidate.email,
                    phone: candidate.phone,
                    url: candidate.url
                };

                if (isEmailModelLoaded && store.getById('email', 'settings').get('enabled')) {

                    Ember.set(candidate, 'emailRunning', true);

                    $.ajax({
                        type: "POST",
                        url: "/email/send",
                        data: JSON.stringify(postData),
                        contentType: "application/json",
                        dataType: "json",
                        success: function(data) {
                            Ember.set(candidate, 'isEmailSuccess', true);
                        },
                        failure: function(errMsg) {
                            Ember.set(candidate, 'isEmailError', true);
                        },
                        statusCode: {
                            500: function() {
                                Ember.set(candidate, 'isEmailError', true);
                            }
                        }
                    });


                }

                if (isTrelloModelLoaded && store.getById('trello', 'settings').get('enabled')) {

                    Ember.set(candidate, 'trelloRunning', true);

                    $.ajax({
                        type: "POST",
                        url: "/trello/newCard",
                        data: JSON.stringify(postData),
                        contentType: "application/json",
                        dataType: "json",
                        success: function(data) {
                            Ember.set(candidate, 'trelloCardUrl', data.url);
                            Ember.set(candidate, 'isTrelloSuccess', true);
                        },
                        failure: function(errMsg) {
                            Ember.set(candidate, 'isTrelloError', true);
                        },
                        statusCode: {
                            500: function() {
                                Ember.set(candidate, 'isTrelloError', true);
                            }
                        }
                    });
                }

            });


        },

        resetForm: function() {
            this.get('model').clear();
            this.get('model').pushObject({
                id: 1,
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                url: '',
                isFirstItem: true
            });
            jQuery('button.candidate-add').attr('disabled', false);
            jQuery('button#runTasks').attr('disabled', false);
            jQuery('button#resetForm').addClass('hidden');
        }
    }
});