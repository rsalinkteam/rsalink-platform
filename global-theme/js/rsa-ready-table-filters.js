//  Script:         rsa-ready-table-filters.js
//  Location:       Website Footer
//  Author:         Charan Rajakumar
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  15 Aug 2019
//  Description:    Enable the ability to filter Jive tables with a free-form search field

// Define the valid space names where the script can be executed
var jq = jQuery.noConflict();
jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {
    rsaReadyStagingPageID = "30114";
} else {
    console.log("Invalid Jive Instance Found");
}

if ((placeID === rsaReadyStagingPageID)){
    // Filtering functionality for the RSA NetWitness Platform Known Issues page
    function rsaReadySpaceFilter() {
        console.log("Identified a space with table filtering enabled.");
        var filterFocus = "0";

        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("tableFilter");
        filter = input.value.toUpperCase();
        table = document.getElementsByClassName("filteredReadyTable")[0];
        mainTable = document.getElementsByClassName("filteredReadyTable")[0];
        tr = mainTable.getElementsByTagName("tr");
        
        // Loop through all table rows, and hide those who don't match the search query
        console.log('filterFocus in main function: ' + filterFocus);
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[filterFocus];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
        if (input.value == '') {
            showPage(1);
        }
    }

    // Returns an array of maxLength (or less) page numbers
    // where a 0 in the returned array denotes a gap in the series.
    // Parameters:
    //   totalPages:     total number of pages
    //   page:           current page
    //   maxLength:      maximum size of returned array
    function getPageList(totalPages, page, maxLength) {
        if (maxLength < 5) throw "maxLength must be at least 5";

        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
        if (totalPages <= maxLength) {
            // no breaks in list
            return range(1, totalPages);
        }
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            // no break on left of page
            return range(1, maxLength - sideWidth - 1)
                .concat([0])
                .concat(range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            // no break on right of page
            return range(1, sideWidth)
                .concat([0])
                .concat(range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }
        
        // Breaks on both sides
        return range(1, sideWidth)
            .concat([0])
            .concat(range(page - leftWidth, page + rightWidth))
            .concat([0])
            .concat(range(totalPages - sideWidth + 1, totalPages));
    }


    var numberOfItems = $j(".filteredReadyTable tbody tr").length;
    var limitPerPage = 20;

    // Total pages rounded upwards
    var totalPages = Math.ceil(numberOfItems / limitPerPage);

    / Number of buttons at the top, not counting prev/next,
    // but including the dotted buttons.
    // Must be at least 5:
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;
        currentPage = whichPage;
        $j(".filteredReadyTable  tbody tr").hide()
            .slice((currentPage - 1) * limitPerPage,
                currentPage * limitPerPage).show();
        
        // Replace the navigation items (not prev/next):            
        $j(".pagination li").slice(1, -1).remove();
        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $j("<li>").addClass("page-item")
                .addClass(item ? "current-page" : "disabled")
                .toggleClass("active", item === currentPage).append(
                    $j("<a>").addClass("page-link").attr({
                        href: "javascript:void(0)"
                    }).text(item || "...")
                ).insertBefore("#next-page");
        });
        
        // Disable prev/next when at first/last page:
        $j("#previous-page").toggleClass("disabled", currentPage === 1);
        $j("#next-page").toggleClass("disabled", currentPage === totalPages);
        return true;
    }

    $j(function() {
        // Number of items and limits the number of items per page
        //$j('.filteredReadyTable').parent('div').append('<div><label>Show:</label></div>');
        $j('.filteredReadyTable').parent('div').append('<div style="height: 6px;"><label>Show:</label><select class="per-page-select" id="page-select"><option selected="selected" value="10">10</option><option value="20" selected>20</option><option value="50">50</option><option value="100">100</option></select></div>');
        $j('.filteredReadyTable').parent('div').append('<div class="pagination"></div>');
        $j(".filteredReadyTable thead th:nth-last-child(2)").addClass('displayNone');
        $j(".filteredReadyTable thead th:nth-last-child(1)").addClass('displayNone');
        $j(".filteredReadyTable tbody td").addClass('rowAlign');
        $j(".filteredReadyTable tbody tr").each(function(index, value) {

            $j(value).each(function(index1, value1) {
                $j($j(value1).find("td")[2]).addClass('displayNone');
                $j($j(value1).find("td")[3]).addClass('displayNone');
            });

        });

        // Include the prev/next buttons:
        $j(".pagination").append(
            $j("<li>").addClass("page-item").attr({
                id: "previous-page"
            }).append(
                $j("<a>").addClass("page-link").attr({
                    href: "javascript:void(0)"
                }).text("Prev")
            ),
            $j("<li>").addClass("page-item").attr({
                id: "next-page"
            }).append(
                $j("<a>").addClass("page-link").attr({
                    href: "javascript:void(0)"
                }).text("Next")
            )
        );
        
        // Show the page links
        $j(".filteredReadyTable").show();
        showPage(1);

        // Use event delegation, as these items are recreated later    
        $j(document).on("click", ".pagination li.current-page:not(.active)", function() {
            return showPage(+$j(this).text());
        });
        $j("#next-page").on("click", function() {
            return showPage(currentPage + 1);
        });

        $j("#previous-page").on("click", function() {
            return showPage(currentPage - 1);
        });

        $j("#page-select").change(function() {
            var numberOfItems = $j(".filteredReadyTable tbody tr").length;
            var limitPerPage = $j("#page-select").val();
            
            // Total pages rounded upwards
            var totalPages = Math.ceil(numberOfItems / limitPerPage);
            
            // Number of buttons at the top, not counting prev/next,
            // but including the dotted buttons.
            // Must be at least 5:
            var paginationSize = 7;
            var currentPage;

            function showPage(whichPage) {
                if (whichPage < 1 || whichPage > totalPages) return false;
                currentPage = whichPage;
                $j(".filteredReadyTable  tbody tr").hide()
                    .slice((currentPage - 1) * limitPerPage,
                        currentPage * limitPerPage).show();
                
                        // Replace the navigation items (not prev/next):            
                $j(".pagination li").slice(1, -1).remove();
                getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                    $j("<li>").addClass("page-item")
                        .addClass(item ? "current-page" : "disabled")
                        .toggleClass("active", item === currentPage).append(
                            $j("<a>").addClass("page-link").attr({
                                href: "javascript:void(0)"
                            }).text(item || "...")
                        ).insertBefore("#next-page");
                });
                
                // Disable prev/next when at first/last page:
                $j("#previous-page").toggleClass("disabled", currentPage === 1);
                $j("#next-page").toggleClass("disabled", currentPage === totalPages);
                return true;
            }

            // Include the prev/next buttons:
            $j(".pagination").append(
                $j("<li>").addClass("page-item").attr({
                    id: "previous-page"
                }).append(
                    $j("<a>").addClass("page-link").attr({
                        href: "javascript:void(0)"
                    }).text("Prev")
                ),
                $j("<li>").addClass("page-item").attr({
                    id: "next-page"
                }).append(
                    $j("<a>").addClass("page-link").attr({
                        href: "javascript:void(0)"
                    }).text("Next")
                )
            );
            
            // Show the page links
            $j(".filteredReadyTable").show();
            showPage(1);

            // Use event delegation, as these items are recreated later    
            $j(document).on("click", ".pagination li.current-page:not(.active)", function() {
                return showPage(+$j(this).text());
            });
            $j("#next-page").on("click", function() {
                return showPage(currentPage + 1);
            });

            $j("#previous-page").on("click", function() {
                return showPage(currentPage - 1);
            });

        });

    });
}