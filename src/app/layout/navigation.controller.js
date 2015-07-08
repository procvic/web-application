(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', 'loginModalService', 'registerModalService', 'authenticationService'];


    function NavigationController($scope, loginModalService, registerModalService, authenticationService) {
        var vm = this;

        vm.isAuthenticated = authenticationService.isAuthenticated();


        $scope.$on('loggedIn', function(value){
            vm.isAuthenticated = true;
            vm.user = authenticationService.getCurrentUser();
        });


        vm.openLoginModal = function() {
            loginModalService.open();
        };

        vm.openRegisterModal = function() {
            registerModalService.open();
        };

        vm.logout = function() {
            authenticationService.logout().then(function() {
                vm.isAuthenticated = false;
            });
        }
    }
})();
