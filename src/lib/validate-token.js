#!/usr/bin/env node
// mostly deprecated as api/session.ts handles this internally
// but i'm keeping it here just in case

const gal = require('google-auth-library');

const CLIENT_ID = '912270888098-jjnre816lsuhc5clj3vbcn4o2q7p4qvk.apps.googleusercontent.com';

const token = process.argv[2];
// make static on session
const client = new gal.OAuth2Client(CLIENT_ID, '', '');
client.verifyIdToken({
	idToken: token,
	audience: CLIENT_ID,
},
// Or, if multiple clients access the backend:
// [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
function (e, login) {
	if (e) return console.log(e);
	const payload = login?.getPayload() || {};
	// var userid = payload['sub'];
	console.log(JSON.stringify(payload));
	// If request specified a G Suite domain:
	// var domain = payload['hd'];
});
