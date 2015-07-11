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
        /*jshint validthis:true */
        this.open = function() {
            this.modalInstance = $modal.open({
                templateUrl: 'app/user/templates/login.html',
                controller: 'LoginController',
                animation: false
            });
        };

        /*jshint validthis:true */
        this.close = function() {
            this.modalInstance.close();
        };
    }
})();
