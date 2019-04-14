//  Script:         projects-toggle.js
//  Location:       Website Footer
//  Author:         Jeff Shurtliff
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  05 Dec 2018
//  Description:    Toggle the visibility of the View Document widgets on the GCS pages.

jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {	
	linkPageID = "140039";
	archerSPLPageID = "155581";
	identitySPLPageID = "155584";
	netwitnessSPLPageID = "155582";
	securidSPLPageID = "155583";
} else if (jiveInstance == "rsa-preview.jiveon.com") {	
	linkPageID = "140039";	
	archerSPLPageID = "155581";
	identitySPLPageID = "155584";
	netwitnessSPLPageID = "155582";
	securidSPLPageID = "155583";
} else if (jiveInstance == "rsa-preview2.jiveon.com") {	
	linkPageID = "140039";	
	archerSPLPageID = "155581";
	identitySPLPageID = "155584";
	netwitnessSPLPageID = "155582";
	securidSPLPageID = "155583";
} else {
	console.log("Invalid Jive Instance Found");
}

if ( (placeID == linkPageID) || (placeID == archerSPLPageID) || (placeID == identitySPLPageID) || (placeID == netwitnessSPLPageID) || (placeID == securidSPLPageID) ) {
	function projectFilter() {
		jQuery('.radio').change(function() {
			if (placeID == linkPageID) {
				console.log('User is viewing the RSA Link Team page');
				if (jQuery('#activeProjects').is(':checked')) {
					console.log('Active Projects are Displaying');
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "inherit");
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "none");
				} else if (jQuery('#completedProjects').is(':checked')) {
					console.log('Completed Projects are Displaying');
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "none");
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "inherit");
				}
			} else {
				console.log('User is viewing an SPL page');
				if (jQuery('#activeProjects').is(':checked')) {
					console.log('Active Projects are Displaying');
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget').css("display", "inherit");
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "none");
				} else if (jQuery('#completedProjects').is(':checked')) {
					console.log('Completed Projects are Displaying');
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget').css("display", "none");
					jQuery('#jive-widget-container_2 .jive-widget-documentviewwidget ~ .jive-widget-documentviewwidget').css("display", "inherit");
				}				
			}
		});	
	}
	projectFilter();
};