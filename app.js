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
weatherApp.controller("forecastController",["$scope","$resource","cityService",function($scope,$resource,cityService){
   $scope.cityName = cityService.name;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?q=" + $scope.cityName + ",SAC&mode=JSON&appid=5a0549aee2a30bfdfa64995d4ba90b3a",{callback:"JSON_CALLBACK"},{ get: {method: "JSONP"}});
   
    $scope.weatherResult = $scope.weatherAPI.get({        
    });
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToCentigrade = function(degK){
        
        return Math.round (degK - 273.15);
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);


weatherApp.directive("weatherReport",function(){
    return{
        restrict: "E",
        templateUrl: "directives/weatherReport.html",
        replace: true,
        scope: {
            day: '=',
            convertToCentigrade: "&",
            convertToFahrenheit: "&",
            convertToDate: "&",
            
            
            
        }
        
    }
    
    
    
});