Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<nav class=\"horizontal-menu\">\n	<ul>\n		<li><h2 class=\"product-title\"><a href=\"#/\">Mello</a></h2></li>\n		<li>\n			<nav class=\"horizontal-menu compact\">\n				<ul>\n					<li><a href=\"#/\">Home</a></li>\n					<li>\n						<a href=\"#/settings/email\" class=\"dropdown-toggle\">Settings</a>\n						<ul class=\"dropdown-menu\" data-role=\"dropdown\">\n							<li><a href=\"#/settings/email\">Email</a></li>\n							<li><a href=\"#/settings/trello\">Trello</a></li>\n						</ul>\n					</li>\n				</ul>\n			</nav>\n		</li>\n	</ul>\n</nav>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n	            			");
  stack1 = helpers['if'].call(depth0, "tasksRunning", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	            			");
  stack1 = helpers.unless.call(depth0, "tasksRunning", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            			");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	            				<div class=\"listview-outlook\">\n		            				<div class=\"list marked\">\n								        <div class=\"list-content\">\n								        	");
  stack1 = helpers['if'].call(depth0, "emailRunning", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							        		");
  stack1 = helpers['if'].call(depth0, "trelloRunning", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			                                <div class=\"data inline\">\n			                                	<span class=\"list-title\">");
  stack1 = helpers._triageMustache.call(depth0, "firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "lastName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n				                                <span class=\"list-subtitle\">");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n				                                <span class=\"list-remark\">Ph: ");
  stack1 = helpers._triageMustache.call(depth0, "phone", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <a href=\"");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" target=\"_blank\">");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></span>\n			                                </div>\n								        </div>\n								    </div>\n		            			</div>\n	            			");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							        			<i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":icon :loading :icon-mail isEmailSuccess:success isEmailError:error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n							        		");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							        		<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("trelloCardUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">\n								        		<i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":icon :loading :icon-tablet isTrelloSuccess:success isTrelloError:error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n							        		</a>\n							        		");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	            				<div class=\"listview-outlook\">\n		            				<div class=\"list marked\">\n								        <div class=\"list-content\">\n								        	<div class=\"input-control text size3 on-left\" data-role=\"input-control\">\n							                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("firstName"),
    'type': ("text"),
    'placeholder': ("Firstname")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n							                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n							                </div>\n							                <div class=\"input-control text size3 on-left\" data-role=\"input-control\">\n							                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("lastName"),
    'type': ("text"),
    'placeholder': ("Lastname")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n							                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n							                </div>\n\n							                <div class=\"input-control text size5 on-left\" data-role=\"input-control\">\n							                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'type': ("text"),
    'placeholder': ("Email")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n							                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n							                </div>\n\n							                <div class=\"input-control text size2-5 on-left\" data-role=\"input-control\">\n							                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("phone"),
    'type': ("text"),
    'placeholder': ("Phone")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n							                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n							                </div>\n\n							                <div class=\"input-control text size3 on-left\" data-role=\"input-control\">\n							                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("url"),
    'type': ("text"),
    'placeholder': ("Url")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n							                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n							                </div>\n\n						                	<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":link isFirstItem:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCandidate", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n												<i class=\"icon-cancel-2\"></i>\n											</button>\n								        </div>\n								        \n								    </div>\n		            			</div>\n	            			");
  return buffer;
  }

  data.buffer.push("<div class=\"margin15\">\n	\n	<div class=\"panel\">\n	    <div class=\"panel-content\">\n	        <form class=\"app-index\">\n	            <fieldset>\n	                <legend>\n	                	<div class=\"subheader-secondary\"><i class=\"icon-loop on-left\"></i>Run Tasks\n		                	<small class=\"input-control switch text-muted on-right-more\" data-role=\"input-control\">\n	                            <label>\n	                                <span class=\"on-right-more on-left-more\"></span>\n	                            </label>\n	                        </small>\n                        </div>\n                	</legend>\n                	<div>\n                		<div class=\"subheader-tertiary\">\n                			<h2 class=\"fg-gray inline-block\">Candidates</h2>\n							<button class=\"command-button link candidate-add\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addCandidate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n								<i class=\"icon-plus-2\"></i>\n							</button>\n            			</div>\n\n            			");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            			<br/>\n	                    <p>\n	                    	<button id=\"runTasks\" class=\"button run\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "runTasks", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Run</button>\n	                    	<button id=\"resetForm\" class=\"hidden button link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Reset</button>\n	                    </p>\n                    </div>\n	            </fieldset>\n	        </form>\n	    </div>\n	</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["settings/email"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Enabled");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Disabled");
  }

  data.buffer.push("<div class=\"margin15\">\n	\n	<div class=\"panel\">\n	    <div class=\"panel-content\">\n	        <form class=\"email-settings\">\n	            <fieldset>\n	                <legend>\n	                	<div class=\"subheader-secondary\"><i class=\"icon-mail on-left\"></i>Email Settings\n		                	<small class=\"input-control switch text-muted on-right-more\" data-role=\"input-control\">\n	                            <label>\n	                                |\n	                                <span class=\"on-right-more on-left-more\">");
  stack1 = helpers['if'].call(depth0, "model.enabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n	                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'checked': ("model.enabled"),
    'type': ("checkbox"),
    'id': ("email-enabled")
  },hashTypes:{'checked': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'checked': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	                                <span class=\"check\"></span>\n	                            </label>\n	                        </small>\n                        </div>\n                	</legend>\n                	<div class=\"settings-container\">\n                		<div class=\"subheader-tertiary\"><h2 class=\"fg-gray\">Account</h2></div>\n		                \n		                <label for=\"email-host\">SMTP Host</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.host"),
    'type': ("text"),
    'placeholder': ("SMTP email server hostname"),
    'id': ("email-host")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			                    <button class=\"button-email-dropdown icon-pencil link dropdown-toggle\" tabindex=\"-1\" type=\"button\"></button>\n			                    <ul class=\"email-dropdown-menu dropdown-menu place-right\" data-role=\"dropdown\">\n									<li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEmailHostYahoo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\">Yahoo</a></li>\n									<li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEmailHostGmail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\">GMail</a></li>\n								</ul>\n		                </div>\n		                <label for=\"email-port\">SMTP Port</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.port"),
    'type': ("text"),
    'placeholder': ("SMTP email server port"),
    'id': ("email-port")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    	<button class=\"button-email-dropdown icon-pencil link dropdown-toggle\" tabindex=\"-1\" type=\"button\"></button>\n			                    <ul class=\"email-dropdown-menu dropdown-menu place-right\" data-role=\"dropdown\">\n									<li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEmailPortYahoo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\">Yahoo</a></li>\n									<li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setEmailPortGmail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\">GMail</a></li>\n								</ul>\n		                </div>\n		                <label for=\"email-email\">Email</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.email"),
    'type': ("text"),
    'placeholder': ("Full email address"),
    'id': ("email-email")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                </div>\n		                <label for=\"email-password\">Password</label>\n		                <div class=\"input-control password\" data-role=\"input-control\">\n		                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.password"),
    'type': ("password"),
    'placeholder': ("type password"),
    'autofocus': (""),
    'id': ("email-password")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'autofocus': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'autofocus': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-reveal\" tabindex=\"-1\" type=\"button\"></button>\n		                </div>\n                    </div>\n\n                    <div class=\"settings-container marginL5P\">\n                		<div class=\"subheader-tertiary\"><h2 class=\"fg-gray\">Template</h2></div>\n		                <label for=\"email-subject\">Subject</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.subject"),
    'type': ("text"),
    'placeholder': ("Email Subject"),
    'id': ("email-subject")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                </div>\n		                <label for=\"email-body\">Body Template</label>\n		                <div class=\"input-control textarea\" data-role=\"input-control\">\n		                    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("model.body"),
    'type': ("text"),
    'placeholder': ("Email Body"),
    'id': ("email-body")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n		                </div>\n                    </div>\n\n\n	                <br/><br/>\n                    <p>\n                    	<button id=\"email-settings-save\" class=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n                    	<!--<button class=\"button link\" type=\"reset\">Reset</button>-->\n                    </p>\n	            </fieldset>\n	        </form>\n	    </div>\n	</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["settings/trello"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Enabled");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Disabled");
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		                <label for=\"trello-token\">App Token</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.appToken"),
    'type': ("text"),
    'placeholder': ("Trello App Token"),
    'id': ("trello-token")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                    <blockquote>\n		                    	<small>Get the App Token \n		                    		<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.appTokenUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">Here</a>\n		                    	</small>\n							</blockquote>\n		                </div>\n		                <br/><br/>\n		                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "model.appKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		                <label for=\"trello-boardid\">Board ID</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.boardId"),
    'type': ("text"),
    'placeholder': ("Trello Board ID"),
    'id': ("trello-boardid")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                    <blockquote>\n		                    	<small>Get the Board ID \n		                    		<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.appBoardsUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">Here</a>\n		                    	</small>\n							</blockquote>\n		                </div>\n		                <br/><br/>\n		                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "model.appToken", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program11(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "model.appKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		                <label for=\"trello-listid\">List ID</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.listId"),
    'type': ("text"),
    'placeholder': ("Trello List ID"),
    'id': ("trello-listid")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                    <blockquote>\n		                    	<small>Get the List ID \n		                    		<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.appListsUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">Here</a>\n		                    	</small>\n							</blockquote>\n		                </div>\n		                <br/><br/>\n		                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "model.appKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		                <label for=\"trello-userid\">User ID</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.userId"),
    'type': ("text"),
    'placeholder': ("Trello User ID"),
    'id': ("trello-userid")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                    <blockquote>\n		                    	<small>Get the User ID \n		                    		<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.appUserUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">Here</a>\n		                    	</small>\n							</blockquote>\n		                </div>\n		                <br/><br/>\n		                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "model.appToken", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program18(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "model.appKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program19(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		                <label for=\"trello-labelKey\">Label Key</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.labelKey"),
    'type': ("text"),
    'placeholder': ("Trello Board Label Key"),
    'id': ("trello-labelKey")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                    <blockquote>\n		                    	<small>Get the Label Key \n		                    		<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.appLabelsUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">Here</a>\n		                    	</small>\n							</blockquote>\n		                </div>\n		                <br/><br/>\n		                ");
  return buffer;
  }

  data.buffer.push("<div class=\"margin15\">\n	\n	<div class=\"panel\">\n	    <div class=\"panel-content\">\n	        <form class=\"trello-settings\">\n	            <fieldset>\n	                <legend>\n	                	<div class=\"subheader-secondary\"><i class=\"icon-tablet on-left\"></i>Trello Settings\n		                	<small class=\"input-control switch text-muted on-right-more\" data-role=\"input-control\">\n	                            <label>\n	                                |\n	                                <span class=\"on-right-more on-left-more\">");
  stack1 = helpers['if'].call(depth0, "model.enabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n	                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'checked': ("model.enabled"),
    'type': ("checkbox"),
    'id': ("trello-enabled")
  },hashTypes:{'checked': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'checked': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	                                <span class=\"check\"></span>\n	                            </label>\n	                        </small>\n                        </div>\n                	</legend>\n                	<div class=\"settings-container\">\n	                	<label for=\"trello-key\">App Key</label>\n		                <div class=\"input-control text\" data-role=\"input-control\">\n		                	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.appKey"),
    'type': ("text"),
    'placeholder': ("Trello App Key"),
    'id': ("trello-key")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		                    <button class=\"btn-clear\" tabindex=\"-1\" type=\"button\"></button>\n		                    <blockquote>\n		                    	<small>Get the App Key \n		                    		<a href=\"https://trello.com/1/appKey/generate\" target=\"_blank\">Here</a>\n		                    	</small>\n							</blockquote>\n		                </div>\n		                <br/><br/>\n\n		                ");
  stack1 = helpers['if'].call(depth0, "model.appKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		                ");
  stack1 = helpers['if'].call(depth0, "model.appToken", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		                ");
  stack1 = helpers['if'].call(depth0, "model.boardId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		                ");
  stack1 = helpers['if'].call(depth0, "model.appToken", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		                ");
  stack1 = helpers['if'].call(depth0, "model.boardId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	                    <p>\n	                    	<button id=\"trello-settings-save\" class=\"button info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n	                    	<!--<button class=\"button link\" type=\"reset\">Reset</button>-->\n	                    </p>\n                    </div>\n	            </fieldset>\n	        </form>\n	    </div>\n	</div>\n</div>\n");
  return buffer;
  
});