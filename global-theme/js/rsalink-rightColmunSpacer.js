//  Script:         Dynamically adjusting the height of the right column to match the left column
//  Location:       Website Header
//  Author:         Santhosh V
//  Last Editor:    Santhosh V
//  Last Modified:  10 Apr 2019
//  Description:    The script in this file adjusts the height of the right column to match the left column's height.

var jq = jQuery.noConflict();
jq(window).load(function(){
	var containerHeight1 = jq('.jive-body-layout-l .jive-widget-container-large').height();
	var containerHeight2 = jq('.jive-body-layout-s .jive-widget-container-small').height();
	var containerHeight3 = jq('.jive-body-layout-l2 .jive-widget-container-large').height();
	var containerHeight4 = jq('.jive-body-layout-s1 .jive-widget-container-small').height();
	if(containerHeight2 > containerHeight1){
		jq('.jive-body-layout-s .jive-widget-container-small').height(containerHeight2 +'px');
	}else{
		jq('.jive-body-layout-s .jive-widget-container-small').height(containerHeight1 +'px');
	}
	if(containerHeight4 > containerHeight3){
		jq('.jive-body-layout-s1 .jive-widget-container-small').height(containerHeight4 +'px');
	}else{
		jq('.jive-body-layout-s1 .jive-widget-container-small').height(containerHeight3 +'px');
	}
});