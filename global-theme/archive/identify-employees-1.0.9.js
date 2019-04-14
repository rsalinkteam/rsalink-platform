//	Script:			identify-employees-1.0.9.js
//	Author:			Jeff Shurtliff
//	Date:			3 June 2017
//	Description:	Determine whether or not a user is an RSA employee based on the associated security groups.

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

				if (checkUser === true) {
					userType = 'Employee';				
					console.log('User is an RSA employee');
				} else {				
					userType = 'Non-Employee';				
					console.log('User is not an RSA employee');
				}
			},
			error: function (data) {
				console.log('Error getting jiveGroups!');
			}
		});
}