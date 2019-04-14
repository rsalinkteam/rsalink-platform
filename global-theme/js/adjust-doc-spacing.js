//  Script:         adjust-doc-spacing.js
//  Location:       Website Header
//  Author:         Jeff Shurtliff
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  05 Dec 2018
//  Description:	Adjust the spacing for KB articles and for documents published by the RSA SecurID IDD team.

window.onload = function() {
	var spaceID = window.jive.global.containerBrowseId;
	var axmKB = "27246";
	var aaKB = "27245";
	var aaecKB = "68992";
	var archerKB = "27205";
	var bsafeKB = "27202";
	var dlpKB = "27203";
	var dpmKB = "27222";
	var dcsKB = "27227";
	var envisionKB = "27207";
	var fimKB = "27247";
	var iglKB = "27249";
	var nweKB = "27204";
	var nwlnKB = "27229";
	var nwoKB = "198705";
	var sidKB = "27248";
	var wtdKB = "27244";
	var csKB = "3018";
	var cloudAuthDOC = "42147";
	
	if (spaceID == axmKB || spaceID == aaKB || spaceID == aaecKB || spaceID == archerKB || spaceID == bsafeKB || spaceID == dlpKB || spaceID == dpmKB || spaceID == dcsKB || spaceID == envisionKB || spaceID == fimKB || spaceID == iglKB || spaceID == nweKB || spaceID == nwlnKB || spaceID == nwoKB || spaceID == sidKB || spaceID == wtdKB || spaceID == csKB || spaceID == cloudAuthDOC) {
		console.log("Adjusting spacing as document is a KB article or IDD document.");
		jQuery('.j-content-document .jive-rendered-content p').css("margin-bottom", "10px");
	}
};
