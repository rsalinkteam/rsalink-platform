//  Script:         rsalink-announcement.js
//  Description:    The script in this file gets the home page announcements and display same announcements in other pages.
//  Location:       Website Header
//  Author:         Santhosh V
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  01 Nov 2019
//  Version:		1.0.2

var jq = jQuery.noConflict();
jq(document).ready(function() {
	jq('#jive-alert').hide();
	setTimeout(function(){
		var url = 'https://community.rsa.com';
		var homePage = "1002";
		if (placeID == homePage) {
			var container = jq('<div id="announcementContainer"></div>').insertBefore("#jive-body");
		} else {
			var container = jq('<div id="announcementContainer"></div>').insertBefore("#jive-widget-container");
		}
		var currentUrl = window.location.href;
		if(currentUrl !== url){
			jq(container).load(url+' #jive-alert', function(){
				if(this.innerHTML != ""){
					jq('#announcementContainer #jive-alert').show();
					jq('#announcementContainer #jive-alert #jive-alert-1').removeClass('jive-alert-type');
					jq('#announcementContainer #jive-alert').css('margin-bottom','10px');
				}else{
					jq('#jive-alert').show();
				}
			});
		}else{
			jq('#jive-alert').show();
		}
	}, 50);
});