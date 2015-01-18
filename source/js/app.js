"use strict";
angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'templates/directory.html',
            controller: 'MainCtrl'
        })
        .when('/movie/:id', {
            templateUrl:'/templates/view.html',
            controller: 'viewController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('myApp').controller('MainCtrl', function () {
    //console.log('MainCtrl invoked!');
});

angular.module('myApp').controller('directoryController',['$scope','$http',function($scope,$http){
	$http.get('./data/data.json').success(function(data){
		$scope.movies=data
	})
}]);

angular.module('myApp').controller('viewController',['$scope','$routeParams',function($scope,$routeParams){
	$scope.movie = $scope.movies[$routeParams.id]
}]);

angular.module('myApp').controller('TimeCtrl', function ($scope, $timeout) {
   $scope.tickInterval = 1000 //ms

    var tick = function () {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
});