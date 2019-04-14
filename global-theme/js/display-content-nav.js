//  Script:     	display-content-nav.js
//  Location:       Website Header
//  Author:         Jeff Shurtliff
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  20 Dec 2018
//  Description:    Display the space navigation bar when on the content tab

window.onload = function() {
	if (jQuery(".j-browse-content")[0]){
		console.log("Content tab is visible.");
		jQuery('.j-placeNav').css("display", "inherit");								// Display the space navigation bar
		jQuery('.j-body-place #j-main #jive-alert').css("padding-top", "20px");			// Prevent overlap if a Jive Announcement exists
	} else {
		console.log("Content tab is not visible.");
	}
};