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
//my severvice
weatherApp.service("cityService",function(){
    this.name = "";
    
});


//homeController
weatherApp.controller("homeController",["$scope","cityService",function($scope,cityService){
    $scope.cityName = cityService.name;
    
    $scope.$watch('cityName',function(){
        cityService.name =  $scope.cityName;
        
    });
   
}]);

//forecastController
weatherApp.controller("forecastController",["$scope","cityService",function($scope,cityService){
   $scope.cityName = cityService.name;
   
}]);