//  Script:     	archerDesignUrlRedirect.js
//  Location:       Website Header
//  Author:         Santhosh
//  Last Editor:    Santhosh
//  Last Modified:  16 July 2020
//  Description:    If a user belongs to the user group Partners: RSA Archer Design Partners and visits Archer Design Partners page, they should be redirected to Archer Design Partners Members page.

var userID = window._jive_current_user.ID;
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
		/*Updated New security groups name for RSA Employees (Employees: RSA (Badged))*/
		var groupName = "Partners: RSA Archer Design Partners";

		function checkGroups ( id ) {
			for(i=0; i < jiveGroups.length; i++) {
				if ( jiveGroups[i] == groupName ) {
					return true;
				}
			}
			return false;
		}

		var checkUser = checkGroups(groupName);
		var mainURL = window.location.href;
	    var archerURL = 'https://community.rsa.com/community/products/archer-grc/design-partners';
	    var archerURLDev = 'https://community.rsa.com/community/products/archer-grc/design-partners/overview';
		if ((checkUser === true && mainURL === archerURL) || (checkUser === true && mainURL === archerURLDev)) {
			window.location.href = "https://community.rsa.com/community/products/archer-grc/design-partners/members";
		}

		if (mainURL === archerURL || mainURL === archerURLDev) {
			setTimeout(function(){
                window.parent.$j(".customLoaderPage").parents(".jive-widget-documentviewwidget").remove();
            }, 500);
		}
	},
	error: function (data) {
		console.log('Error getting jiveGroups!');
	}
});