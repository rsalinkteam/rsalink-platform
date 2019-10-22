//  Script:         Display Home page announcements in other pages.
//  Location:       Website Header
//  Author:         Santhosh V
//  Last Editor:    Santhosh V
//  Last Modified:  22 Oct 2019
//  Description:    The script in this file gets the home page announcements and display same announcements in other pages.
var jq = jQuery.noConflict();
jq(document).ready(function() {
	jq('#jive-alert').hide();
	setTimeout(function(){
		var url = 'https://community.rsa.com';
		var container = jq('<div id="announcementContainer"></div>').insertBefore("#jive-widget-container");
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