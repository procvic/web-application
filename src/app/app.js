(function() {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'app.layout',
        'app.home',
        'app.category'
    ]);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({
            redirectTo : '/'
        });

        if(window.history && window.history.pushState){
            $locationProvider.html5Mode(true);
        }
    }]);
})();
