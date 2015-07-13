(function() {
    'use strict';

    angular
        .module('app')
        .factory('usersService', usersService);

    usersService.$inject = ['$http', '$localStorage'];

    function usersService($http, $localStorage) {
        return {
            me: me
        };

        function me() {
            return $http.get('http://gateway.procvic.cz/users/me/?access_token=' + $localStorage.accessToken);
        }
    }
})();
