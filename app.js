var weatherApp = angular.module("weatherApp",['ngRoute','ngResource']);


weatherApp.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "pages/home.html",
        controller:"homeController"
    })
    
    .when("/forecast",{
        templateUrl: "pages/forecast.html",
        controller:"forecastController"
    })
})


//homeController
weatherApp.controller("homeController",["$scope",function($scope){
    
   
}])

//forecastController
weatherApp.controller("forecastController",["$scope",function($scope){
    
   
}])