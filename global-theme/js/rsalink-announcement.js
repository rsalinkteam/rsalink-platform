//  Script:         Display Home page announcements in other pages.
//  Location:       Website Header
//  Author:         Santhosh V
//  Last Editor:    Santhosh V
//  Last Modified:  20 Dec 2018
//  Description:    The script in this file gets the home page announcements and display same announcements in other pages.
var jq = jQuery.noConflict();
var url = 'https://community.rsa.com';
jq(document).ready(function() {
	jq('<div id="announcementContainer"></div>').insertBefore("#jive-widget-container");
	if(document.getElementById("jive-alert")!= null){
	  jq('#announcementContainer').hide();
	}else{
	  jq('#announcementContainer').load(url+' #jive-alert');
	}
});