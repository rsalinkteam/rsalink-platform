/*
    Website:        RSA Charge Space (https://community.rsa.com/community/charge)
    Iteration:      RSA Charge Redesign 2019
    Scope:          RSA Charge Landing Page
    Author:         Santhosh
    Last Editor:    Santhosh
    Last Updated:   10 Sep 2019
*/
var app = angular.module('ngchangeApp', ['angularjs-dropdown-multiselect']);
var $j = jQuery.noConflict();
var jive_widget_container_large = window.parent.$j(".jive-widget-container-large");
var noDataFound = '<tr id="noDataFound" style="height: 25px; background-color: #eeeff0;"><td colspan="5" style="width: 18%; height: 89px; font-size: 28px; vertical-align: middle; text-align: center;">NO DATA FOUND</td></tr>';
app.controller('ngApp', function($scope) {
    //Declare scope variable for Product drop-down option 
    //Filter rsaProdFilter
    $scope.rsaProdFilter = [{"id":"AR","label":"RSA Archer Suite"},{"id":"FRI","label":"RSA Fraud & Risk Intelligence Suite"},{"id":"NW","label":"RSA NetWitness Platform"},{"id":"SID","label":"RSA SecurID Suite"}];
    //Declare scope variable for Track drop-down option
    $scope.trackFilter = [{"id":"BCMCP","label":"Beyond the Checkbox: Modernizing Your Compliance Program"},{"id":"BRAE","label":"Business Resiliency for the 'Always On' Enterprise"},{"id":"ETPRDT","label":"Evolving Third Party Risk for Digital Transformation"},{"id":"MORI","label":"Managing Operational Risk for Impact"},{"id":"MRDW","label":"Managing Risk In The Dynamic Workforce"},{"id":"TCTDR","label":"Transforming Cyber Threat Detection & Response"},{"id":"SLST","label":"View From The Clouds: Securing LaaS And SaaS Transformation"},{"id":"Technical","label":"Technical"},{"id":"PORSAL","label":"Performance Optimization - RSA Learning Labs"},{"id":"RSAU","label":"RSA University"}];
    $scope.tempRsaProdFilter = [];
    $scope.filterRsaProd = []; 
    $scope.tempTrack = [];
    $scope.filterTracks = []; 
               
    $scope.getProductRowData = []; 
    $scope.getCourseRowData = [];
    $scope.courseInput = "";
    
    $scope.selectedRsaProdFilter = [];
    $scope.selectedTrack = [];
   
    $scope.rsaProdFilterSettings = {
        scrollableHeight: 'auto',
        scrollable: true,
        showCheckAll: false,
        showUncheckAll: false
    };
    $scope.trackSettings = {
        scrollableHeight: 'auto',
        scrollable: true,
        showCheckAll: false,
        showUncheckAll: false
    };
    $scope.rsaProduct = {
        checkAll: 'Check All',
        uncheckAll: 'Uncheck All',
        selectionCount: 'checked',
        selectionOf: '/',
        searchPlaceholder: 'Search...',
        buttonDefaultText: '--Select RSA Product--',
        dynamicButtonTextSuffix: 'checked'
    };
    $scope.trackText = {
        checkAll: 'Check All',
        uncheckAll: 'Uncheck All',
        selectionCount: 'checked',
        selectionOf: '/',
        searchPlaceholder: 'Search...',
        buttonDefaultText: '--Select Track--',
        dynamicButtonTextSuffix: 'checked'
    };
                
    $scope.init = function () {    
        $scope.getProductRowData = jive_widget_container_large.find(".masterDocument tbody tr");             
                       
        //Filter Track
        angular.forEach($scope.getProductRowData.find("td:nth-child(5)"), function (value, key) { 
            $scope.tempTrack.push($j(value).text()); 
        });
        $.each($scope.tempTrack.toString().split(/[\s,]+/), function(i, el){
            if($.inArray(el, $scope.filterTracks) === -1) $scope.filterTracks.push(el);
        });
        $scope.trackFilter = $scope.trackFilter.filter(function(val) {return $scope.filterTracks.find(function(e){return e == val.id;});});
                       
        jive_widget_container_large.find(".masterDocument tbody tr").remove();
        jive_widget_container_large.find(".masterDocument tbody").html($scope.getProductRowData);
        $scope.getCourseRowData = $scope.getProductRowData;
        
        //Hiding unwanted coulmn of masterDocument
        jive_widget_container_large.find(".masterDocument thead tr th:nth-child(5)").hide();
        jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(5)").hide();
        jive_widget_container_large.find(".masterDocument thead tr th:nth-child(6)").hide();
        jive_widget_container_large.find(".masterDocument tbody tr td:nth-child(6)").hide();

        $j(".customMasterDocument").html($scope.getProductRowData);
        jive_widget_container_large.find(".masterDocument").hide();
        jive_widget_container_large.find(".toc").hide();
        jive_widget_container_large.find("h2").hide();
        jive_widget_container_large.find("p.returnTop").hide();
        setTimeout(function(){ 
            window.parent.$j(".customLoaderPage").parents(".jive-widget-documentviewwidget").remove();
        }, 1000);
        setTimeout(resizeMe,1000);                              
    };
    $scope.init();
    //Row Filter By rsaProdFilter
    $scope.filterByColumn = function(){
        $j(".customMasterDocument tr").show();
        $scope.courseInput = "";
        $scope.getCourseRowData = [];
        $j(".customMasterDocument tr").remove();
        var selectedRsaProdFilter = Object.keys($scope.selectedRsaProdFilter).map(function(key) {return $scope.selectedRsaProdFilter[key].id;});
        var selectedTrack = Object.keys($scope.selectedTrack).map(function(key) {return $scope.selectedTrack[key].id;});
        
        if((selectedRsaProdFilter.length == 0) && (selectedTrack.length == 0)){
            $scope.getCourseRowData = $scope.getProductRowData;
        }else if((selectedRsaProdFilter.length > 0) && (selectedTrack.length == 0)){
            angular.forEach(selectedRsaProdFilter, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });
        }else if((selectedRsaProdFilter.length > 0) && (selectedTrack.length > 0)){
            angular.forEach(selectedRsaProdFilter, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });
            angular.forEach(selectedTrack, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });                 
        }else if((selectedRsaProdFilter.length > 0) && (selectedTrack.length == 0)){
            angular.forEach(selectedRsaProdFilter, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });               
        }else if((selectedRsaProdFilter.length == 0) && (selectedTrack.length > 0)){
            angular.forEach(selectedTrack, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });
        }else if((selectedRsaProdFilter.length == 0) && (selectedTrack.length > 0)){
            angular.forEach(selectedTrack, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });
        }else if((selectedRsaProdFilter.length > 0) && (selectedTrack.length > 0)){
            angular.forEach(selectedRsaProdFilter, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(6)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });
            angular.forEach(selectedTrack, function (value, key) { 
                $scope.getCourseRowData.push($scope.getProductRowData.filter(function() {return ($(this).find("td:nth-child(5)").text().toLowerCase().split(/[\s,]+/).includes(value.toLowerCase()) == true)})); 
            });
        }

        if($scope.getCourseRowData.length == 0){
            $j(".customMasterDocument").html(noDataFound);
        }else{
            $j(".customMasterDocument").html($scope.getCourseRowData);
        }
        setTimeout(resizeMe,0);                                            
    };
    
    //Filter row by Presentation, Product and Track
    $scope.searchPresentation = function (event) {
        $j(".customMasterDocument tr").show();
        console.log($scope.getCourseRowData);
        var selectedRsaProdFilter = Object.keys($scope.selectedRsaProdFilter).map(function(key) {return $scope.selectedRsaProdFilter[key].id;});
        var selectedTrack = Object.keys($scope.selectedTrack).map(function(key) {return $scope.selectedTrack[key].id;});
        if((selectedRsaProdFilter.length == 0) && (selectedTrack.length == 0)){
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