var config = require('config');

// App Secret can be retrieved from the App Dashboard
const APP_SECRET = (process.env.FB_APP_SECRET) ? process.env.FB_APP_SECRET : config.get('appSecret');

// Arbitrary value used to validate a webhook
const VALIDATION_TOKEN = (process.env.FB_VALIDATION_TOKEN) ? (process.env.FB_VALIDATION_TOKEN) : config.get('validationToken');

// Generate a page access token for your page from the App Dashboard
const PAGE_ACCESS_TOKEN = (process.env.FB_PAGE_ACCESS_TOKEN) ? (process.env.FB_PAGE_ACCESS_TOKEN) : config.get('pageAccessToken');

module.exports = {
	APP_SECRET: APP_SECRET,
	VALIDATION_TOKEN: VALIDATION_TOKEN,
	PAGE_ACCESS_TOKEN: PAGE_ACCESS_TOKEN
}