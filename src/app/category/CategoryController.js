var categoryModule = angular.module('categoryModule', []);

categoryModule.config(['$routeProvider', function ($routeProvider){
    $routeProvider.when('/categories', {
        templateUrl : 'app/category/categories.html',
        controller : 'CategoriesController'
    });
}]);

categoryModule.controller('CategoriesController', ['$scope', function ($scope) {

}]);