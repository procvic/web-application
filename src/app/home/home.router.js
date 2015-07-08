(function() {
    'use strict';

    angular
        .module('app.home')
        .config(HomeRouter);

    HomeRouter.$inject = ['$stateProvider'];

    function HomeRouter($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl : 'app/home/templates/home.html',
            controller : 'HomeController'
        });
    }
})();
