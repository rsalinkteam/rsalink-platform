//  Script:         vsd-innovation-idea-validation.js
//  Location:       Website Footer
//  Author:         Kamlesh Gupta
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  15 Aug 2019
//  Description:    Functionality for the RSA VSD Innovation space

// Define the valid spaces where the script can be executed
var jq = jQuery.noConflict();
jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {  
  vsdPageID = "231294";
  demoPageID = "60180";
} else {
  console.log("Invalid Jive Instance Found");
}

// Idea valdation functionality for the RSA VSD Innovation page
if ( (placeID == vsdPageID) ) {
  console.log("Code is written for Categories validation");

  jq(window).load(function(){
    console.log("Code is written for Categories validation");
    jq("#js-publishbar-changePlace").hide();
    //jq(".j-publishbar").hide();
    /*jq(".j-type-row").hide();
    jq(".j-box-actions").hide();*/
    jq(".j-box-placeblog").hide();
    
    setTimeout(function(){
        jq(".j-rte-label").html("");
        jq(".j-rte-label").text("Please describe: 1) What is the idea? 2) How it will benefit the business?");
        /*jq('<label class="j-rte-label" style="margin-left: -5%;margin-top: -3%;">Hint: Please explain the idea/solution and how it will benefit the business</label>').insertAfter(".j-rte-label");*/
    }, 1000); 
    jq('<span class="jive-error-message">Please choose only one category</span>').insertAfter("#jive-compose-categories .j-compose-row-title");
      
    /*jq("#submitButton").click(function() {
      console.log(jq("#j-publishbar-categories").val());
      if(jq("#j-publishbar-categories").val() == ''){
        console.log(jq("#j-publishbar-categories").val());
        jq('<span class="jive-error-message">Please choose only one category</span>').insertAfter("#jive-compose-categories .j-compose-row-title");
      }else{
        console.log(jq("#j-publishbar-categories").val());
        jq(".j-category-1col").siblings(".jive-error-message").remove();
      }
    });*/
  });
}