(function() {
    'use strict';

    angular
        .module('app.category', [])
        .config(['$routeProvider', function ($routeProvider){
            $routeProvider.when('/categories', {
                templateUrl : 'app/category/categories.html',
                controller : 'CategoriesController'
            });
        }]);
})();
