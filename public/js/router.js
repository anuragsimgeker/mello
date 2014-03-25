Mello.Router.map(function() {
	this.resource('settings', function() {
		this.route('email');
		this.route('trello');
	});
});