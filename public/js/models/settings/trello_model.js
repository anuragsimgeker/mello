Ember.Inflector.inflector.uncountable('Trello');

var attr = DS.attr;

Mello.Trello = DS.Model.extend({
    enabled: attr('boolean'),
    appKey: attr('string'),
    appToken: attr('string'),
    boardId: attr('string'),
    listId: attr('string'),
    userId: attr('string'),
    labelKey: attr('string'),

    appTokenUrl: function() {
        return 'https://trello.com/1/authorize?key=' + this.get('appKey') + '&name=Mello&response_type=token&scope=read,write';
    }.property('appKey'),

    appBoardsUrl: function() {
        return 'https://trello.com/1/members/me/boards?fields=boards%2Cname&key' + this.get('appKey') + '&token=' + this.get('appToken');
    }.property('appKey', 'appToken'),

    appListsUrl: function() {
        return 'https://trello.com/1/boards/' + this.get('boardId') + '/lists?fields=name&key' + this.get('appKey') + '&token=' + this.get('appToken');
    }.property('appKey', 'appToken', 'boardId'),

    appUserUrl: function() {
        return 'https://trello.com/1/members/me?fields=id,username&key' + this.get('appKey') + '&token=' + this.get('appToken');
    }.property('appKey', 'appToken'),

    appLabelsUrl: function() {
        return 'https://trello.com/1/boards/' + this.get('boardId') + '?fields=labelNames&key' + this.get('appKey') + '&token=' + this.get('appToken');
    }.property('appKey', 'appToken', 'boardId')

});