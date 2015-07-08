(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope', 'authenticationService', 'registerModalService'];

    function LoginController($scope, $rootScope, authenticationService, registerModalService) {
        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function() {
            authenticationService.authenticate($scope.credentials).then(function() {
                $scope.$dismiss();
                $rootScope.$broadcast('loggedIn');
            }, function() {
                console.log('error');
            });
        };

        $scope.openRegisterModal = function() {
            $scope.$dismiss();
            registerModalService.open();
        };
    }
})();
