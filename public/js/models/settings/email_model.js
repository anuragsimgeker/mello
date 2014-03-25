Ember.Inflector.inflector.uncountable('Email');

var attr = DS.attr;

Mello.Email = DS.Model.extend({
    enabled: attr('boolean'),
    host: attr('string'),
    port: attr('number'),
    email: attr('string'),
    password: attr('string'),
    subject: attr('string'),
    body: attr('string')
});