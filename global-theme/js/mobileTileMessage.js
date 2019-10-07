//  Script:         Modify the tile header and default message when user is not logged in.
//  Location:       Website Header
//  Author:         Santhosh V
//  Last Editor:    Santhosh V
//  Last Modified:  7 OCT 2019
//  Description:    The script in this file modifies the default tile message and header when user is not logged in.
var jq = jQuery.noConflict();
jq(document).ready(function(){
	setTimeout(function(){
		var counter = 0;
		var userID = window._jive_current_user.ID;
        jq(".js-tile").each(function(){        	
			var tileHead = jq(this).find('.j-tile-header').children('h4').html()
			var placeID = window.jive.global.containerBrowseId;
			if(tileHead === 'Super List' && placeID === '1044'){
				jq(this).find('.j-tile-header').children('h4').html('Recent Discussions');
				jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
			}else if(tileHead === "Recent Service Notifications" && placeID === "27614"){
				jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
			}
		
			if(userID == "undefined" || userID < 1) {
				if(tileHead === 'Super List' && placeID === '201065'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '201338'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27605'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '68983'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27602'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}
				else if(tileHead === 'Super List' && placeID === '27601'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27593'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '184714'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27614'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27610'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27591'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}
			}else if((placeID === "184719")||(placeID === "184714")||(placeID === "201344")||(placeID === "201346")||(placeID === "201340")||(placeID === "201065")||(placeID === "201187")||(placeID === '201338')||(placeID === '201286')||(placeID === '201273')){
				jq(this).find('.noContent').html('There are currently no advisories at this time. Please check again later or follow this space to be notified of new content.');
			}
		})
    }, 1500);
});
window.onload = function(e){ 
	setTimeout(function(){
        var counter = 0;
		var userID = window._jive_current_user.ID;
        jq(".js-tile").each(function(){        	
			var tileHead = jq(this).find('.j-tile-header').children('h4').html()
			var placeID = window.jive.global.containerBrowseId;
			if(tileHead === 'Super List' && placeID === '1044'){
				jq(this).find('.j-tile-header').children('h4').html('Recent Discussions');
				jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
			}else if(tileHead === "Recent Service Notifications" && placeID === "27614"){
				jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
			}
		
			if(userID == "undefined" || userID < 1) {
				if(tileHead === 'Super List' && placeID === '201065'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '201338'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27605'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '68983'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('SERVICE NOTIFICATIONS');
					jq(this).find('.j-tile-header').children('h4.counter2').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27602'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.j-tile-header').children('h4.counter1').html('TECHNICAL ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}
				else if(tileHead === 'Super List' && placeID === '27601'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27593'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '184714'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27614'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27610'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SERVICE NOTIFICATIONS');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}else if(tileHead === 'Super List' && placeID === '27591'){
					jq(this).find('.j-tile-header').children('h4').addClass('counter'+counter);
					jq(this).find('.j-tile-header').children('h4.counter0').html('SECURITY ADVISORIES');
					jq(this).find('.noContent').html('This content is restricted. Please login to access or if you have already logged in, then contact RSA Customer Support for assistance.');
					counter++;
				}
			}else if((placeID === "184719")||(placeID === "184714")||(placeID === "201344")||(placeID === "201346")||(placeID === "201340")||(placeID === "201065")||(placeID === "201187")||(placeID === '201338')||(placeID === '201286')||(placeID === '201273')){
				jq(this).find('.noContent').html('There are currently no advisories at this time. Please check again later or follow this space to be notified of new content.');
			}
		})
    }, 1500);
}