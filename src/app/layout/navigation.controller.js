(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$location'];

    function NavigationController($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }
})();
