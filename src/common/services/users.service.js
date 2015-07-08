(function() {
    'use strict';

    angular
        .module('app')
        .factory('usersService', usersService);

    usersService.$inject = ['$http', '$localStorage'];

    function usersService($http, $localStorage) {
        return {
            getUser: getUser
        };

        function getUser(id) {
            return $http.get('http://gateway.procvic.cz/users/get-info/' + id + '?access_token=' + $localStorage.accessToken);
        }
    }
})();
