//  Script:         drm-hover-boxes.js
//  Location:       Website Footer
//  Author:         Charan Rajakumar
//  Last Editor:    Charan Rajakumar
//  Last Modified:  09 Sep 2019
//  Description:    Hover box functionality for the RSA Digital Risk Management (DRM) space

// Define the valid space names where the script can be executed
var jq = jQuery.noConflict();
jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {  
    drmPageID = "244499";
} else {
    console.log("Invalid Jive Instance Found");
}

// Filtering functionality for the UDM page
if ( (placeID == drmPageID) ) {
    console.log("Identified the RSA Digital Risk Management space and enabled hover box functionality.");
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

jq('.drmProduct').each(function(){
    jq(this).click(function(){
        var boxClass = jq(this).attr('id');
        jq('.drmProduct').removeClass('gsBoxHighlight').removeClass('gsShrinkBox');
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