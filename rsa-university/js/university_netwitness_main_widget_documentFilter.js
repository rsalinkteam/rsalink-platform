    /*
    Website:        RSA NetWitness Platform Training (https://community.rsa.com/community/training/netwitness)
    Iteration:      RSA University Redesign July 2019
    Scope:          RSA NetWitness Platform Training space
    Author:         Kamlesh Gupta
    Last Editor:    Mohit Verman
    Last Updated:   16 Sep 2019
    */

       var app = angular.module('ngchangeApp', ['angularjs-dropdown-multiselect']);
        var $j = jQuery.noConflict();
        var jive_widget_container_large = window.parent.$j(".jive-widget-container-large");
        var noDataFound = '<tr id="noDataFound" style="height: 25px; background-color: #eeeff0;"><td colspan="3" style="width: 18%; height: 89px; font-size: 28px; vertical-align: middle; text-align: center;">NO DATA FOUND</td></tr>';
        app.controller('ngApp', function($scope) {
            //Declare scope variable for Delivery Type drop-down option 
            //Filter DeliveryType
            $scope.deliveryType = [{"id":"ILTc","label":"Live Instructor Led Training - Classroom"},{"id":"ILTv","label":"Live Instructor Led Training - Virtual"},{"id":"ODC","label":"On-Demand - Self-Paced Classroom"},{"id":"ODLe","label":"On-Demand Learning"},{"id":"ODLab","label":"On-Demand Lab"}];
            //Declare scope variable for Role drop-down option
            $scope.roles = [{"id":"ADM","label":"Administrator"},{"id":"AN","label":"Analyst"},{"id":"BU","label":"Business User"},{"id":"CD","label":"Content Developer"},{"id":"EU","label":"End User"},{"id":"CEU","label":"Custom End User"},{"id":"HD","label":"Help Desk Technician"},{"id":"SE","label":"System Engineer"}];
            //Declare scope variable for Level drop-down option
            $scope.levels = [{"id":"CA","label":"Certified Associate"},{"id":"CAD","label":"Certified Administrator"},{"id":"CAN","label":"Certified Analyst"},{"id":"CP","label":"Certified Professional"}];
            //Declare scope variable for Version drop-down option
            $scope.versions = [];
            //Declare other temporary variables required to create the drop down
            $scope.tempDeliveryType = [];
            $scope.filterDeliveryType = []; 
            $scope.tempRole = [];
            $scope.filterRoles = []; 
            $scope.tempLevels = [];
            $scope.filterLevels = [];
            $scope.filterVersions = [];
            $scope.versionsLabel = [];
            
            $scope.getProductRowData = []; 
            $scope.getCourseRowData = [];
            $scope.courseInput = "";
            
            $scope.selectedDeliveryType = [];
            $scope.selectedRole = [];
            $scope.selectedLevel = [];
            $scope.selectedVersion = [];

            $scope.deliveryTypeSettings = {
                scrollableHeight: 'auto',
                scrollable: true,
                showCheckAll: false,
                showUncheckAll: false
            };
            $scope.roleSettings = {
                scrollableHeight: 'auto',
                scrollable: true,
                showCheckAll: false,
                showUncheckAll: false
            };
            $scope.levelSettings = {
                scrollableHeight: 'auto',
                scrollable: true,
                showCheckAll: false,
                showUncheckAll: false
            };
            $scope.versionSettings = {
                scrollableHeight: 'auto',
                scrollable: true,
                showCheckAll: false,
                showUncheckAll: false
                
            };
            $scope.deleveryTypeText = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: '--Select Delivery Type--',
                dynamicButtonTextSuffix: 'checked'
            };
            $scope.roleText = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: '--Select Role--',
                dynamicButtonTextSuffix: 'checked'
            };
            $scope.levelText = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: '--Select Level--',
                dynamicButtonTextSuffix: 'checked'
            };
            $scope.versionText = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: '--Select Version--',
                dynamicButtonTextSuffix: 'checked'
            };
            
            $scope.init = function () {                
                $scope.getProductRowData = jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("customers") == true}).parent('tr').filter(function() {return $(this).find("td:nth-child(2)").text().toLowerCase() == "nw";});
                console.log("$scope.getProductRowData" + $scope.getProductRowData);

                $scope.getVersionData = jive_widget_container_large.find(".secondaryMasterDocument tbody tr td:nth-child(2)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("nw") == true}).parent('tr').filter(function() {return $(this).find("td:nth-child(3)").text();});

                jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("customers") == true}).parent('tr').filter(function() {return $(this).find("td:nth-child(2)").text().toLowerCase() == "nw";}).find("a").attr("target", "_top");
                
                //Filter Role
                angular.forEach($scope.getProductRowData.find("td:nth-child(6)"), function (value, key) { 
                    $scope.tempRole.push($j(value).text()); 
                });
                $.each($scope.tempRole.toString().split(/[\s,]+/), function(i, el){
                    if($.inArray(el, $scope.filterRoles) === -1) $scope.filterRoles.push(el);
                });
                $scope.roles = $scope.roles.filter(function(val) {return $scope.filterRoles.find(function(e){return e == val.id;});});
                
                //Filter Levels
                angular.forEach($scope.getProductRowData.find("td:nth-child(8)"), function (value, key) { 
                    $scope.tempLevels.push($j(value).text());
                });

                $.each($scope.tempLevels.toString().split(/[\s,]+/), function(i, el){
                    if($.inArray(el, $scope.filterLevels) === -1) $scope.filterLevels.push(el);
                });                  
                $scope.levels = $scope.levels.filter(function(val) {return $scope.filterLevels.find(function(e){return e == val.id;});});


                //Filter Versions
                angular.forEach($scope.getVersionData.find("td:nth-child(3)"), function (value, key) { 
                    $scope.versionsLabel.push($j(value).text());
                });
                
                $.each($scope.versionsLabel.toString().split(/[\s,]+/), function(i, el){
                    if($.inArray(el, $scope.filterVersions) === -1) $scope.versions.push({id:el,label:el});
                });                

                jive_widget_container_large.find(".masterDocument tbody tr").remove();
                jive_widget_container_large.find(".masterDocument tbody").html($scope.getProductRowData);
                $scope.getCourseRowData = $scope.getProductRowData;
                
                //Hiding unwanted coulmn of masterDocument
                jive_widget_container_large.find(".masterDocument thead tr th:nth-child(1)").hide();
                jive_widget_container_large.find(".masterDocument thead tr th:nth-child(2)").hide();
                jive_widget_container_large.find(".masterDocument thead tr th:nth-child(5)").hide();
                jive_widget_container_large.find(".masterDocument thead tr th:nth-child(6)").hide();
                jive_widget_container_large.find(".masterDocument thead tr th:nth-child(8)").hide();
                jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").hide();
                jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(2)").hide();
                jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(5)").hide();
                jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(6)").hide();
                jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(8)").hide();
                jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(9)").hide();
                $j(".customMasterDocument").html($scope.getProductRowData);
                jive_widget_container_large.find(".masterDocument").hide();
                jive_widget_container_large.find(".secondaryMasterDocument").hide();
                jive_widget_container_large.find(".supportedVersions").hide();
                setTimeout(function(){ 
                    window.parent.$j(".customLoaderPage").parents(".jive-widget-documentviewwidget").remove();
                }, 1000);
                setTimeout(resizeMe,1000);
            };
            $scope.init();
            //Row Filter By DeliveryType
            $scope.filterByColumn = function(){
                $j(".customMasterDocument tr").show();
                $scope.courseInput = "";
                $scope.getCourseRowData = [];
                $j(".customMasterDocument tr").remove();
                var selectedDeliveryType = Object.keys($scope.selectedDeliveryType).map(function(key) {return $scope.selectedDeliveryType[key].id;});
                var selectedRole = Object.keys($scope.selectedRole).map(function(key) {return $scope.selectedRole[key].id;});
                var selectedLevel = Object.keys($scope.selectedLevel).map(function(key) {return $scope.selectedLevel[key].id;});
                var selectedVersion = Object.keys($scope.selectedVersion).map(function(key) {return $scope.selectedVersion[key].id;});
                console.log(selectedDeliveryType);
                console.log(selectedRole); 
                console.log(selectedLevel);
                if((selectedDeliveryType.length == 0) && (selectedRole.length == 0) && (selectedLevel.length == 0) && (selectedVersion.length == 0)){
                    $scope.getCourseRowData = $scope.getProductRowData;
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length == 0) && (selectedLevel.length == 0) && (selectedVersion.length == 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length == 0) && (selectedLevel.length == 0) && (selectedVersion.length > 0)){
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes('All'.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length > 0) && (selectedLevel.length == 0) && (selectedVersion.length == 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });             
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length == 0) && (selectedLevel.length > 0) && (selectedVersion.length == 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });                 
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length == 0) && (selectedLevel.length == 0) && (selectedVersion.length > 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes('All'.toLowerCase()) == true)})); 
                    });                 
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length == 0) && (selectedLevel.length > 0) && (selectedVersion.length == 0)){
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length == 0) && (selectedLevel.length > 0) && (selectedVersion.length > 0)){
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes('All'.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length > 0) && (selectedLevel.length == 0) && (selectedVersion.length == 0)){
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length > 0) && (selectedLevel.length == 0) && (selectedVersion.length > 0)){
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes('All'.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length > 0) && (selectedLevel.length > 0) && (selectedVersion.length == 0)){
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length > 0) && (selectedLevel.length > 0) && (selectedVersion.length > 0)){
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes('All'.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length > 0) && (selectedLevel.length > 0) && (selectedVersion.length == 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length > 0) && (selectedLevel.length > 0) && (selectedVersion.length > 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(0)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedVersion, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(9)").text().toLowerCase().split(/[\s,]+/).includes('All'.toLowerCase()) == true)})); 
                    });
                }

                if($scope.getCourseRowData.length == 0){
                    $j(".customMasterDocument").html(noDataFound);
                }else{
                    $j(".customMasterDocument").html($scope.getCourseRowData);
                }
                setTimeout(resizeMe,0);                                            
            };
            
            //Filter row by course, DT and Role
            $scope.searchCourse = function (event) {
                $j(".customMasterDocument tr").show();
                console.log($scope.getCourseRowData);
                var selectedDeliveryType = Object.keys($scope.selectedDeliveryType).map(function(key) {return $scope.selectedDeliveryType[key].id;});
                var selectedRole = Object.keys($scope.selectedRole).map(function(key) {return $scope.selectedRole[key].id;});
                var selectedLevel = Object.keys($scope.selectedLevel).map(function(key) {return $scope.selectedLevel[key].id;});
                if((selectedDeliveryType.length == 0) && (selectedRole.length == 0) && (selectedLevel.length == 0)){
                    $scope.getCourseRowData.filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf($(event.target).val().toLowerCase()) > -1);
                    });
                    if($scope.getCourseRowData.filter(function() {return $(this).css("display") === "table-row";}).length == 0){
                        if($j(".customMasterDocument").find("#noDataFound").length == 0){
                            $j(".customMasterDocument").append(noDataFound);    
                        }
                    }else{
                        $j(".customMasterDocument").find("#noDataFound").remove();
                    }  
                }else{
                    $j(".customMasterDocument tr").filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf($(event.target).val().toLowerCase()) > -1);
                    });
                    if($j(".customMasterDocument tr").filter(function() {return $(this).css("display") === "table-row";}).length == 0){
                        if($j(".customMasterDocument").find("#noDataFound").length == 0){
                            $j(".customMasterDocument").append(noDataFound);    
                        }
                    }else{
                        $j(".customMasterDocument").find("#noDataFound").remove();
                    } 
                }
                
                setTimeout(resizeMe,0);                                            
                
            };
        });