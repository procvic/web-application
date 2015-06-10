(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$location', '$modal'];

    function NavigationController($scope, $location, $modal) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.openLoginModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/user/login.html',
                controller: 'LoginController'
            });
        };

        $scope.openRegisterModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/user/register.html',
                controller: 'RegisterController'
            });
        }
    }
})();
