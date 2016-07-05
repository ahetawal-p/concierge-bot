var config = require('config');

// App Secret can be retrieved from the App Dashboard
var APP_SECRET;

// Arbitrary value used to validate a webhook
var VALIDATION_TOKEN;

// Generate a page access token for your page from the App Dashboard
var PAGE_ACCESS_TOKEN;

var loadConfigs = function() {
	// App Secret can be retrieved from the App Dashboard
	APP_SECRET = (process.env.FB_APP_SECRET) ? process.env.FB_APP_SECRET : config.get('appSecret');

	// Arbitrary value used to validate a webhook
	VALIDATION_TOKEN = (process.env.FB_VALIDATION_TOKEN) ? (process.env.FB_VALIDATION_TOKEN) : config.get('validationToken');

	// Generate a page access token for your page from the App Dashboard
	PAGE_ACCESS_TOKEN = (process.env.FB_PAGE_ACCESS_TOKEN) ? (process.env.FB_PAGE_ACCESS_TOKEN) : config.get('pageAccessToken');
	
	if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN)) {
  		console.error("Missing config values");
  		process.exit(1);
	}
}

module.exports = {
	load: loadConfigs,
	APP_SECRET: APP_SECRET,
	VALIDATION_TOKEN: VALIDATION_TOKEN,
	PAGE_ACCESS_TOKEN: PAGE_ACCESS_TOKEN
}