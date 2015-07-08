(function() {
    'use strict';

    angular
        .module('app')
        .service('loginModalService', loginModalService);

    loginModalService.$inject = ['$modal'];

    /**
     *
     * @param $modal
     * @returns {{open: open}}
     */
    function loginModalService($modal) {
        this.open = function() {
            this.modalInstance = $modal.open({
                templateUrl: 'app/user/templates/login.html',
                controller: 'LoginController',
                animation: false
            });
        };

        this.close = function() {
            this.modalInstance.close();
        }
    }
})();
