(function() {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'ui.bootstrap',
        'angular-loading-bar',

        'app.user',
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
