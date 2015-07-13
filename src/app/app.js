(function () {
    'use strict';

    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngStorage',
        'ngMessages',
        'angular-svg-round-progress',

        'app.user',
        'app.layout',
        'app.subjects',
        'app.home',
        'app.categories'
    ]);

    app.config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];


    function appConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
        }
    }

    app.run(['$rootScope', 'authenticationService', function($rootScope, authenticationService){
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $rootScope.showSidebar = toState.data.sidebar;
        });

        authenticationService.requestCurrentUser().then(function () {
            $rootScope.$broadcast('loggedIn');
        });
    }]);
})();
