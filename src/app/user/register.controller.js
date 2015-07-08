(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope', 'loginModalService'];

    function RegisterController($scope, loginModalService) {
        var vm = this;

        vm.openLoginModal = function() {
            $scope.$dismiss();
            loginModalService.open();
        };
    }
})();
