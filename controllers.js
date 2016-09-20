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

//homeController
weatherApp.controller("homeController",["$scope","$location","cityService",function($scope,$location,cityService){
    $scope.cityName = cityService.name;
    
    $scope.$watch('cityName',function(){
        cityService.name =  $scope.cityName;
        
    });
    
    $scope.submit = function(){
      $location.path("/forecast")  
        
    }
   
}]);
