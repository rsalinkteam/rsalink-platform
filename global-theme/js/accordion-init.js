//  Script:         accordion-init.js
//  Location:       Accordion Widget
//  Author:         David DeWald
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  19 Dec 2018
//  Description:    Initializes the accordion widget

//Enables console.log messages in Firefox 
function log(msg){
	if (typeof console === "undefined" || typeof console.log === "undefined") return false;
	console.log(msg);
}

// Loads in the setup document and parses the table information into the accordion.
function init(){
	if(!sourceURL) {
		log("No setup document given");
		return false;
	}
	var $j = jQuery.noConflict();
	// Load the setup document
	$j.ajax({
		type: 'GET',
		url: sourceURL,
		dataType: 'html',
		success: function (data) { 
			// Point to the table in the setup document
            
			var table = $j('table:first', data);
			if(table.length < 1) {
				alert('No table found in the setup document.  Please make sure the setup document is correctly formatted.');
				return false;
			}
			// Check to make sure there are at least two table rows
			var rows = $j('table:first > tbody > tr', data);
			if(rows.length < 1) {
				alert('The table does not have at least 1 row.  Please properly create the table in the setup document.');
				return false;
			} 
			// set variables for temporarily storing table data
			var tmpHTML = '';
			var collapseIncrementer = 1;

			// Loop over the remaining rows and place them in the accordion.
			for (var i = 0; i < rows.length; i++) {
				//Grabs the content in the table row.
				titleHtml = $j('td:eq(0)', rows[i]).html();
				bodyHtml = $j('td:eq(1)', rows[i]).html();
				
				tmpHTML += "<div class='panel " + colorStyle + "'> <h4 class='panel-heading panel-title' data-toggle='collapse' data-parent='#accordion' href='#collapse" + collapseIncrementer + "' onclick='resizeWidget()' style:''> <span class='glyphicon glyphicon-plus'></span> &nbsp;" + titleHtml + " </h4> <div id='collapse" + collapseIncrementer + "' class='panel-collapse collapse";
				if (typeof initState !== 'undefined') {
					if ( initState == 'Expanded' || ( i == 0 && ( initState == 'First' || initState == 'undefined' ) ) ) {
						tmpHTML += " in";
					}
				} else if ( i == 0 ) {
					tmpHTML += " in";
				}
				tmpHTML += " panel-body'> " + bodyHtml + " </div> </div>";

				collapseIncrementer++;
			} // end for loop
			
			// Append the loop HTML to the resultArea
			$j('#accordion').html(tmpHTML);

			//Removes lightbox effect from images and links that are served by the jive servlet.  Passes through non-jive servlet links.
			$j('#accordion').find('img').attr('onclick','if ($j(this).parent().prop("nodeName")=="A" && $j(this).parent().attr("href").indexOf("JiveServlet") >= 0){return false;}');
			$j('#accordion').find('a').attr('target','_blank');

			resizeWidget();
			resizeMe();
			
			$j(".collapse.in").each(function(){
				$j(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
			});
			
			// Toggle plus minus icon on show hide of collapse element
			$j(".collapse").on('show.bs.collapse', function(){
				$j(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
			}).on('hide.bs.collapse', function(){
				$j(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
			});
		},
		error: function (xhr, ajaxOptions, thrownError){ 
			alert("There was an error: Most likely reason is your sourceURL variable is not pointing to a valid document");
			return false;
		},
		complete: function(){
			resizeWidget();
		}
	});

} // end init function