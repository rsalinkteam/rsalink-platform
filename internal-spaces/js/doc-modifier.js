//	Script:			doc-modifier.js
//	Author:			Jeff Shurtliff
//	Date:			15 Jan 2018
//	Description:	Make changes to styling on specific documents.

// Define variables
jiveInstance = window.location.hostname;
docIdentifier = window.location.pathname;

if (jiveInstance == "community.rsa.com") {	
	gcs50Sample = '/docs/DOC-85535';
} else if (jiveInstance == "rsa-preview.jiveon.com") {	
	gcs50Sample = 'notFound';
} else if (jiveInstance == "rsa-preview2.jiveon.com") {	
	gcs50Sample = 'notFound';
} else {
	console.log("Invalid Jive Instance Found");
}

if (docIdentifier == gcs50Sample) {
	function hideDownloadLink() {
		console.log('User is viewing the GCS50 Sample Deck.  Disabling downloads.');
		jQuery('.j-design-latest div.jive-attachments').css("display", "none");
	}
	hideDownloadLink();
};







