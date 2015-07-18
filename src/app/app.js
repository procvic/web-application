(function () {
    'use strict';

    angular.module('app', [
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

    angular.module('app').config(appConfig);

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

    angular.module('app').run(appRun);

    appRun.$inject = ['$rootScope', '$location', '$timeout', 'authenticationService'];

    /**
     * @param $rootScope
     * @param $location
     * @param $timeout
     * @param authenticationService
     */
    function appRun($rootScope, $location, $timeout, authenticationService) {
        authenticationService.requestCurrentUser().then(function () {
            $rootScope.$broadcast('loggedIn');
        });

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            console.log(authenticationService.isAuthenticated());
            if (toState.data.restricted === true) {
                if (!authenticationService.isAuthenticated()) {
                    $timeout(function () {
                        $location.path('/');
                    });
                }
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            $rootScope.showSidebar = toState.data.sidebar;
        });
    }
})();
