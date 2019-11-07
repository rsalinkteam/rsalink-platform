//  Script:         rsalink-userProfileDropdownModification.js
//  Description:    The script in this file modifies the text Your Content to My Content and Your places to My Places under the user profile dropdown.
//  Location:       Website Header
//  Author:         Santhosh V
//  Last Editor:    Santhosh V
//  Last Modified:  07 Nov 2019
//  Version:        1.0

var jq = jQuery.noConflict();
jq(document).ready(function(){
	jq("#j-satNav").click(function(){
		setTimeout(function(){
			jq(".js-nav-menu-scrollable").each(function(){
				var contentLink = jq(this).find('#jive-nav-link-user-content').children('span').html()
				if(contentLink === 'Your Content'){
					jq(this).find('#jive-nav-link-user-content').children('span').html('My Content')
				}
				var placesLink = jq(this).find('#jive-nav-link-user-places').children('span').html()
				if(placesLink === 'Your Places'){
					jq(this).find('#jive-nav-link-user-places').children('span').html('My Places')
				}
			})
    	}, 1000);
	});
})