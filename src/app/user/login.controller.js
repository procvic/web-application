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
            }, function(data) {
                // only when unauthorized is passed from auth service
                // @todo catch up other errors with universal alert saying e.g. Unexpected error occurred
                if (data.status === 401) {
                    $scope.loginForm.$setValidity('correctCredentials', false);
                }
            });
        };

        $scope.openRegisterModal = function() {
            $scope.$dismiss();
            registerModalService.open();
        };
    }
})();
