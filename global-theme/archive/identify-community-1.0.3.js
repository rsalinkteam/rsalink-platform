//  Script:         identify-community.js
//  Author:         Jeff Shurtliff
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  05 Dec 2018
//  Description:    Identify the Place Name and define it within a global variable.

var placeID = window.jive.global.containerBrowseId;
var placeURL = '/api/core/v3/places/' + placeID;

var $j = jQuery.noConflict();
	$j.ajax({
		type: 'GET',
		url: placeURL,
		dataType: 'json',
		contentType: 'application/json',
		cache: false,
		success: function (data) {
			var cleanedJSON = JSON.stringify(data).replace("throw 'allowIllegalResourceCall is false.';", "");  // legacy error handling
			cleanedJSON = JSON.parse(cleanedJSON);
			jivePlaceData = []; // Global array
			$j(cleanedJSON).each(function () {
				jivePlaceData.push(this.name);
			});
			communityName = String(jivePlaceData);
			console.log('Community Name: ' + communityName);
		},
		error: function (data) {
			console.log('Error getting jivePlaceData!');
		}
	});