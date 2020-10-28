//  Script:         rsalink-edelivery-hotfix.js
//  Description:    This script dynamically updates edelivery.rsasecurity.com links to use HTTPS.
//  Location:       Downloads Documents
//  Author:         Jeff Shurtliff
//  Last Editor:    Max Kimball
//  Last Modified:  28 Oct 2020
//  Version:        1.2

var jq = jQuery.noConflict();
jq(document).ready(function() {
  if (jivePlaceData[0].includes('Downloads') || jivePlaceData[0].includes('macOS')) {
    console.log('A downloads space has been identified.');
    if (location.href.includes('docs/DOC')) {
      console.log('A downloads document has been found.');
      jq('.j-rte-table table a').each(function() {
        var origLink = jq(this).prop('href');
        var notsecurePattern = /http%3A/;
        var wrongformatPattern = /https:\/\/community.rsa.com\/http/;
        var notSecure = notsecurePattern.test(origLink);
        var wrongFormat = wrongformatPattern.test(origLink);
        if (wrongFormat) {
          console.log('A download link starting with / has been found.');
          var updatedLink = jq(this).prop('href').replace(/^https:\/\/community.rsa.com\/http/, 'https');
          jq(this).prop("href", updatedLink);
          console.log("Updated a download hyperlink to replace appended community.rsa.com");
        }
        if (notSecure) {
          var updatedLink = jq(this).prop('href').replace('url=http%3A', 'url=https%3A');
          jq(this).prop("href", updatedLink);
          console.log("Updated a download hyperlink to use HTTPS.");
        }
      });
    }
  }
});