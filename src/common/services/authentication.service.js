(function () {
    'use strict';

    angular
        .module('app')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$q', '$http', '$localStorage', 'usersService'];

    function authenticationService($q, $http, $localStorage, usersService) {
        var currentUser = null;

        var accessToken = {
            set: function (accessToken) {
                $localStorage.accessToken = accessToken;
            },
            get: function () {
                return (!!$localStorage.accessToken ? $localStorage.accessToken : false);
            }
        };

        return {
            authenticate: authenticate,
            isAuthenticated: isAuthenticated,
            getCurrentUser: getCurrentUser,
            requestCurrentUser: requestCurrentUser,
            logout: logout
        };

        function authenticate(credentials) {
            return requestAccessToken(credentials.username, credentials.password).then(function (response) {
                accessToken.set(response.data.access_token);
                return requestCurrentUser();
            });
        }

        function isAuthenticated() {
            return !!currentUser;
        }


        function getCurrentUser() {
            return currentUser;
        }


        function requestCurrentUser() {
            var deferred = $q.defer();

            usersService.getUser(1).then(function (response) {
                if (response.data.error) {
                    deferred.reject();
                }

                currentUser = {
                    username: response.data.surname + ' ' + response.data.lastname
                };

                deferred.resolve();
            });

            return deferred.promise;
        }

        function requestAccessToken(username, password) {
            var query = 'grant_type=password&client_id=demoapp&client_secret=demopass&username=' + username + '&password=' + password;

            return $http.post('http://auth.procvic.cz/authenticate', /*{
             grant_type: 'password',
             client_id: 'demoapp',
             client_secret: 'demopass',
             username: username,
             password: password
             }*/query, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
        }

        function logout() {
            var deferred = $q.defer();

            accessToken.set(null);
            currentUser = null;

            deferred.resolve();

            return deferred.promise;

        }
    }
})
();
