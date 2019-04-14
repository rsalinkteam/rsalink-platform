//	Script:			rsalinkteam-projects-toggle.js
//	Author:			Jeff Shurtliff
//	Date:			18 Dec 2017
//	Description:	Toggle the visibility of the View Document widgets on the RSA Link Team page.

jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {	
	linkPageID = "140039";	
} else if (jiveInstance == "rsa-preview.jiveon.com") {	
	linkPageID = "140039";	
} else if (jiveInstance == "rsa-preview2.jiveon.com") {	
	linkPageID = "140039";	
} else {
	console.log("Invalid Jive Instance Found");
}

if (placeID == linkPageID) {
	function projectFilter() {
		console.log('User is viewing the RSA Link Team page');
		jQuery('.radio').change(function() {
		  if (jQuery('#activeProjects').is(':checked')) {
			console.log('Active Projects are Displaying');
			jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "inherit");
			jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "none");
		  } else if (jQuery('#completedProjects').is(':checked')) {
			console.log('Completed Projects are Displaying');
			jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "none");
			jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "inherit");
		  }
		});	
	}
	projectFilter();
};







