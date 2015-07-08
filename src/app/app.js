(function () {
    'use strict';

    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngStorage',

        'app.user',
        'app.layout',
        'app.subject',
        'app.home',
        'app.categories'
    ]);

    app.config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];


    function appConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode(true);
        }
    }

    app.run(['$rootScope', 'authenticationService', function($rootScope, authenticationService){
        authenticationService.requestCurrentUser().then(function () {
            $rootScope.$broadcast('loggedIn');
        });
    }]);
})();
