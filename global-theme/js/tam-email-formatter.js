//  Script:         tam-email-formatter.js
//  Location:       Website Footer
//  Author:         Victor Laucas
//  Last Editor:    Victor Laucas
//  Last Modified:  14 May 19
//  Description:    Formats documents created from TAM emails in 360 pages


const browseIdThreeSixty = [202388,205761,207978,207979,207980,207982,207983,207984,207985,207987,207988,207989,207990,207991,207992,207993,207994,207995,207996,207997,207998,207999,211487,211850,214468,215603,221449,231606,232132,232134,232136,207989,207990,207991,207992,207993,207994,207995,207996,207997,207998,207999,211487,211850,214468,215603,221449,231606,232132,232134,232136]

if(jQuery.inArray(placeID, browseIdThreeSixty) >= 0) {
    const pTags = document.getElementsByTagName("p");
    function byeP() {
        for(ptag of pTags) {
            if(ptag.style.minHeight == "8pt") {
                ptag.remove();
            }
        }  
    }

    let looping = true
    while(looping) {
        for(ptag of pTags) {
            if(ptag.style.minHeight != "") {
                byeP();
            }
            else {
                looping = false;
            }
        }
    }
}