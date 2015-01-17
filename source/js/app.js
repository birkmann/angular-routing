angular.module('myApp',[])
.config(function($routeProvider){
	$routeProvider
		.when('/',{templateUrl:'templates/directory.html'})
		.when('/movie/:id',{templateUrl:'/templates/view.html',controller:'viewController'})
		.otherwise({redirectTo:'/'})
})
.controller('directoryController',['$scope','$http',function($scope,$http){
	$http.get('/data/data.json').success(function(data){
		$scope.movies=data
	})
}])
.controller('viewController',['$scope','$routeParams',function($scope,$routeParams){
	$scope.movie = $scope.movies[$routeParams.id]
}])