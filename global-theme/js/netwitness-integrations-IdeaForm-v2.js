//  Script:         IdeaValidation.js
//  Location:       Website Footer
//  Author:         Kamlesh Gupta
//  Last Editor:    Kamlesh Gupta
//  Last Modified:  16 Sep 2019
//  Description:    ---

var jq = jQuery.noConflict();
jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {
 udmPageID = "150040";
 demoPageID = "60180";
   nwoPageID = "184424";
   archerTrainingPageID = "28706";
   netwitnessTrainingPageID = "27766";
   securidTrainingPageID = "36245";
} else if (jiveInstance == "rsa-preview.jiveon.com") {
 udmPageID = "150040";
 demoPageID = "60180";
 nwoPageID = "184424";
} else if (jiveInstance == "rsa-preview2.jiveon.com") {
 udmPageID = "150040";
 demoPageID = "60180";
 nwoPageID = "184424";
} else {
 console.log("Invalid Jive Instance Found");
}
// Filtering functionality for the UDM page
if ( (placeID == udmPageID) ) {
 console.log("Code is written for Categories validation");
 jq(window).load(function(){
   console.log("Code is written for Categories validation");
   setTimeout(function(){
       jq(".j-rte-label").html("");
       var myFrame = jq("#wysiwygtext_ifr").contents().find('body');
       myFrame.html('<table class="j-table jiveBorder" style="border: 1px solid #c6c6c6;" width="100%"> <tbody> <tr style="height: 24px;"> <td style="width: 380.909px; height:24px;"><span style="color: #000000; background-color: #ffffff;">1. <span style="color:#ff0000; font-size: 22px;">*</span>Vendor name</span></td> <td style="width: 394.545px;height: 24px;"></td> </tr> <tr style="height: 24px;"> <td style="width: 380.909px;height: 24px;"><span style="color: #000000; background-color: #ffffff;">2. <span style="color:#ff0000; font-size: 22px;">*</span>Product name</span></td> <td style="width:394.545px; height: 24px;"></td> </tr> <tr style="height: 24px;"> <td style="width:380.909px; height: 24px;"><span style="color: #000000; background-color: #ffffff;">3. <span style="color: #ff0000; font-size: 22px;">*</span>Other/previous names for this product</span></td> <td style="width: 394.545px; height: 24px;"></td> </tr> <tr style="height: 24px;"> <td style="width: 380.909px; height: 24px;"><span style="color: #000000; background-color: #ffffff;">4. <span style="color: #ff0000; font-size: 22px;">*</span>Is the 3rd-party product cloud-based or on-premises</span></td> <td style="width: 394.545px; height: 24px;"></td> </tr> <tr style="height: 24px;"> <td style="width: 380.909px;height: 24px;"> <p><span style="color: #000000;">5. Product version:</span></p> </td> <td style="width: 394.545px; height: 24px;"></td> </tr> <tr style="height: 50px;"><td style="width: 380.909px; height: 50px;"><span style="color: #000000;"><span style="background-color: #ffffff;">6. <span style="color: #ff0000; font-size: 22px;">*</span>Is this for event source collection and/or parsing (i.e. logs/SIEM)?&nbsp;</span><a href="https://bedfordjira.na.rsa.net/browse/RSALINK-7720#10" style="color: #000000; background-color: #ffffff; text-decoration: none;" title="Follow link">if no, skip to #10</a><span style="background-color: ffffff;">:</span></span></td> <td style="width: 394.545px; height: 50px;"></td> </tr> <tr style="height: 50px;"> <td style="width: 380.909px; height: 50px;"> <p><span style="color: #000000;">7. Collection method:&nbsp; syslog, snmp, sftp/file, odbc, other (describe)&nbsp;<span class="">[select one or more]</span>:</span></p> </td> <td style="width: 394.545px; height: 50px;"></td> </tr> <tr style="height: 75px;"> <td style="width: 380.909px; height: 75px;"> <p><span style="color: #000000;">8. Event category to be collected:&nbsp; logins, proxy logs, traffic logs, audit, all, other (describe)&nbsp;<span class="">[select one or more]</span>:</span></p> </td> <td style="width: 394.545px; height: 75px;"></td> </tr> <tr style="height: 50px;"> <td style="width: 380.909px; height: 50px;"> <p><span style="color: #000000;">9. Does the event source support CEF, LEEF or any other standard tag/value log format?&nbsp; If so, which:</span></p> </td> <td style="width: 394.545px; height: 50px;"></td> </tr> <tr style="height: 75px;"> <td style="width: 380.909px; height: 75px;"> <p><span style="color: #000000;">10. For integrations other than log/event source collection, please provide additional detail on exactly what to integrate between both products:</span></p> </td> <td style="width: 394.545px; height: 75px;"></td> </tr> <tr style="height: 126px;"> <td style="width: 380.909px; height: 126px;"> <p><span style="color: #000000;">11. Describe any use cases that may be achieved through this integration: Please also attach any relevant product documentation that would help to identify technical options for integration as well as any potential use cases.</span></p> </td> <td style="width: 394.545px; height: 126px;"></td> </tr> </tbody> </table>');
       //jq(".j-rte-label").text("Please describe: 1) What is the idea? 2) How it will benefit the business?");
       jq('<li class="js-tag j-tag j-btn-global"><span class="js-tag-text j-tag-text" style="max-width: 1046px;">netwitness</span><span class="remove" role="presentation" aria-hidden="true">X</span></li><li class="js-tag j-tag j-btn-global"><span class="js-tag-text j-tag-text" style="max-width: 1046px;">integrations</span><span class="remove" role="presentation" aria-hidden="true">X</span></li><li class="js-tag j-tag j-btn-global"><span class="js-tag-text j-tag-text" style="max-width: 1046px;">integration</span><span class="remove" role="presentation" aria-hidden="true">X</span></li><li class="js-tag j-tag j-btn-global"><span class="js-tag-text j-tag-text" style="max-width: 1046px;">community post</span><span class="remove" role="presentation" aria-hidden="true">X</span></li>').insertAfter('.j-tag-icon');
      jq(".jive-category-wrap").each(function(name, value) {
        catName = String(value).replace(/^.*j-catname\"\>/g, "").replace(/<.*$/g, "");
        console.log(catName);
        if(catName == "Integration Ideas") {
          console.log("Found it!");
          jq( ".j-category-input").attr('checked', true);
        }
        console.log('inn');
      });
   }, 1000);
   jq('<span class="jive-error-message">Please choose only one category</span>').insertAfter("#jive-compose-categories .j-compose-row-title");
 });
}