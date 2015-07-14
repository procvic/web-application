(function() {
    'use strict';

    angular
        .module('app.user')
        .config(userRouter);

    userRouter.$inject = ['$stateProvider'];

    function userRouter($stateProvider) {
        $stateProvider.state('user', {
            abstract: true
        });

        $stateProvider.state('settings', {
            url: '/settings',
            templateUrl : 'app/user/templates/settings.html',
            controller : 'SettingsController',
            data: {
                restricted: true,
                sidebar: true
            }
        });
    }
})();
