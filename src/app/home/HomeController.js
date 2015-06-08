var homeModule = angular.module('homeModule', []);

homeModule.config(['$routeProvider', function ($routeProvider){
    $routeProvider.when('/home', {
        templateUrl : 'app/home/home.html',
        controller : 'HomeController'
    });
}]);

homeModule.controller('HomeController', ['$scope', function ($scope) {

}]);