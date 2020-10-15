//  Script:         rsalink-edelivery-hotfix.js
//  Description:    This script dynamically updates edelivery.rsasecurity.com links to use HTTPS.
//  Location:       Downloads Documents
//  Author:         Jeff Shurtliff
//  Last Editor:    Max Kimball
//  Last Modified:  15 Oct 2020
//  Version:        1.1.1

var jq = jQuery.noConflict();
jq(document).ready(function() {
  if (jivePlaceData[0].includes('Downloads') || jivePlaceData[0].includes('macOS')) {
    console.log('A downloads space has been identified.');
    if (location.href.includes('docs/DOC')) {
      console.log('A downloads document has been identified.');
      jq('.jive-link-external-small').each(function() {
        var origLink = jq(this).prop('href');
        var pattern = /http%3A/;
        var notSecure = pattern.test(origLink);
        if (notSecure) {
          var updatedLink = jq(this).prop('href').replace('url=http%3A', 'url=https%3A');
          jq(this).prop("href", updatedLink);
          console.log("Updated a download hyperlink to use HTTPS.");
        }
      });
    }
  }
});
