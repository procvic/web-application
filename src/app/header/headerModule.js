var headerModule = angular.module('headerModule', []);

headerModule.controller('NavigationController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    };
}]);