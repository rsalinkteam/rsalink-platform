 /*
Website:        RSA University Global Services Core Skills Training (https://community.rsa.com/community/training/internal/global-services/core-skills)
Iteration:      RSA University Redesign July 2019
Scope:          RSA University Global Services Core Skills Training space
Author:         Kamlesh Gupta
Last Editor:    Mohit Verman
Last Updated:   09 Sep 2019
*/
        var app = angular.module('ngMasterApp', ['angularjs-dropdown-multiselect']);
        var $j = jQuery.noConflict();
        var jive_widget_container_large = window.parent.$j(".jive-widget-container-large");
        var noDataFound = '<tr id="noDataFound" style="height: 25px; background-color: #eeeff0;"><td colspan="2" style="width: 18%; height: 89px; font-size: 28px; vertical-align: middle; text-align: center;">NO DATA FOUND</td></tr>';
        
        app.controller('ngApp', function($scope) {
            //$scope.deliveryType = ["ILTc","ILTv","ODC","ODLe","ODLab"];
            $scope.rsaProduct = [{"value":"arch","text":"RSA Archer Suite"},{"value":"aa","text":"RSA Fraud & Risk Intelligence Suite"},{"value":"igl","text":"RSA Identity Governance & Lifecycle"},{"value":"nw","text":"RSA NetWitness Platform"},{"value":"sida","text":"RSA SecurID Access"}];
            $scope.getProductRowData = [];            
            $scope.getAudienceRowByCS = [];
            $scope.getAudienceRowByPS = [];
            $scope.getAudienceRowByIT = [];
            $scope.getAudienceRowByES = []; 
            $scope.csTab = true;
            $scope.psTab = false;
            $scope.itTab = false;
            $scope.esTab = false;
            $scope.customMasterDocumentTable = false;
            $scope.knowAboutProduct = false;
            $scope.filterRowDetails = false;
            $scope.selectedAudienceData = "";
            $scope.getCourseRowData = "";
            $scope.arch = false;
            $scope.aa = false;
            $scope.nw = false;
            $scope.igl = false;
            $scope.sida = false;
            $scope.learningAcademy = false;
            $scope.linkSeries = false;
            $scope.ESjobSkillDesigners = false;
            $scope.EStoolDesigners = false;
            $scope.ESjobSkillTrainers = false;
            $scope.EStoolTrainers = false;
            $scope.getDataByDeliveryType = [];
            $scope.getDataByRole = [];
            $scope.getDataByLevel = [];
            $scope.courseInput = "";
            $scope.selectedDeliveryType = [];
            $scope.selectedRole = [];
            $scope.selectedLevel = [];

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
            
            angular.element(document).ready(function () {
                $scope.getAudienceRowByCS = jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("cs") == true}).parent('tr');
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("cs") == true}).parent('tr').find("a").attr("target", "_top");
                $scope.getAudienceRowByPS = jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("ps") == true}).parent('tr');
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("ps") == true}).parent('tr').find("a").attr("target", "_top");
                $scope.getAudienceRowByIT = jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("it") == true}).parent('tr');
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("it") == true}).parent('tr').find("a").attr("target", "_top");
                $scope.getAudienceRowByES = jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("es") == true}).parent('tr'); 
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").filter(function() {return $(this).text().toLowerCase().split(/[\s,]+/).includes("es") == true}).parent('tr').find("a").attr("target", "_top");
                jive_widget_container_large.find(".masterDocument tbody").html($scope.getAudienceRowByCS);
                jive_widget_container_large.find(".masterDocument").hide();
                jive_widget_container_large.find(".secondaryMasterDocument").hide();
                jive_widget_container_large.find(".supportedVersions").hide();
                $j(".customMasterDocument tr").remove();
                $j(".customMasterDocument").html($scope.getAudienceRowByCS);
                $scope.getCourseRowData = $scope.getAudienceRowByCS;
                setTimeout(function(){
                    jive_widget_container_large.find(".masterDocument thead tr th:nth-child(1)").hide();
                    jive_widget_container_large.find(".masterDocument thead tr th:nth-child(2)").hide();
                    jive_widget_container_large.find(".masterDocument thead tr th:nth-child(5)").hide();
                    jive_widget_container_large.find(".masterDocument thead tr th:nth-child(6)").hide();
                    jive_widget_container_large.find(".masterDocument thead tr th:nth-child(7)").hide();
                    jive_widget_container_large.find(".masterDocument thead tr th:nth-child(8)").hide();
                    jive_widget_container_large.find(".masterDocument thead tr td:nth-child(9)").hide(); 
                    
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(1)").hide();
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(2)").hide();
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(5)").hide();
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(6)").hide();
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(7)").hide();
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(8)").hide();
                    jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(9)").hide(); 
             



                    $j(".customMasterDocument tr td:nth-child(1)").hide();
                    $j(".customMasterDocument tr td:nth-child(2)").hide();
                    $j(".customMasterDocument tr td:nth-child(5)").hide();
                    $j(".customMasterDocument tr td:nth-child(6)").hide();
                    $j(".customMasterDocument tr td:nth-child(7)").hide();
                    $j(".customMasterDocument tr td:nth-child(8)").hide();
                    $j(".customMasterDocument tr td:nth-child(9)").hide();

                }, 1000);
                jive_widget_container_large.find(".masterDocument").hide();
                setTimeout(function(){ 
                    window.parent.$j(".customLoaderPage").parents(".jive-widget-documentviewwidget").remove();
                }, 1000);
                setTimeout(resizeMe,500);
                setTimeout(function(){ 
                    window.parent.$j(".customLoaderPage").parents(".jive-widget-documentviewwidget").remove();
                }, 1000);

                
            });

            $scope.filterByAudience = function(audience){
                $j(".customMasterDocument tr").remove();
                $scope.selectedDeliveryType = [];
                $scope.selectedRole = [];
                $scope.selectedLevel = [];
                $scope.selectedProduct = "";
                $scope.filterRowDetails = false;
                $scope.customMasterDocumentTable = false;
                if(audience == "cs"){
                    $scope.csTab = true; $scope.psTab = false; $scope.itTab = false; $scope.esTab = false; $scope.knowAboutProduct = false;
                    $j(".customMasterDocument").html($scope.getAudienceRowByCS);
                }else if(audience == "ps"){
                    $scope.csTab = false; $scope.psTab = true; $scope.itTab = false; $scope.esTab = false; $scope.knowAboutProduct = false;
                    $j(".customMasterDocument").html($scope.getAudienceRowByPS);
                }else if(audience == "it"){
                    $scope.csTab = false; $scope.psTab = false; $scope.itTab = true; $scope.esTab = false; $scope.knowAboutProduct = false;
                    $j(".customMasterDocument").html($scope.getAudienceRowByIT);
                }else if(audience == "es"){
                    $scope.csTab = false; $scope.psTab = false; $scope.itTab = false; $scope.esTab = true; $scope.knowAboutProduct = false;
                    $j(".customMasterDocument").html($scope.getAudienceRowByES);
                }
                $j(".customMasterDocument tr td:nth-child(1)").hide();
                $j(".customMasterDocument tr td:nth-child(2)").hide();
                $j(".customMasterDocument tr td:nth-child(5)").hide();
                $j(".customMasterDocument tr td:nth-child(6)").hide();
                $j(".customMasterDocument tr td:nth-child(7)").hide();
                $j(".customMasterDocument tr td:nth-child(8)").hide();
                $j(".customMasterDocument tr td:nth-child(9)").hide();
                setTimeout(resizeMe,0);    
            }
            $scope.getProductBlock = function(product){
                    $scope.selectedDeliveryType = [];
                    $scope.selectedRole = [];
                    $scope.selectedLevel = [];
                    $scope.knowAboutProduct = false;
                    jive_widget_container_large.find(".masterDocument").hide();
                    if(product == null){
                        $scope.customMasterDocumentTable = false;$scope.linkSeries = false; $scope.filterRowDetails = false; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.learningAcademy = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }else if(product == "arch"){
                        $scope.customMasterDocumentTable = true; $scope.linkSeries = false; $scope.filterRowDetails = true; $scope.arch = true; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.learningAcademy = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }else if(product == "aa"){
                        $scope.customMasterDocumentTable = true; $scope.linkSeries = false; $scope.filterRowDetails = true; $scope.arch = false; $scope.aa = true; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.learningAcademy = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }else if(product == "nw"){
                        $scope.customMasterDocumentTable = true; $scope.linkSeries = false; $scope.filterRowDetails = true; $scope.arch = false; $scope.aa = false; $scope.nw = true; $scope.igl = false; $scope.sida = false; $scope.learningAcademy = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }else if(product == "igl"){
                        $scope.customMasterDocumentTable = true; $scope.linkSeries = false; $scope.filterRowDetails = true; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = true; $scope.sida = false; $scope.learningAcademy = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }else if(product == "sida"){
                        $scope.customMasterDocumentTable = true; $scope.linkSeries = false; $scope.learningAcademy = false; $scope.filterRowDetails = true; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = true; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }
                    else if(product == "learningAcademy"){
                        $scope.customMasterDocumentTable = false; $scope.knowAboutProduct = true;
                        $scope.linkSeries = false; $scope.learningAcademy = true; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }

                    else if(product == "linkSeries"){
                        $scope.customMasterDocumentTable = false; $scope.knowAboutProduct = true;
                        $scope.linkSeries = true; $scope.learningAcademy = false; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }
                    else if(product == "ESjobSkillDesigners"){
                        $scope.customMasterDocumentTable = false; $scope.knowAboutProduct = true;
                        $scope.linkSeries = false; $scope.learningAcademy = false; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.ESjobSkillDesigners = true; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }else if(product == "EStoolDesigners"){
                        $scope.customMasterDocumentTable = false; $scope.knowAboutProduct = true;
                        $scope.linkSeries = false; $scope.learningAcademy = false; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = true; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = false;
                    }else if(product == "ESjobSkillTrainers"){
                        $scope.customMasterDocumentTable = false; $scope.knowAboutProduct = true;
                        $scope.linkSeries = false; $scope.learningAcademy = false; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = true; $scope.EStoolTrainers = false;
                    }else if(product == "EStoolTrainers"){
                        $scope.customMasterDocumentTable = false; $scope.knowAboutProduct = true;
                        $scope.linkSeries = false; $scope.learningAcademy = false; $scope.arch = false; $scope.aa = false; $scope.nw = false; $scope.igl = false; $scope.sida = false; $scope.ESjobSkillDesigners = false; $scope.EStoolDesigners = false; $scope.ESjobSkillTrainers = false; $scope.EStoolTrainers = true;
                    }
                    
            }
            


            $scope.filterByProduct = function(product){
                $scope.selectedDeliveryType = [];
                $scope.selectedRole = [];
                $scope.selectedLevel = [];
                $scope.filterRowDetails = false;
                $scope.getProductRowData = [];
                $scope.getCourseRowData = "";
                if($scope.csTab == true){
                    $scope.getProductBlock(product);
                    $scope.getProductRowData = $scope.getAudienceRowByCS.filter(function() {return $(this).find("td:nth-child(2)").text().toLowerCase().split(/[\s,]+/).includes(product.toLowerCase()) == true;});
                    $j(".customMasterDocument tr").remove();
                    if($scope.getProductRowData.length == 0){
                        $j(".customMasterDocument").append(noDataFound);
                    }else{
                        $j(".customMasterDocument").html($scope.getProductRowData);
                        $scope.getCourseRowData = $scope.getProductRowData;    
                    }                    
                
                }else if($scope.psTab == true){
                    $scope.getProductBlock(product);
                    $scope.getProductRowData = $scope.getAudienceRowByPS.filter(function() {return $(this).find("td:nth-child(2)").text().toLowerCase().split(/[\s,]+/).includes(product.toLowerCase()) == true;});
                    console.log($scope.getProductRowData);
                    $j(".customMasterDocument tr").remove();
                    if($scope.getProductRowData.length == 0){
                        $j(".customMasterDocument").append(noDataFound);    
                    }else{
                        $j(".customMasterDocument").html($scope.getProductRowData);
                        $scope.getCourseRowData = $scope.getProductRowData;    
                    }

                
                }else if($scope.itTab == true){
                    $scope.getProductBlock(product);
                    $scope.getProductRowData = $scope.getAudienceRowByIT.filter(function() {return $(this).find("td:nth-child(2)").text().toLowerCase().split(/[\s,]+/).includes(product.toLowerCase()) == true;});
                    $j(".customMasterDocument tr").remove();
                    if($scope.getProductRowData.length == 0){
                        $j(".customMasterDocument").append(noDataFound);    
                    }else{
                        $j(".customMasterDocument").html($scope.getProductRowData);
                        $scope.getCourseRowData = $scope.getProductRowData;    
                    }
                }else if($scope.esTab == true){
                    $scope.getProductBlock(product);
                    $scope.getProductRowData = $scope.getAudienceRowByES.filter(function() {return $(this).find("td:nth-child(2)").text().toLowerCase().split(/[\s,]+/).includes(product.toLowerCase()) == true;});
                    $j(".customMasterDocument tr").remove();
                    if($scope.getProductRowData.length == 0){
                        $j(".customMasterDocument").append(noDataFound);    
                    }else{
                        $j(".customMasterDocument").html($scope.getProductRowData);
                        $scope.getCourseRowData = $scope.getProductRowData;    
                    }
                }
                $scope.deliveryType = [{"id":"ILTc","label":"Live Instructor Led Training - Classroom"},{"id":"ILTv","label":"Live Instructor Led Training - Virtual"},{"id":"ODC","label":"On-Demand - Self-Paced Classroom"},{"id":"ODLe","label":"On-Demand Learning"},{"id":"ODLab","label":"On-Demand Lab"}];
                //Declare scope variable for Role drop-down option
                $scope.roles = [{"id":"ADM","label":"Administrator"},{"id":"AN","label":"Analyst"},{"id":"BU","label":"Business User"},{"id":"CD","label":"Content Developer"},{"id":"EU","label":"End User"},{"id":"CEU","label":"Custom End User"},{"id":"HD","label":"Help Desk Technician"},{"id":"SE","label":"System Engineer"}];
                //Declare scope variable for Level drop-down option
                $scope.levels = [{"id":"CA","label":"Certified Associate"},{"id":"CAD","label":"Certified Administrator"},{"id":"CAN","label":"Certified Analyst"},{"id":"CP","label":"Certified Professional"}];
                $scope.tempDeliveryType = [];
                $scope.filterDeliveryType = []; 
                $scope.tempRole = [];
                $scope.filterRoles = []; 
                $scope.tempLevels = [];
                $scope.filterLevels = []; 
                
                angular.forEach($scope.getProductRowData.find("td:nth-child(5)"), function (value, key) { 
                    $scope.tempDeliveryType.push($j(value).text()); 
                });
                $.each($scope.tempDeliveryType.toString().split(','), function(i, el){
                    if($.inArray(el, $scope.filterDeliveryType) === -1) $scope.filterDeliveryType.push(el);
                });
                $scope.deliveryType = $scope.deliveryType.filter(function(val) {return $scope.filterDeliveryType.find(function(e){return e == val.id;});});
                
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
                
                setTimeout(resizeMe,0);                
            }

            
            /*$scope.filterByColumn = function(){
                $scope.courseInput = "";
                $scope.getCourseRowData = [];
                jive_widget_container_large.find(".masterDocument tbody tr").remove();
                if(($scope.selectedDeliveryType == null) && ($scope.selectedRole == null) && ($scope.selectedLevel == null)){
                    $scope.getCourseRowData = $scope.getProductRowData;
                    if($scope.getCourseRowData.length == 0){
                        jive_widget_container_large.find(".masterDocument tbody").html(noDataFound);
                    }else{
                        jive_widget_container_large.find(".masterDocument tbody").html($scope.getProductRowData);
                    }
                }else if(($scope.selectedDeliveryType != null) && ($scope.selectedRole == null) && ($scope.selectedLevel == null)){
                    $scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedDeliveryType.toLowerCase()) == true)});
                }else if(($scope.selectedDeliveryType != null) && ($scope.selectedRole != null) && ($scope.selectedLevel == null)){
                    $scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedDeliveryType.toLowerCase()) == true) && ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedRole.toLowerCase()) == true)});                    
                }else if(($scope.selectedDeliveryType != null) && ($scope.selectedRole == null) && ($scope.selectedLevel != null)){
                    $scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedDeliveryType.toLowerCase()) == true) && ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedLevel.toLowerCase()) == true)});                      
                }else if(($scope.selectedDeliveryType == null) && ($scope.selectedRole == null) && ($scope.selectedLevel != null)){
                    $scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedLevel.toLowerCase()) == true)});  
                }else if(($scope.selectedDeliveryType == null) && ($scope.selectedRole != null) && ($scope.selectedLevel == null)){
                    $scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedRole.toLowerCase()) == true)}); 
                }else if(($scope.selectedDeliveryType == null) && ($scope.selectedRole != null) && ($scope.selectedLevel != null)){
                    $scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedRole.toLowerCase()) == true) && ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedLevel.toLowerCase()) == true)}); 
                }else if(($scope.selectedDeliveryType != null) && ($scope.selectedRole != null) && ($scope.selectedLevel != null)){
                    $scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedDeliveryType.toLowerCase()) == true) && ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedRole.toLowerCase()) == true) && ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes($scope.selectedLevel.toLowerCase()) == true)}); 

                }
                if($scope.getCourseRowData.length == 0){
                    jive_widget_container_large.find(".masterDocument tbody").html(noDataFound);
                }else{
                    jive_widget_container_large.find(".masterDocument tbody").html($scope.getCourseRowData);
                }

            };
            
            $scope.searchCourse = function (event) {
                $scope.getCourseRowData.filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf($(event.target).val().toLowerCase()) > -1);
                });
            };*/
            $scope.filterByColumn = function(){
                $j(".customMasterDocument tr").show();
                $scope.courseInput = "";
                $scope.getCourseRowData = [];
                //jive_widget_container_large.find(".masterDocument tbody tr").remove();
                $j(".customMasterDocument tr").remove();
                var selectedDeliveryType = Object.keys($scope.selectedDeliveryType).map(function(key) {return $scope.selectedDeliveryType[key].id;});
                var selectedRole = Object.keys($scope.selectedRole).map(function(key) {return $scope.selectedRole[key].id;});
                var selectedLevel = Object.keys($scope.selectedLevel).map(function(key) {return $scope.selectedLevel[key].id;});
                
                if((selectedDeliveryType.length == 0) && (selectedRole.length == 0) && (selectedLevel.length == 0)){
                    $scope.getCourseRowData = $scope.getProductRowData;
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length == 0) && (selectedLevel.length == 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    //$scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(selectedDeliveryType.toLowerCase()) == true)});
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length > 0) && (selectedLevel.length == 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    //$scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(selectedDeliveryType.toLowerCase()) == true) && ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(selectedRole.toLowerCase()) == true)});                    
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length == 0) && (selectedLevel.length > 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    //$scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(selectedDeliveryType.toLowerCase()) == true) && ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(selectedLevel.toLowerCase()) == true)});                   
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length == 0) && (selectedLevel.length > 0)){
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    //$scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(selectedLevel.toLowerCase()) == true)});  
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length > 0) && (selectedLevel.length == 0)){
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    //$scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(selectedRole.toLowerCase()) == true)}); 
                }else if((selectedDeliveryType.length == 0) && (selectedRole.length > 0) && (selectedLevel.length > 0)){
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    //$scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(selectedRole.toLowerCase()) == true) && ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(selectedLevel.toLowerCase()) == true)});
                }else if((selectedDeliveryType.length > 0) && (selectedRole.length > 0) && (selectedLevel.length > 0)){
                    angular.forEach(selectedDeliveryType, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedRole, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    angular.forEach(selectedLevel, function (value, key) { 
                        $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
                    });
                    //$scope.getCourseRowData = $scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(selectedDeliveryType.toLowerCase()) == true) && ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(selectedRole.toLowerCase()) == true) && ($(this).find("td:nth-child(8)").text().toLowerCase().split(/[\s,]+/).includes(selectedLevel.toLowerCase()) == true)}); 
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