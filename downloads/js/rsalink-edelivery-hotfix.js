//  Script:         rsalink-edelivery-hotfix.js
//  Description:    This script dynamically updates edelivery.rsasecurity.com links to use HTTPS.
//  Location:       Downloads Documents
//  Author:         Jeff Shurtliff
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  05 Oct 2020
//  Version:        1.0.0

var jq = jQuery.noConflict();
jq(document).ready(function() {
  if (jivePlaceData[0].includes('Downloads')) {
    console.log('A downloads space has been identified.');
    if (location.href.includes('docs/DOC')) {
      console.log('A downloads document has been identified.');
      jq('.jive-link-external-small').each(function() {
        var updatedLink = jq(this).prop('href').replace('url=http%3A', 'url=https%3A');
        jq(this).prop("href", updatedLink);
        console.log("Updated a download hyperlink to use HTTPS.")
      });
    }
  }
});
