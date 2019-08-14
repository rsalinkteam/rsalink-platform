//  Script:         rsa-university-gs-training.js
//  Location:       Website Footer
//  Author:         Kamlesh Gupta
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  14 Aug 2019
//  Description:    Functionality for the RSA Global Services Training spaces

// Define the valid spaces where the script can be executed
var jq = jQuery.noConflict();
jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {	
	gsTrainingPageID = "227556";
    archerTrainingPageID = "28706";
    netwitnessTrainingPageID = "27766";
    securidTrainingPageID = "36245";
} else if (jiveInstance == "rsa-preview.jiveon.com") {	
    gsTrainingPageID = "181122";
    archerTrainingPageID = "28706";
    netwitnessTrainingPageID = "27766";
    securidTrainingPageID = "36245";
} else if (jiveInstance == "rsa-preview2.jiveon.com") {	
    gsTrainingPageID = "182180";
    archerTrainingPageID = "28706";
    netwitnessTrainingPageID = "27766";
    securidTrainingPageID = "36245";
} else {
	console.log("Invalid Jive Instance Found");
}

// Filtering functionality for the tables
if ( (placeID == gsTrainingPageID) ) {
	console.log("Identified a space with table filtering enabled.");
	jq(window).load(function(){
	setTimeout(function(){
		jq('.jive-widget').each(function(){
			if(jq(this).find('table').hasClass('iglCourseTable')){
				jq(this).hide();
				jq(this).addClass('hiddenContent');
			}
			if(jq(this).find('table').attr('id') === 'trainingFilterFeature'){
				jq(this).hide();
				jq(this).addClass('hiddenContent');
			}
		});
	}, 1000);
});

jq('.gsProduct').each(function(){
	jq(this).click(function(){
		var boxClass = jq(this).attr('id');
		jq('.gsProduct').removeClass('gsBoxHighlight').removeClass('gsShrinkBox');
		jq('.gsChooseBox').addClass('boxHover');
		if(jq('.'+boxClass).is(":visible") === true){
			jq('.'+boxClass).hide();
			jq(this).removeClass('gsBoxHighlight');
			jq(this).parents('.jive-widget-container').find('.hiddenContent').hide();
		}else{
			jq('.course').hide();
			jq('.'+boxClass).show();
			jq(this).addClass('gsBoxHighlight');
			jq(this).find('.gsChooseBox').removeClass('boxHover');
			if(boxClass === 'onBoardingId'){
				jq(this).siblings().addClass('gsShrinkBox');
			}else if(boxClass === 'coreSkillsId'){
				jq(this).siblings().addClass('gsShrinkBox');
			}else{
				jq(this).siblings().addClass('gsShrinkBox');
			}
			jq(this).parents('.jive-widget-container').find('.hiddenContent').show();
		}
	});
});
}