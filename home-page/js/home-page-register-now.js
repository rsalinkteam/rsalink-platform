"use strict";
$(function(){
    /**
     * Author:			Jeff Shurtliff
	 * Last Modified: 	29 Aug 2017
	 * Description:		If the user isn't logged in, they see the Register Now button in the top-right.
     * 					If they are logged in, the button will not be present.	 
     **/

    var userid = window.parent._jive_current_user.ID;
    if(userid == "undefined" || userid < 1) {
		// User is not logged in
		$("#registerNowTable").show();
		setTimeout(function(){
            resizeMe();
        }, 500);
   	} else {
        // User is logged in        
        $("#registerNowTable").hide();
		$("#jive-widget-container_1 .jive-widget-htmltextwidget").hide();
		$("#jive-widget-container_1 .jive-widget-htmltextwidget ~ .jive-widget-htmltextwidget").show();
		// $("#jive-widget-container_1 .jive-widget-htmltextwidget").css("display", "none");
		// $("#jive-widget-container_1 .jive-widget-htmltextwidget ~ .jive-widget-htmltextwidget").css("display", "inherit");		
    }
	$("#iframe-login").on("click", function(){
        event.preventDefault();
        window.parent.document.getElementById('navLogin').click()
    });
});