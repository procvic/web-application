(function() {
    'use strict';

    angular
        .module('app')
        .service('registerModalService', registerModalService);

    registerModalService.$inject = ['$modal'];

    /**
     *
     * @param $modal
     */
    function registerModalService($modal) {
        /*jshint validthis:true */
        this.open = function() {
            this.modalInstance = $modal.open({
                templateUrl: 'app/user/templates/register.html',
                controller: 'RegisterController',
                controllerAs: 'registerController',
                animation: false
            });
        };
    }
})();
