//  Script:     	identify-employees.js
//  Location:       Website Header
//  Author:         Jeff Shurtliff
//  Last Editor:    Charan Rajakumar
//  Last Modified:  05 Dec 2018
//  Description:    Determine whether or not a user is an RSA employee based on the associated security groups.

var userID = window._jive_current_user.ID;
if(userID == "undefined" || userID < 1) {
	userType = 'ANONYMOUS';
	console.log('User is not logged in');
} else {
	var $j = jQuery.noConflict();
		$j.ajax({
			type: 'GET',
			url: '/api/core/v3/people/@me/securityGroups',
			dataType: 'text',
			cache: false,
			success: function (data) {
				var cleanedJSON = JSON.parse(data.replace("throw 'allowIllegalResourceCall is false.';", ""));
				jiveGroups = []; // Global array
				$j(cleanedJSON.list).each(function () {
					jiveGroups.push(this.name);
				});
				
				userType = 'Unknown';
				var groupName = 'RSA Employees';	
				
				function checkGroups ( id ) {
					for(i=0; i < jiveGroups.length; i++) {					
						if ( jiveGroups[i] == groupName ) {						
							return true;						
						}
					}				
					return false;
				}

				var checkUser = checkGroups(groupName);
				
				function onChangeView(mq) {
					if (mq.matches) { // If media query matches
						$j('#customLink4').css("visibility","visible"); // Show the RSA Employees main menu item on Hamburger icon(mobile view)
						$j('#customLink4').css("display",""); //When we flip from desktop view to mobile view RSA menu item should be available only in Hamburger button
					} else {
						$j('#customLink4').show(); // Show the RSA Employees main menu item on desktop view
					}
				}

				if (checkUser === true) {
					userType = 'Employee';
					var mq = window.matchMedia("(max-width: 40em)");
					onChangeView(mq); // Call listener function at run time
					mq.addListener(onChangeView);	
					console.log('User is an RSA employee');
				} else {				
					userType = 'Non-Employee';
					$j('#customLink4').hide();
					console.log('User is not an RSA employee');
				}
			},
			error: function (data) {
				console.log('Error getting jiveGroups!');
			}
		});
}