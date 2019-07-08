//  Script:         tam-email-formatter.js
//  Location:       Website Footer
//  Author:         Victor Laucas
//  Last Editor:    Victor Laucas
//  Last Modified:  08 Jul 2019
//  Description:    Formats documents created from TAM emails in 360 pages

function remove_email_garbage() {
    const pTags = document.getElementsByClassName("jive-rendered-content")[0].getElementsByTagName("p");
    const regex = new RegExp("<span>&lt;[^\s].*?&gt;</span>");
    for(ptag of pTags) {
        ptag.innerHTML = ptag.innerHTML.replace(regex, "");
    }
}


const browseIdThreeSixty = [202388,205761,207978,207979,207980,207982,207983,207984,207985,207987,207988,207989,207990,207991,207992,207993,207994,207995,207996,207997,207998,207999,211487,211850,214468,215603,221449,231606,232132,232134,232136,207989,207990,207991,207992,207993,207994,207995,207996,207997,207998,207999,211487,211850,214468,215603,221449,231606,232132,232134,232136];
if(browseIdThreeSixty.indexOf(Number(placeID)) > -1) {
    console.log('Identified browse id ', placeID, " as a 360 page");
    
    
    
    const pTags = document.getElementsByClassName("jive-rendered-content")[0].getElementsByTagName("p");
    if(pTags.length > 0) {
        let retries = 0;

        while(retries <= 10) {
            for(ptag of pTags) {
                if(ptag.style.minHeight == "8pt") {
                    ptag.remove();
                }
            }
            retries++
        }

        remove_email_garbage();
    } else {
        console.log("There are no p tags with the class name of jive-rendered-content. End of script");
    }
        
}
