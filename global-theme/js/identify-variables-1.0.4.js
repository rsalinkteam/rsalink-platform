//	Script:			identify-variables-1.0.3.js
//	Author:			Jeff Shurtliff, Gene Ledbetter
//	Date:			5 June 2017
//	Description:	Identify the variables that are specific to Jive.

userID = window._jive_current_user.ID;
fullName = window._jive_current_user.displayName;
username = window._jive_current_user.username;
containerID = window.jive.global.containerID;
placeID = window.jive.global.containerBrowseId;

if(userID == "undefined" || userID < 1) {
	userID = 'null';
	userEmail = 'null';
} else {
	$j.ajax({
		type: 'GET',
		url: '/api/core/v3/people/@me',
		dataType: 'text',
		cache: false,
		success: function (data) {
			var cleanedJSON = JSON.parse(data.replace("throw 'allowIllegalResourceCall is false.';", ""));  // legacy error handling
			userEmail = []; // Global array
			$j(cleanedJSON).each(function () {
				userEmail.push(this.emails[0].value);
			});
			userEmail = String(userEmail);			
		},
		error: function (data) {
			console.log('Error getting userEmail!');
		}
	});
}


