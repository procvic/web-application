(function() {
    'use strict';

    angular
        .module('app.home', [])
        .config(['$routeProvider', function ($routeProvider){
            $routeProvider.when('/', {
                templateUrl : 'app/home/home.html',
                controller : 'HomeController'
            });
        }]);
})();
