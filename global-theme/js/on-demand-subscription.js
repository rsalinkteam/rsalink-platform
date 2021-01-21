//  Script:         on-demand-subscription.js
//  Location:       Website Footer
//  Author:         Charan Rajakumar
//  Last Editor:    Charan Rajakumar
//  Last Modified:  26 Nov 2019
//  Description:    Complete fixes to the RSA Ideas for the RSA NetWitness Platform "Submit an Idea" functionality - RSALINK-8008

var jq = jQuery.noConflict();
jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {
 udmPageID = "27011";
 demoPageID = "60180";
   nwoPageID = "184424";
   archerTrainingPageID = "28706";
   netwitnessTrainingPageID = "27766";
   securidTrainingPageID = "36245";
} else if (jiveInstance == "rsa-preview.jiveon.com") {
 udmPageID = "27011";
 demoPageID = "60180";
 nwoPageID = "184424";
} else if (jiveInstance == "rsa-preview2.jiveon.com") {
 udmPageID = "27011";
 demoPageID = "60180";
 nwoPageID = "184424";
} else {
 console.log("Invalid Jive Instance Found");
}
// Filtering functionality for the UDM page
if ( (placeID == udmPageID) ) {
  var $j = jQuery.noConflict();
  var jive_widget_container_large = window.parent.$j(".jive-rendered-content");
  function localStorageSave() {
    localStorage.setItem('ods', 'ODS');
    localStorage.removeItem('value');
  }
  $j(".archer").click(localStorageSave);
  $j(".securid").click(localStorageSave);
  $j(".securid1").click(localStorageSave);
  $j(".igl").click(localStorageSave);
  $j(".nw").click(localStorageSave);
}