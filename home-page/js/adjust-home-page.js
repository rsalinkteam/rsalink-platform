//  Script:         adjust-home-page.js
//  Location:       Website Footer
//  Author:         Jeff Shurtliff
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  05 Dec 2018
//  Description:    Adjust the layout of the Home Page widgets depending on whether or not a user is logged in.

jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {	
	homePageID = "1002";	
} else if (jiveInstance == "rsa-preview.jiveon.com") {	
	homePageID = "1002";	
} else if (jiveInstance == "rsa-preview2.jiveon.com") {	
	homePageID = "1002";	
} else {
	console.log("Invalid Jive Instance Found");
}

if (placeID == homePageID) {
	console.log("The home page is visible.");
	if (userID == "undefined" || userID < 1 || userID == "null" ) {
		console.log("User is not logged in. Register Now button will be displayed.");
		//jQuery(window).on('load', function() {
			jQuery('#jive-widget-container_1 .jive-widget-htmltextwidget').css("display", "inherit");	// Display the Register Now button
			jQuery('.j-home-welcome #jive-alert').css('margin-top', '-10px');	// Add additional margins to System Announcements to prevent overlap
			
			// Decrease whitespace above and below the Register Now button
			jQuery('#j-main').css("padding", "10px 20px 20px");
			jQuery('#jive-widget-container_1 .jive-widget-htmltextwidget').css("margin-bottom", "0px");
		//});
	} else {
		console.log("User is logged in. Adjusting layout due to missing Register Now button.");
		window.onload = function() {
			// jQuery('#jive-widget-container_1 .jive-widget-htmltextwidget').css("display", "none");
			// jQuery('#jive-widget-container_1 .jive-widget-htmltextwidget ~ .jive-widget-htmltextwidget').css("display", "inherit");
		};
	};
};
